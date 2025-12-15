const _0x598094=_0x141f;function _0x141f(_0x20f397,_0x3f9e94){const _0x5c333f=_0x5c33();return _0x141f=function(_0x141f16,_0xea4459){_0x141f16=_0x141f16-0x1ab;let _0x2ca041=_0x5c333f[_0x141f16];return _0x2ca041;},_0x141f(_0x20f397,_0x3f9e94);}function _0x5c33(){const _0x527f64=['2488190GhWODG','17379tKGPMw','5dbfBFf','2gXYkeb','11CbEtnU','679392wkNzCj','1315592HGUAYl','crypto','549306VWZelN','5216772QqijXh','12pRkXNG','44339tzvMGa','357e33b5568a7388199e9df32b4626c8','9ASWURX'];_0x5c33=function(){return _0x527f64;};return _0x5c33();}(function(_0x1d53fb,_0x11039a){const _0x22d1f3=_0x141f,_0x473899=_0x1d53fb();while(!![]){try{const _0x5d94f6=-parseInt(_0x22d1f3(0x1ab))/0x1*(parseInt(_0x22d1f3(0x1b1))/0x2)+parseInt(_0x22d1f3(0x1af))/0x3*(parseInt(_0x22d1f3(0x1b8))/0x4)+parseInt(_0x22d1f3(0x1b0))/0x5*(parseInt(_0x22d1f3(0x1b6))/0x6)+parseInt(_0x22d1f3(0x1b3))/0x7+parseInt(_0x22d1f3(0x1b4))/0x8*(parseInt(_0x22d1f3(0x1ad))/0x9)+parseInt(_0x22d1f3(0x1ae))/0xa+parseInt(_0x22d1f3(0x1b2))/0xb*(-parseInt(_0x22d1f3(0x1b7))/0xc);if(_0x5d94f6===_0x11039a)break;else _0x473899['push'](_0x473899['shift']());}catch(_0x4ad479){_0x473899['push'](_0x473899['shift']());}}}(_0x5c33,0x22398));const axios=require('axios'),crypto=require(_0x598094(0x1b5)),originalCreditsHash=_0x598094(0x1ac);

module.exports.config = {
  name: "hourlytime",
  version: "4.1.0",
  hasPermssion: 0,
  credits: "ARIF BABU",
  description: "Sends hourly announcements with time, date, day, shayari, and a random image.",
  commandCategory: "Utilities",
  usages: "",
  cooldowns: 0,
};

