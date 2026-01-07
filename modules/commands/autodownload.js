/**
 * Auto Download Command
 * Auto-detects video URLs and downloads them
 * Credit: Priyansh Rajput
 */

const { downloadVideo } = require("priyansh-all-dl");
const axios = require("axios");
const fs = require("fs-extra");
const tempy = require("tempy");
const { pipeline } = require("stream/promises");

const DOWNLOAD_TIMEOUT_MS = 45000;
const FILE_DOWNLOAD_TIMEOUT_MS = 60000;
const UPLOAD_RETRY_DELAY_MS = 3000;
const NETWORK_RETRY_ATTEMPTS = 3;

let autoDownloadEnabled = true; 
const processedMessages = new Set(); 

module.exports = {
  config: {
    name: 'autodownload',
    aliases: ['ad', 'autodl', 'download'],
    description: 'Auto-detects video URLs or manually download with command',
    usage: '{prefix}autodownload [on/off/URL]',
    credit: '𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭',
    hasPrefix: false,
    permission: 'PUBLIC',
    cooldown: 0,
    category: 'UTILITY'
  },

  run: async function ({ api, message, args }) {
    const { threadID, messageID } = message;
    const command = args[0]?.toLowerCase();

    if (command === 'on') {
      autoDownloadEnabled = true;
      return api.sendMessage('✅ Auto-downloading has been enabled.', threadID, messageID);
    } else if (command === 'off') {
      autoDownloadEnabled = false;
      return api.sendMessage('❌ Auto-downloading has been disabled.', threadID, messageID);
    }

    if (args.length === 0) {
      const status = autoDownloadEnabled ? 'enabled' : 'disabled';
      return api.sendMessage(
        `📱 Auto-download is currently ${status}\n\n` +
        `Usage:\n` +
        `• ${global.config.prefix}autodownload on - Enable\n` +
        `• ${global.config.prefix}autodownload off - Disable\n` +
        `• ${global.config.prefix}autodownload [URL] - Download\n\n` +
        `Supported: FB, Instagram, TikTok, Twitter/X, Threads`,
        threadID,
        messageID
      );
    }

    const url = args[0];
    const patterns = {
      facebook: /^(https?:\/\/)?(www\.)?(m\.)?facebook\.com\/(share|reel|watch)\/.+$/,
      instagram: /https?:\/\/(?:www\.)?instagram\.com\/(?:share|reel|stories)\/[^\s]+/gi,
      tiktok: /https?:\/\/(?:www\.)?tiktok\.com\/[^\s]+/gi,
      twitter: /https?:\/\/(?:www\.)?(twitter\.com|x\.com)\/[^\s]+/gi,
      threads: /https?:\/\/(?:www\.)?threads\.net\/[^\s]+/gi
    };

    let platform = null;
    for (const [key, pattern] of Object.entries(patterns)) {
      if (pattern.test(url)) {
        platform = key;
        break;
      }
    }

    if (platform) {
      await downloadAndSend(api, message, url, platform);
    } else {
      api.sendMessage('❌ Invalid URL or unsupported platform.', threadID, messageID);
    }
  },

  handleEvent: async function ({ api, message }) {
    try {
      if (!autoDownloadEnabled) return;
      if (message.senderID === global.client?.botID) return;

      const { messageID, body, attachments } = message;

      if (processedMessages.has(messageID)) return;
      processedMessages.add(messageID);

      if (processedMessages.size > 100) {
        const oldest = Array.from(processedMessages).slice(0, 10);
        oldest.forEach(id => processedMessages.delete(id));
      }

      const patterns = {
        facebook: /https?:\/\/(?:www\.|m\.)?facebook\.com\/(reel|watch|share|video)\/.*/i,
        instagram: /https?:\/\/(?:www\.)?instagram\.com\/(?:share|reel|stories)\/[^\s]+/gi,
        tiktok: /https?:\/\/(?:www\.)?tiktok\.com\/[^\s]+/gi,
        twitter: /https?:\/\/(?:www\.)?(twitter\.com|x\.com)\/[^\s]+/gi,
        threads: /https?:\/\/(?:www\.)?threads\.net\/[^\s]+/gi
      };

      let urlToDownload = null;
      let platform = null;

      const checkUrl = (url) => {
        if (!url || typeof url !== 'string') return null;
        for (const [key, pattern] of Object.entries(patterns)) {
          if (pattern.test(url)) return { url, platform: key };
        }
        return null;
      };

      let result = checkUrl(body);
      
      if (!result && attachments) {
        for (let att of attachments) {
          result = checkUrl(att.url || att.source || att.href || att.target?.url);
          if (result) break;
        }
      }

      if (result) {
        await downloadAndSend(api, message, result.url, result.platform);
      }
    } catch (error) {
      console.error('[autodownload] Error:', error);
    }
  }
};

