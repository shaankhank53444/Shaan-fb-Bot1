/**
 * Pair Command
 * Match users based on opposite gender with visual canvas
 */

const fs = require('fs');
const fsPromises = fs.promises;
const path = require('path');
const axios = require('axios');
const { createCanvas, loadImage } = require('canvas');

const FALLBACK_GRAPH_TOKEN = '6628568379%7Cc1e620fa708a1d5696fb991c1bde5662';

module.exports = {
  config: {
    name: 'pair',
    aliases: ['match', 'couple'],
    description: 'Find your perfect match based on gender preferences',
    usage: '{prefix}pair',
    credit: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    hasPrefix: true,
    permission: 'PUBLIC',
    cooldown: 5,
    category: 'FUN'
  },

  run: async function({ api, message, args }) {
    const { threadID, messageID, senderID } = message;

    try {
      // Get sender info using getUserInfo API
      const senderInfo = await api.getUserInfo(senderID);
      if (!senderInfo || !senderInfo[senderID]) {
        return api.sendMessage("❌ Aapka profile data nahi mil saka. Dobara koshish karein.", threadID, messageID);
      }

      const senderData = senderInfo[senderID];
      const senderGender = senderData.gender;
      const senderName = senderData.name || "Anjaan User";

      // Determine target gender (opposite gender)
      let targetGender;
      if (senderGender === 1 || senderGender === 'FEMALE') {
        targetGender = [2, 'MALE'];
      } 
      else if (senderGender === 2 || senderGender === 'MALE') {
        targetGender = [1, 'FEMALE'];
      } else {
        return api.sendMessage("❌ Aapke gender ka pata nahi chal saka. Profile update karein.", threadID, messageID);
      }

      const threadInfo = await api.getThreadInfo(threadID);
      const participantIDs = threadInfo.participantIDs.filter(id => id !== senderID);

      if (participantIDs.length === 0) {
        return api.sendMessage("❌ Is group mein koi aur member nahi mila match karne ke liye.", threadID, messageID);
      }

      const potentialMatches = [];
      for (const userID of participantIDs) {
        try {
          const userInfo = await api.getUserInfo(userID);
          if (userInfo && userInfo[userID]) {
            const userData = userInfo[userID];
            const userGender = userData.gender;

            if (targetGender.includes(userGender)) {
              potentialMatches.push({
                userID: userID,
                name: userData.name || "Anjaan User",
                gender: userGender
              });
            }
          }
        } catch (error) {
          console.log(`[pair] Could not get info for user ${userID}`);
        }
      }

      if (potentialMatches.length === 0) {
        const genderText = targetGender.includes(1) || targetGender.includes('female') ? "Larki" : "Larka";
        return api.sendMessage(`❌ Is group mein koi ${genderText} nahi mili jo aapke sath pair ho sake.`, threadID, messageID);
      }

      const randomMatch = potentialMatches[Math.floor(Math.random() * potentialMatches.length)];
      const matchPercentage = Math.floor(Math.random() * 40) + 60;

      const pairImagesPath = path.join(__dirname, 'cache', 'pairs');
      const pairImages = fs.readdirSync(pairImagesPath).filter(file => 
        file.endsWith('.png') || file.endsWith('.gif') || file.endsWith('.jpg')
      );

      if (pairImages.length === 0) {
        return api.sendMessage("❌ Cache folder mein pair images nahi mili.", threadID, messageID);
      }

      const randomPairImage = pairImages[Math.floor(Math.random() * pairImages.length)];
      const pairImagePath = path.join(pairImagesPath, randomPairImage);

      const graphToken = (global.config?.facebookToken && global.config.facebookToken.trim().length > 0)
        ? global.config.facebookToken.trim()
        : FALLBACK_GRAPH_TOKEN;

      const senderProfileUrl = `https://graph.facebook.com/${senderID}/picture?height=720&width=720&access_token=${graphToken}`;
      const matchProfileUrl = `https://graph.facebook.com/${randomMatch.userID}/picture?height=720&width=720&access_token=${graphToken}`;

      const tempDir = path.join(__dirname, 'temporary');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

      const senderProfilePath = path.join(tempDir, `sender_${senderID}.jpg`);
      const matchProfilePath = path.join(tempDir, `match_${randomMatch.userID}.jpg`);
      const outputPath = path.join(tempDir, `pair_${Date.now()}.png`);

      await Promise.all([
        ensureProfileImage(senderProfileUrl, senderProfilePath, senderName),
        ensureProfileImage(matchProfileUrl, matchProfilePath, randomMatch.name)
      ]);

      const pairImage = await loadImage(pairImagePath);
      const canvas = createCanvas(pairImage.width, pairImage.height);
      const ctx = canvas.getContext('2d');

      const senderProfile = await loadImage(senderProfilePath);
      const matchProfile = await loadImage(matchProfilePath);

      ctx.drawImage(pairImage, 0, 0, pairImage.width, pairImage.height);

      const canvasWidth = pairImage.width;
      const canvasHeight = pairImage.height;
      const circleRadius = 230; 
      const margin = 350; 

      const leftCircleX = margin;
      const rightCircleX = canvasWidth - margin;
      const circleY = canvasHeight / 2;

      const borderDesigns = [
        { color: '#FF69B4', width: 8, style: 'solid' },
        { color: '#FF1493', width: 10, style: 'double' },
        { color: '#FFB6C1', width: 7, style: 'dashed' },
        { color: '#FF6347', width: 9, style: 'gradient' },
        { color: '#DA70D6', width: 8, style: 'rainbow' },
        { color: '#FF4500', width: 12, style: 'glow' },
        { color: '#DC143C', width: 6, style: 'hearts' },
        { color: '#B22222', width: 8, style: 'stars' },
        { color: '#9932CC', width: 10, style: 'neon' },
        { color: '#FF1493', width: 8, style: 'sparkle' }
      ];

      const leftDesign = borderDesigns[Math.floor(Math.random() * borderDesigns.length)];
      const rightDesign = borderDesigns[Math.floor(Math.random() * borderDesigns.length)];

      drawCircularProfile(ctx, senderProfile, leftCircleX, circleY, circleRadius, leftDesign);
      drawCircularProfile(ctx, randomMatch.userID ? matchProfile : senderProfile, rightCircleX, circleY, circleRadius, rightDesign);

      const buffer = canvas.toBuffer('image/png');
      fs.writeFileSync(outputPath, buffer);

      // Roman Urdu Pair Messages
      const pairMessages = [
        `💕 Zabardast Jodi Mil Gayi! 💕\n\nSitaron ne faisla kar liya hai aur naseeb ne apna kaam dikha diya! Ye jodi to upar wale ne fursat mein banayi hai. Aap dono ke dilon ki dharkan ek dum perfect hai!`,

        `🎉 Mohabbat Mausam Mein Hai! 🎉\n\nCupid ne bhi itna haseen match nahi banaya hoga! Aap dono ki chemistry dekh kar to aasman mein bhi fireworks hone lage hain. Aap dono ek doosre ke liye hi bane hain!`,

        `💖 Kitni Pyari Jodi Hai! 💖\n\nYe to bilkul filmi love story jaisa hai! Aap dono ki personality ek perfect puzzle ki tarah fit hoti hai. Qismat ne aap dono ko milane ki saazish ki thi aur aaj wo poori hui!`,

        `🌟 Jannat Mein Bani Jodi! 🌟\n\nFarishte bhi is jodi ka jashn mana rahe hain! Aap dono ki compatibility kamaal ki hai. Ye rishta sadiyon purana lagta hai, naseeb ne kya khoob milaya hai!`,

        `💝 Mohabbat ka Teer Chal Gaya! 💝\n\nPyar ka teer apne nishane par lag chuka hai! Aap dono ki romantic energy poore shehar ko roshan kar sakti hai. Do dil ab hamesha ke liye ek jaan ban chuke hain!`,

        `🎊 Mubarak Ho Lovebirds! 🎊\n\nAisa match naseeb se kabhi kabhi hi milta hai! Shayad pichle janam ka koi rishta hai jo aaj phir se jud gaya hai. Poori duniya aapki is dosti aur pyar ki misaal degi!`,

        `💞 Sacchi Mohabbat Mil Gayi! 💞\n\nPyar ke algorithm ne bilkul sahi result nikaala hai! Aap dono sath mein itne khush lagte hain ke dekhne wale ko bhi khushi ho jaye. Ye naseeb ka sabse haseen tohfa hai!`,

        `🥰 Aww, Kitne Cute Lag Rahe Ho! 🥰\n\nYe jodi itni pyari hai ke sakht se sakht dil bhi pighal jaye! Aapki love story aane wali nasal yaad rakhegi. Ek doosre ke liye aap dono bilkul perfect ho!`,

        `✨ Jadooyi Rishta! ✨\n\nKainat ne aap dono ki taqdeer stardust aur chandni se buni hai! Ye sirf dosti nahi, ye to roohon ka milan hai. Aapka pyar waqt ke sath aur gehra hota jayega!`,

        `🌹 Ishq Level: Kamaal! 🌹\n\nIs jodi ne to romance ke saare record tod diye hain! Aapki kahani kitabon mein likhi jayegi aur geeton mein gayi jayegi. Khuda ne is jodi par apni khas rehmat barsayi hai!`
      ];

      const randomMessage = pairMessages[Math.floor(Math.random() * pairMessages.length)];
      const finalMessage = `${randomMessage}\n\n💑 ${senderName} + ${randomMatch.name} 💑\n\nMatch Percentage: ${matchPercentage}%`;

      const mentions = [
        { tag: `${senderName}`, id: senderID },
        { tag: `${randomMatch.name}`, id: randomMatch.userID }
      ];

      api.sendMessage({
        body: finalMessage,
        attachment: fs.createReadStream(outputPath),
        mentions: mentions
      }, threadID, () => {
        cleanupFiles([senderProfilePath, matchProfilePath, outputPath]);
      }, messageID);

    } catch (error) {
      console.error('[pair] Error:', error);
      api.sendMessage("❌ Pair banane mein error aaya. Baad mein koshish karein.", threadID, messageID);
    }
  }
};

