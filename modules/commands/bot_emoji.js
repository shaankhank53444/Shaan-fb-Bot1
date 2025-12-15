module.exports.config = {
  name: "laugh",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "No Prefix 😂 Emoji Full Masti Bot",
  commandCategory: "No Prefix",
  usages: "😂",
  cooldowns: 0
};

module.exports.handleEvent = async function ({ api, event, Threads, Users }) {
  try {
    if (!event.body) return;
    if (!event.body.includes("😂")) return;

    // 🛑 Admin ignore
    const threadInfo = await Threads.getInfo(event.threadID);
    const adminIDs = threadInfo.adminIDs.map(e => e.id);
    if (adminIDs.includes(event.senderID)) return;

    // 😂 Auto reaction
    api.setMessageReaction("😂", event.messageID, () => {}, true);

    const name = await Users.getNameUser(event.senderID);

    const replies = [
      `😂😂 अरे ${name}, आज बहुत खुश लग रहे हो`,
      `हँसते रहो ${name} 😆 life mast है`,
      `😂😂 इतनी हँसी! कोई secret है क्या?`,
      `Smile ही सबसे बड़ी power है 😄`,
      `हँसी + दोस्त = perfect combo ❤️`,
      `😂😂 mood ek number लग रहा है`,
      `हँसो लेकिन limit में 😜`,
      `आज तो group में comedy चल रही है 😂🔥`,
      `हँसना मना नहीं है 😄`,
      `😂😂 बस ऐसे ही खुश रहो`
    ];

    return api.sendMessage(
      replies[Math.floor(Math.random() * replies.length)],
      event.threadID,
      event.messageID
    );

  } catch (e) {
    console.log(e);
  }
};

module.exports.run = async function () {};