async function downloadAndSend(api, message, url, platform) {
  const { threadID, messageID } = message;
  let tempFilePath = null;

  api.setMessageReaction("⌛", messageID, () => {}, true);

  try {
    const videoInfo = await safeDownloadVideo(url);
    const selection = selectVideoLink(platform, videoInfo);

    if (!selection || !selection.hdLink) {
      api.setMessageReaction("❌", messageID, () => {}, true);
      return api.sendMessage(selection?.errorMessage || "❌ Video not found.", threadID, messageID);
    }

    tempFilePath = tempy.file({ extension: "mp4" });
    await downloadFileWithTimeout(selection.hdLink, tempFilePath);

    await sendVideoWithRetry({
      api,
      threadID,
      originalMessageID: messageID,
      body: selection.videoTitle,
      filePath: tempFilePath
    });

    api.setMessageReaction("✅", messageID, () => {}, true);
  } catch (error) {
    api.setMessageReaction("❌", messageID, () => {}, true);
    api.sendMessage(`❌ Error processing ${platform} video.`, threadID, messageID);
  } finally {
    if (tempFilePath && fs.existsSync(tempFilePath)) fs.unlinkSync(tempFilePath);
  }
}

async function safeDownloadVideo(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), DOWNLOAD_TIMEOUT_MS);
  try {
    return await downloadVideo(url);
  } finally {
    clearTimeout(timeout);
  }
}

function selectVideoLink(platform, videoInfo) {
  if (!videoInfo) return { errorMessage: "❌ Metadata error." };
  const botTag = "--『 𝑺𝑯𝑨𝑨𝑵 🄱🄾🅃 』--\n";

  switch (platform) {
    case 'facebook':
      const fbLink = videoInfo["720p"] || videoInfo["360p"];
      return fbLink && fbLink !== "Not found" ? { hdLink: fbLink, videoTitle: botTag + "Facebook Video:" } : null;
    case 'instagram':
      return videoInfo.video ? { hdLink: videoInfo.video, videoTitle: botTag + "Instagram Video:" } : null;
    case 'tiktok':
      return videoInfo.video ? { hdLink: videoInfo.video, videoTitle: botTag + "TikTok Video:" } : null;
    case 'twitter':
      const twVids = videoInfo.videos || videoInfo.Data?.videos || [];
      return twVids.length > 0 ? { hdLink: twVids[0].url, videoTitle: botTag + "Twitter Video:" } : null;
    case 'threads':
      return videoInfo.Data?.video_url ? { hdLink: videoInfo.Data.video_url, videoTitle: botTag + "Threads Video:" } : null;
    default:
      return null;
  }
}

async function downloadFileWithTimeout(url, filePath) {
  for (let i = 0; i < NETWORK_RETRY_ATTEMPTS; i++) {
    try {
      const res = await axios.get(url, { responseType: 'stream', timeout: FILE_DOWNLOAD_TIMEOUT_MS });
      await pipeline(res.data, fs.createWriteStream(filePath));
      return;
    } catch (e) {
      if (i === NETWORK_RETRY_ATTEMPTS - 1) throw e;
      await new Promise(r => setTimeout(r, UPLOAD_RETRY_DELAY_MS));
    }
  }
}

async function sendVideoWithRetry({ api, threadID, originalMessageID, body, filePath }) {
  const payload = { body, attachment: fs.createReadStream(filePath) };
  return new Promise((resolve, reject) => {
    api.sendMessage(payload, threadID, (err, info) => err ? reject(err) : resolve(info), originalMessageID);
  });
}