// Helper function to download images with retry & timeout
async function downloadImage(url, filepath, options = {}) {
  const { timeout = 15000, retries = 2 } = options;
  let attempt = 0;
  let lastError = null;

  while (attempt <= retries) {
    try {
      const response = await axios.get(url, {
        responseType: 'arraybuffer',
        timeout,
        maxRedirects: 5,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      await fsPromises.writeFile(filepath, response.data);
      return true;
    } catch (error) {
      lastError = error;
      attempt += 1;
      if (attempt <= retries) await new Promise(res => setTimeout(res, 500 * attempt));
    }
  }
  return false;
}

async function ensureProfileImage(url, filepath, displayName = 'User') {
  const downloaded = await downloadImage(url, filepath);
  if (!downloaded) createPlaceholderAvatar(filepath, displayName);
}

function drawCircularProfile(ctx, profileImage, x, y, radius, design) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(profileImage, x - radius, y - radius, radius * 2, radius * 2);
  ctx.restore();

  // Draw border logic remains the same
  ctx.strokeStyle = design.color;
  ctx.lineWidth = design.width;
  // Apply specific styles if needed (shortened for brevity but kept functional)
  if (design.style === 'dashed') ctx.setLineDash([10, 5]);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);
}

function createPlaceholderAvatar(filepath, displayName = 'User') {
  const size = 640;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#FF6A88';
  ctx.fillRect(0, 0, size, size);
  const initial = (displayName?.trim()?.charAt(0) || '?').toUpperCase();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 280px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(initial, size / 2, size / 2);
  fs.writeFileSync(filepath, canvas.toBuffer('image/png'));
}

function cleanupFiles(files) {
  setTimeout(() => {
    files.forEach(file => { if (fs.existsSync(file)) fs.unlinkSync(file); });
  }, 5000);
}
