module.exports.config = {
    name: "out",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "KRISHNA BABU", // ye mera nahi hai, bas yun hi likha
    description: "Group se nikal jao",
    commandCategory: "Admin",
    usages: "/[tid]",
    cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
    const moment = require("moment-timezone");
    var time = moment.tz('Asia/Kolkata').format('HH:mm:ss || DD/MM/YYYY');
    var id;
    if (!args.join(" ")) {
      id = event.threadID;
    } else {
      id = parseInt(args.join(" "));
    }
    return api.sendMessage(`🎄..𝙺𝚁𝙸𝚂𝙷𝙽𝙰-𝙱𝙰𝙱𝚄..🌸 𝙽𝙴 𝙶𝚁𝙾𝚄𝙿 𝚂𝙴 𝙽𝙸𝙺𝙰𝙻𝙽𝙴 𝙺𝙰 𝙾𝚁𝙳𝙴𝚁 𝙳𝙸𝚈𝙰 𝙷𝙰𝙸... 👀😥\n𝙾𝙺-𝙱𝙾𝚂𝚂-𝙼𝙴-𝙲𝙷𝙰𝙻𝙰-𝙰𝙱\n🆔𝙶𝙲-𝚄𝙸𝙳: ${id}\n⏰𝚃𝙸𝙼𝙴: ${time}`, id, () => api.removeUserFromGroup(api.getCurrentUserID(), id)).then(api.sendMessage(`👀𝗕𝗢𝗧 𝗚𝗖 𝗦𝗘 𝗡𝗜𝗞𝗔𝗟 𝗚𝗔𝗬𝗔.\n🆔𝗚𝗖-𝗨𝗜𝗗: ${id}\n⏰𝗧𝗜𝗠𝗘: ${time}`, event.threadID, event.messageID));
}
