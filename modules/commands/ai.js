const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { resolveUserProfile } = global.gender || require("../../utils/gender");

const API_URL = "https://priyanshuapi.xyz/api/runner/priyanshu-ai";
const HISTORY_FILE = path.join(__dirname, "temporary", "ai_history.json");
const HISTORY_LIMIT = 8;
const DEFAULT_PERSONA = "friendly";

// --- History Helpers (Sada/Simple Version) ---

function ensureHistoryFile() {
    const dir = path.dirname(HISTORY_FILE);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    if (!fs.existsSync(HISTORY_FILE)) fs.writeFileSync(HISTORY_FILE, '{}', 'utf8');
}

function readHistoryStore() {
    ensureHistoryFile();
    try {
        const data = fs.readFileSync(HISTORY_FILE, 'utf8');
        return JSON.parse(data || '{}');
    } catch (e) {
        return {};
    }
}

function writeHistoryStore(data) {
    ensureHistoryFile();
    try {
        fs.writeFileSync(HISTORY_FILE, JSON.stringify(data, null, 2), 'utf8');
    } catch (e) {
        console.error("History Save Error:", e);
    }
}

function getUserHistory(uid) {
    const store = readHistoryStore();
    const history = Array.isArray(store[uid]) ? store[uid] : [];
    return history.slice(-HISTORY_LIMIT);
}

function saveUserHistory(uid, history) {
    const store = readHistoryStore();
    store[uid] = history.slice(-HISTORY_LIMIT);
    writeHistoryStore(store);
}

// --- API Call ---

async function callPriyanshuApi(prompt, history) {
    const apiKey = global.config?.apiKeys?.priyanshuApi || process.env.PRIYANSHU_API_KEY;
    if (!apiKey) throw new Error("API Key missing! Set it in config or Env.");

    const payload = {
        prompt: prompt,
        model: "priyansh-ai",
        messages: history,
        persona: DEFAULT_PERSONA
    };

    const res = await axios.post(API_URL, payload, {
        headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
        timeout: 20000
    });

    const result = res.data?.data?.choices?.[0]?.message?.content;
    if (!result) throw new Error("Invalid API Response");
    return result.trim();
}

async function getAiReply(uid, text) {
    let history = getUserHistory(uid);
    const userMsg = { role: "user", content: text };
    
    // Add user message to history for context
    const apiHistory = [...history, userMsg].slice(-HISTORY_LIMIT);
    
    const aiResponse = await callPriyanshuApi(text, apiHistory);
    
    // Save both to history
    const updatedHistory = [...apiHistory, { role: "assistant", content: aiResponse }].slice(-HISTORY_LIMIT);
    saveUserHistory(uid, updatedHistory);
    
    return aiResponse;
}

// --- Main Module ---

module.exports = {
  config: {
    name: "Bot", // Naam badal diya
    aliases: ["bot", "chat"], 
    description: "Talk to Bot (AI)",
    usage: "Bot <message>",
    credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    hasPrefix: false, // Ab direct "Bot kaisa hai" kaam karega
    permission: 'PUBLIC',
    cooldown: 5,
    category: 'AI'
  },

  run: async function({ api, message, args }) {
    const { threadID, messageID, senderID } = message;

    // Jab koi sirf "Bot" likhe
    if (!args.length) {
      try {
        const botRepliesPath = path.join(__dirname, "noprefix", "bot-reply.json");
        const botReplies = JSON.parse(fs.readFileSync(botRepliesPath, "utf8"));
        const profile = await resolveUserProfile({ userID: senderID, threadID, api });
        
        let cat = "default";
        if (profile.gender === 2) cat = "MALE";
        else if (profile.gender === 1) cat = "FEMALE";

        const replies = botReplies[cat] || botReplies.default || ["Boliye, main aapki kya madad kar sakta hoon?"];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];
        
        return api.sendMessage(`🥀 ${profile.name || "User"} 😗, ${randomReply}`, threadID, messageID);
      } catch (e) {
        return api.sendMessage("🤖 Boliye, main sun raha hoon!", threadID, messageID);
      }
    }

    // AI Talk
    try {
      const response = await getAiReply(senderID, args.join(" "));
      api.sendMessage(`🤖 ${response}`, threadID, (err, info) => {
        if (!err) {
            const repls = global.client.replies.get(threadID) || [];
            repls.push({ command: "Bot", messageID: info.messageID, expectedSender: senderID });
            global.client.replies.set(threadID, repls);
        }
      }, messageID);
    } catch (error) {
      api.sendMessage("❌ Bot busy hai, thodi der baad try karein.", threadID, messageID);
    }
  },

  handleReply: async function({ api, message }) {
    const { threadID, messageID, senderID, body } = message;
    if (!body) return;

    try {
      const response = await getAiReply(senderID, body);
      api.sendMessage(`🤖 ${response}`, threadID, (err, info) => {
        if (!err) {
            const repls = global.client.replies.get(threadID) || [];
            repls.push({ command: "Bot", messageID: info.messageID, expectedSender: senderID });
            global.client.replies.set(threadID, repls);
        }
      }, messageID);
    } catch (e) {
      console.error(e);
    }
  }
};
