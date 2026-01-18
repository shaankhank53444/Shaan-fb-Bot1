const axios = require("axios");
const fs = require("fs");
const path = require("path");

// Folder check karne ke liye taaki crash na ho
const tempDir = path.join(__dirname, "temporary");
if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

const API_URL = "https://priyanshuapi.xyz/api/runner/priyanshu-ai";
const HISTORY_FILE = path.join(tempDir, "ai_history.json");
const HISTORY_LIMIT = 8;

module.exports = {
  config: {
    name: "Bot", 
    aliases: ["bot", "ai"],
    description: "Talk to Bot",
    usage: "Bot <message>",
    credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
    hasPrefix: false, 
    permission: 'PUBLIC',
    cooldown: 5,
    category: 'AI'
  },

  run: async function({ api, message, args }) {
    const { threadID, messageID, senderID } = message;

    // 1. Agar user ne kuch nahi likha (Sirf "Bot" bola)
    if (!args.length) {
      return api.sendMessage("Boliye! Main ek AI Bot hoon. Mujhse baat karne ke liye 'Bot' ke aage apna sawal likhein.", threadID, messageID);
    }

    const promptText = args.join(" ").trim();

    try {
      // 2. API Key Check (Apne bot ki config se leta hai)
      const apiKey = global.config?.apiKeys?.priyanshuApi || "Priyanshu_Free_Key"; 

      // 3. API Call
      const res = await axios.post(API_URL, {
        prompt: promptText,
        model: "priyansh-ai",
        messages: [], // Filhaal khali bhej rahe hain testing ke liye
        persona: "friendly"
      }, {
        headers: { 'Authorization': `Bearer ${apiKey}` }
      });

      const aiReply = res.data?.data?.choices?.[0]?.message?.content || "Maaf kijiye, samajh nahi aaya.";
      
      // 4. Jawab bhejna
      return api.sendMessage(`🤖 ${aiReply}`, threadID, messageID);

    } catch (error) {
      console.error("Bot Error:", error.message);
      return api.sendMessage("❌ API Error! Shayad server down hai ya Key invalid hai.", threadID, messageID);
    }
  }
};
