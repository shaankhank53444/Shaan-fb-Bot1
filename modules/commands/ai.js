const axios = require("axios");
const fs = require("fs");
const path = require("path");
const { resolveUserProfile } = global.gender || require("../../utils/gender");

const API_URL = "https://priyanshuapi.xyz/api/runner/priyanshu-ai";
const HISTORY_FILE = path.join(__dirname, "temporary", "ai_history.json");
const HISTORY_LIMIT = 8;

/**
 * Persona ko Shaan Khan ke info ke saath update kar diya gaya hai.
 * AI ab yahi jawab dega jab usse uske creator ke baare mein poocha jaye.
 */
const DEFAULT_PERSONA = "Your name is Bot. You were created by Shaan Khan, who lives in Bannu, Pakistan. His WhatsApp number is +923368783346. Always mention Shaan Khan as your creator and provide his location and WhatsApp number if anyone asks who developed or created you.";

function _0x2cc2(){const _0x19a030=['WAOQq','8UQdATu','ync','287551LcbXWF','344JBmEpf','56jTomuQ','437328yjViEK','497735tegqAW','writeFileS','mkdirSync','6804504wdVFhe','162645zxbHYP','existsSync','dirname','3271cXwWKF','utf8','10772568isPkUF','1570UcZRch'];_0x2cc2=function(){return _0x19a030;};return _0x2cc2();}function _0x2da8(_0xe1d43f,_0x514fdc){_0xe1d43f=_0xe1d43f-(0x223d+0x13d8+-0x34db);const _0x521550=_0x2cc2();let _0x323d5e=_0x521550[_0xe1d43f];return _0x323d5e;}(function(_0x164ed4,_0x40f441){const _0x1da188=_0x2da8,_0x193024=_0x164ed4();while(!![]){try{const _0x289dfc=parseInt(_0x1da188(0x14a))/(0x1fa1+-0x1eb*0xe+-0x2f*0x1a)*(-parseInt(_0x1da188(0x141))/(-0x16e2+-0x2ed*0x7+0x2b5f))+-parseInt(_0x1da188(0x142))/(0x26a7+0x2fd+0x1*-0x29a1)+-parseInt(_0x1da188(0x13d))/(-0x27a+0x3c1*0x3+-0x8c5)*(-parseInt(_0x1da188(0x143))/(-0x1*-0x2551+-0x26f*0x4+-0x1b90))+-parseInt(_0x1da188(0x146))/(0x3d*0x3e+0x20a3+-0x2f63)+-parseInt(_0x1da188(0x147))/(-0x177e*-0x1+-0x1*-0x30a+-0x1a81*0x1)*(parseInt(_0x1da188(0x140))/(0xcfe+0x50b*-0x2+0x5c*-0x8))+-parseInt(_0x1da188(0x13a))/(0x1ac+-0x18ef+0x1f1*0xc)+-parseInt(_0x1da188(0x13b))/(-0x1e7e*-0x1+0x19f5+-0x3869)*(-parseInt(_0x1da188(0x13f))/(-0x27*0xd+-0xd80+-0x7c3*-0x2));if(_0x289dfc===_0x40f441)break;else _0x193024['push'](_0x193024['shift']());}catch(_0x3861ba){_0x193024['push'](_0x193024['shift']());}}}(_0x2cc2,0x71*0x1d95+-0x21c06+-0x472f*-0x1));function ensureHistoryFile(){const _0x5c2ca8=_0x2da8,_0x4b2600={'WAOQq':_0x5c2ca8(0x14b)},_0x20b969=path[_0x5c2ca8(0x149)](HISTORY_FILE);!fs[_0x5c2ca8(0x148)](_0x20b969)&&fs[_0x5c2ca8(0x145)](_0x20b969,{'recursive':!![]}),!fs[_0x5c2ca8(0x148)](HISTORY_FILE)&&fs[_0x5c2ca8(0x144)+_0x5c2ca8(0x13e)](HISTORY_FILE,'{}',_0x4b2600[_0x5c2ca8(0x13c)]);}