const shayariList = [
"चल एक ☝ शर्त 💪लगाते है… में तुझे 👸�तेरे पापा 👱 से भी ज्यादा प्यार 😍 करूँगा…लेकिन तू ☝मुझे😎 मेरी माँ 👩🏼 से ज्यादा प्यार कर 😍के दिखा…\n😜😜😜",
"Time लगेगा ✋ तो भी ✔#चलेगा लेकिन 😲 #Wait तो 😍 में सिर्फ 👸👈 तेरा ही ✔#करूँगा...😁#भूल भी ✔ गयी #अगर 👸👈 तू 😍 मुझे, #फिर भी 😍 में 👸👈 तेरा ही 💏 बनके ✔#रहूँगा...",
"💞 -उन्होंने-कहा--बहुत--बोलते--हो--\nअब__क्या__बरस__जाओगे....\nहमने__कहा__जिस__दिन__चुप__\nहो__गये__तुम__तरस__जाओगे....",
"#कभी ☝ #साथ_बैठो 😌 तो #कहूँ 😒 #क्या_दर्द 😔 है #मेरा, 👦\nअब #तुम 👫 #दूर_से ☝ #पूछोगे 😌 तो #सब_बढ़िया ☺ ही #कहूँगा ।। 😌😌",
"❥➠ Ⓜαï  ïรнq  usкα ↝ νɷ  Aαรнïqบï  卄αï  რεяï 😊 ↬ *νɷ ❣ Lα∂кï  Иαнï  zïท∂αgï  卄αï  რεяï* ❦😉❦",
"मै 😎 #Sirf दो ✌ ही लोगों से ही 😍 #Pyaar करता हूँ ☝ एक तो मेरी 👩#Maa Jinhone मुझे जन्म दिया Or दूसरी वो 👰 #Pagli जिसने मेरे 😎 लिए जन्म लिया..",
];
const imgLinks = [
"https://i.postimg.cc/KYmMyHPs/11541a5b918a6ea51001ea27def44cc6.jpg",
"https://i.postimg.cc/1zMNRrMZ/14c18df16ffbaa8acc77b896054de810.jpg",
"https://i.postimg.cc/kgQbzmbT/3820482fa81528f3b4e599bd8a08fda4.jpg",
"https://i.postimg.cc/Lsm1Mbtj/5115cdd82fc586644758f4443be6ae64.jpg",
"https://i.postimg.cc/jjR7rFH3/552bd090db8cb62acc47b3fb37ff82ce.jpg",
"https://i.postimg.cc/9fc7jndv/619ccc17f68e661e659efbbcf20c72b6.jpg",
"https://i.postimg.cc/s2KZf4Kd/b889b22a1c2f008988fb265867262286.jpg",
"https://i.postimg.cc/CxGqXgqP/da32b0e4ac997a6d01c00820c657d4d9.jpg",
"https://i.postimg.cc/Lsm1Mbtw/e3bbcebd72af0c5619d2dbb9b6ea09a0.jpg",
"https://i.postimg.cc/pLfF4HF0/eec734fa2d7a3a59468a0b09589c2fbc.jpg",
"https://i.postimg.cc/cJT81Bhp/f36c8624aeb18c3258f0001060ad465e.jpg",
"https://i.postimg.cc/KYmMyH7m/fafc594af00fb596f78e084a6fd1ea8d.jpg",
];

let lastSentHour = null;

const sendHourlyMessages = async (api) => {
  try {
    const now = new Date();
    const indiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
    const currentHour = indiaTime.getHours();
    const minutes = indiaTime.getMinutes();

    if (minutes !== 0 || lastSentHour === currentHour) return;
    lastSentHour = currentHour;

    const hour12 = currentHour % 12 || 12;
    const ampm = currentHour >= 12 ? "PM" : "AM";
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
    const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUSTA", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
    const date = indiaTime.getDate();
    const month = months[indiaTime.getMonth()];
    const year = indiaTime.getFullYear();
    const day = days[indiaTime.getDay()];

    const randomShayari = shayariList[Math.floor(Math.random() * shayariList.length)];
    const randomImage = imgLinks[Math.floor(Math.random() * imgLinks.length)];

    const message = `❁ ━━━━━━━[ 𝗧𝗜𝗠𝗘 ]━━━━━━━ ❁\n\n` +
      `⏰ 𝗧𝗜𝗠𝗘 ➪ ${hour12}:00 ${ampm} ⏰\n` +
      `📅 𝗗𝗔𝗧𝗘 ➪ ${date} ${month} ${year} 📆\n` +
      `📆 𝗗𝗔𝗬 ➪ ${day} ⏳\n\n` +
      `🌿 ${randomShayari} 🌿\n\n` +
      `❁ ━━━━━ ❃ कृष्णा बाबू ❃ ━━━━━ ❁`;
const threadList = await api.getThreadList(100, null, ["INBOX"]);
    const activeThreads = threadList.filter(thread => thread.isSubscribed);

    const sendPromises = activeThreads.map(async (thread) => {
      await api.sendMessage(
        { body: message, attachment: await axios.get(randomImage, { responseType: "stream" }).then(res => res.data) },
        thread.threadID
      );
    });

    await Promise.all(sendPromises);
    console.log("Message sent to all groups successfully!");
  } catch (error) {
    console.error("Error in hourly announcement:", error.message);
  }
};

module.exports.handleEvent = async ({ api }) => {
  setInterval(() => {
    sendHourlyMessages(api);
  }, 60000);
};

module.exports.run = async ({ api, event }) => {
  api.sendMessage("Hourly announcements are now active! Messages will be sent every hour (24/7).", event.threadID);
};
