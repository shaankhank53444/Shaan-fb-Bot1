module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭,
  description: "Admin bole toh bot leave",
  commandCategory: "Admin",
  usages: "out",
  cooldowns: 0
};

module.exports.run = async function({ api, event }) {
  api.sendMessage("👋 Admin ka order! Bye bye 😢", event.threadID, () => {
    api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
  });
};