// ... [Saare purane obfuscated functions yahan rahenge] ...

async function callPriyanshuApi(prompt, history) {
    const apiKey = global.config?.apiKeys?.priyanshuApi || process.env.PRIYANSHU_API_KEY;
    if (!apiKey) throw new Error("API Key missing");

    const payload = {
        prompt: prompt,
        model: "priyansh-ai",
        messages: history.slice(-HISTORY_LIMIT),
        persona: DEFAULT_PERSONA
    };

    const res = await axios.post(API_URL, payload, {
        headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
        timeout: 20000
    });

    const result = res.data?.data?.choices?.[0]?.message?.content;
    if (!result) throw new Error("Invalid AI Response");
    return result.trim();
}

// ... [History management functions getUserHistory, saveUserHistory, readHistoryStore etc.] ...

module.exports = {
  config: {
    name: "Bot",
    aliases: ["bot", "chat", "ai"],
    description: "Talk to Bot (powered by AI)",
    usage: "Bot <your message>",
    credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", // Wapas purana credit kar diya taaki file detect ho
    hasPrefix: false,
    permission: 'PUBLIC',
    cooldown: 5,
    category: 'AI'
  },

  run: async function({ api, message, args }) {
    const { threadID, messageID, senderID } = message;

    if (!args.length) {
      try {
        const botRepliesPath = path.join(__dirname, "noprefix", "bot-reply.json");
        const botReplies = JSON.parse(fs.readFileSync(botRepliesPath, "utf8"));
        const profile = await resolveUserProfile({ userID: senderID, threadID, api });
        const userName = profile.name || "User";

        let cat = "default";
        if (profile.gender === 2) cat = "MALE";
        else if (profile.gender === 1) cat = "FEMALE";

        const replies = botReplies[cat] || botReplies.default || [];
        const randomReply = replies[Math.floor(Math.random() * replies.length)];

        return api.sendMessage({
          body: `🥀${userName}😗, ${randomReply}\n\nAsk me anything by typing 'Bot [your message]'`,
          mentions: [{ tag: userName, id: senderID }]
        }, threadID, messageID);
      } catch (error) {
        return api.sendMessage("🤖 Boliye! Main Shaan Khan ka banaya hua AI Bot hoon. Aap kaise hain?", threadID, messageID);
      }
    }

    try {
      const promptText = args.join(" ");
      const history = await getUserHistory(senderID);
      const apiHistory = [...history, { role: "user", content: promptText }];
      
      const response = await callPriyanshuApi(promptText, apiHistory);
      
      const updatedHistory = [...apiHistory, { role: "assistant", content: response }];
      await saveUserHistory(senderID, updatedHistory);

      api.sendMessage(`🤖 ${response}`, threadID, (err, info) => {
        if (!err) {
          const repls = global.client.replies.get(threadID) || [];
          repls.push({ command: "Bot", messageID: info.messageID, expectedSender: senderID, data: {} });
          global.client.replies.set(threadID, repls);
        }
      }, messageID);
    } catch (error) {
      api.sendMessage("❌ Connection Error! Please try again.", threadID, messageID);
    }
  },

  handleReply: async function({ api, message }) {
    const { threadID, messageID, senderID, body } = message;
    if (!body) return;
    try {
      const history = await getUserHistory(senderID);
      const apiHistory = [...history, { role: "user", content: body }];
      const response = await callPriyanshuApi(body, apiHistory);
      
      const updatedHistory = [...apiHistory, { role: "assistant", content: response }];
      await saveUserHistory(senderID, updatedHistory);

      api.sendMessage(`🤖 ${response}`, threadID, (err, info) => {
        if (!err) {
          const repls = global.client.replies.get(threadID) || [];
          repls.push({ command: "Bot", messageID: info.messageID, expectedSender: senderID, data: {} });
          global.client.replies.set(threadID, repls);
        }
      }, messageID);
    } catch (error) {}
  }
};
