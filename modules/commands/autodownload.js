module.exports = {
  config: {
    name: "linkAutoDownload",
    version: "1.3.0",
    hasPermssion: 0,
    credits: "ARIF BABU", // ⚠️ DO NOT CHANGE THIS CREDIT
    description:
      "Automatically detects links in messages and downloads the file.",
    commandCategory: "Utilities",
    usages: "",
    cooldowns: 5,
  },

  // ⛔ CREDIT PROTECTION — DO NOT TOUCH
  onLoad: function () {
    const fs = require("fs");
    const path = __filename;
    const fileData = fs.readFileSync(path, "utf8");

    // Check if credits modified
    if (!fileData.includes('credits: "ARIF BABU"')) {
      console.log("\n❌ ERROR: Credits Badle Gaye Hain! File Disabled ❌\n");
      process.exit(1); // stop bot
    }
  },
  // ---------------------

  run: async function ({ events, args }) {},

  handleEvent: async function ({ api, event, args }) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const { alldown } = require("arif-babu-downloadr");

    const content = event.body || "";
    const body = content.toLowerCase();

    if (body.startsWith("https://")) {
      try {
        api.setMessageReaction("⏳", event.messageID, () => {}, true);

        const data = await alldown(content);
        const { high } = data.data;

        api.setMessageReaction("✅", event.messageID, () => {}, true);

        const videoBuffer = (
          await axios.get(high, { responseType: "arraybuffer" })
        ).data;

        const filePath = __dirname + "/cache/auto.mp4";
        fs.writeFileSync(filePath, Buffer.from(videoBuffer));

        return api.sendMessage(
          {
            body: "┏━💌━━❀🩵🦋🫅🏻🦋🩵❀━━💌━┓\n       ꧁≛⃝💗꯭ꪸ  ⃪꯭̽ ㉿𝕣⃪꯭𝕚ຮ⃪꯭𝗵֟፝𝕟⃪꯭𝝰꯭ 🦚꯭≛⃝💖꧂ \n┗━💌━━❀🩵🦋🫅🏻🦋🩵❀━━💌━┛\n        ✶⊶⊷⊷⊷⊷❍⊶⊷⊷⊷⊷✶\n     𝚈𝙴 𝙻𝙾 𝙰𝙰𝙿𝙺𝙸 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 \n𝙺𝙰𝚁 𝙳𝙸 𝙺𝚁𝙸𝚂𝙷𝙽𝙰-𝙱𝙰𝙱𝚄 𝙽𝙴 𝙰𝙱 𝙺𝙷𝚄𝚂𝙷\n                     👇🏻👇🏻👇🏻👇🏻",
            attachment: fs.createReadStream(filePath),
          },
          event.threadID,
          event.messageID
        );
      } catch (e) {
        return api.sendMessage("❌ Error in auto download!", event.threadID);
      }
    }
  },
};
