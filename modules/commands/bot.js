const fs = require("fs");
const path = require("path");

const genderHelper = global.gender || require("../../utils/gender");
const { resolveUserProfile } = genderHelper;

const RESPONSE_DELAY_MS = 1500;
const handledMessages = new Map();
let repliesCache = null;

// Isse sirf tabhi trigger hoga jab message sirf "bot" ho
function shouldTrigger(body = "") {
  if (!body) return false;
  const cleanBody = body.trim().toLowerCase();
  return cleanBody === "bot"; 
}

function cleanupHandledMap() {
  const now = Date.now();
  for (const [key, timestamp] of handledMessages.entries()) {
    if (now - timestamp > 5 * 60 * 1000) {
      handledMessages.delete(key);
    }
  }
}

function markHandled(messageID) {
  if (!messageID) return;
  handledMessages.set(messageID, Date.now());
  cleanupHandledMap();
}

function wasHandled(messageID) {
  if (!messageID) return false;
  cleanupHandledMap();
  return handledMessages.has(messageID);
}

function loadReplies() {
  if (repliesCache) return repliesCache;
  const botRepliesPath = path.join(__dirname, "noprefix", "bot-reply.json");
  if (!fs.existsSync(botRepliesPath)) return { default: ["Ji boliye? 😊"] };
  repliesCache = JSON.parse(fs.readFileSync(botRepliesPath, "utf8"));
  return repliesCache;
}

function pickReply({ senderID, gender }) {
  const replies = loadReplies();
  let category = "default";
  
  if (senderID === "100016828397863") category = "100016828397863";
  else if (gender === 2 || gender?.toString().toUpperCase() === "MALE") category = "MALE";
  else if (gender === 1 || gender?.toString().toUpperCase() === "FEMALE") category = "FEMALE";

  let list = replies[category] || replies.default || [];

  if (!Array.isArray(list) || list.length === 0) {
    return "Aslamu0alikum Everyone";
  }

  const index = Math.floor(Math.random() * list.length);
  return list[index];
}

async function sendReply({ api, message }) {
  const { threadID, messageID, senderID, body } = message;
  
  if (!shouldTrigger(body) || wasHandled(messageID)) {
    return;
  }

  markHandled(messageID);

  try {
    const profile = await resolveUserProfile({ userID: senderID, threadID, api });
    const replyText = pickReply({ senderID, gender: profile.gender });
    const userName = profile.name || "User";

    // Design layout
    const formattedMessage = {
      body: `\n        𓊈𒆜--- 🥀${userName} 🌹---𒆜𓊉\n\n\n👉 [  ${replyText}  ] 👈\n❥────────────────────❥\n*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ. ༄𒁍≛⃝𝑺𝑯𝑨𝑨𝑵 𝑲𝑯𝑨𝑵 𝑲🍒💝\n❥────────────────────❥`,
      mentions: [{ tag: userName, id: senderID }]
    };

    return api.sendMessage(formattedMessage, threadID, (err, info) => {
      // Agar replyText mein koi emoji hai, to reaction bhi bhej sakte hain
      if (!err && /[\u{1F600}-\u{1F64F}]/u.test(replyText)) {
          api.setMessageReaction("❤️", info.messageID, () => {}, true);
      }
    }, messageID);
  } catch (e) {
    console.error("Error in bot reply:", e);
  }
}

module.exports = {
  config: {
    name: "bot",
    description: "Replies only when exactly 'bot' is said",
    usage: "bot",
    credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    hasPrefix: false,
    permission: "PUBLIC",
    cooldown: 1,
    category: "SYSTEM"
  },

  run: async function({ api, message }) {
    return sendReply({ api, message });
  },

  handleEvent: async function({ api, message }) {
    if (!message?.body || !shouldTrigger(message.body) || wasHandled(message.messageID)) return;
    
    // Thoda wait karke reply dena natural lagta hai
    await new Promise(resolve => setTimeout(resolve, RESPONSE_DELAY_MS));
    return sendReply({ api, message });
  }
};
