const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/kolkata").format("hh:mm:s");
  const hours = moment.tz("Asia/kolkata").format("hh");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

      var tl = [];
var rand = tl[Math.floor(Math.random() * tl.length)]
  
   if ((event.body.toLowerCase() == "😀") || (event.body.toLowerCase() == "😀😀") || (event.body.toLowerCase() == "😀😀😀") || (event.body.toLowerCase() == "😀😀😀😀")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘इतनी हसीं क्यों आ रही है बाबु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
   if ((event.body.toLowerCase() == "😃") || (event.body.toLowerCase() == "😃😃") || (event.body.toLowerCase() == "😃😃😃") || (event.body.toLowerCase() == "😃😃😃😃")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु एसे कौन हस्ता है आँखों को फाड़ कर〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "😄") || (event.body.toLowerCase() == "😄😄") || (event.body.toLowerCase() == "😄😄😄") || (event.body.toLowerCase() == "😄😄😄😄")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु ये केसा हसना है आँखे बंद कर के हस रहे हो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😁😁") || (event.body.toLowerCase() == "😁😁😁") || (event.body.toLowerCase() == "😁😁😁😁")) {
     return api.sendMessage("꧁•🦋✨🍁❉‌‌্᭄...─┼\n〘लगता है आज पहेली बार ब्रश किया है बाबु ने〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😆😆") || (event.body.toLowerCase() == "😆😆😆") || (event.body.toLowerCase() == "😆😆😆😆")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु अच्छे नहीं लग रहे हो हस्ते भी〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😅😅") || (event.body.toLowerCase() == "😅😅😅") || (event.body.toLowerCase() == "😅😅😅😅")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आपके सर से पानी आ रहा है〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "🤣🤣") || (event.body.toLowerCase() == "🤣🤣🤣") || (event.body.toLowerCase() == "🤣🤣🤣🤣")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु इतनी हसीं क्यों आती है आपको〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😂😂") || (event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😂😂😂😂")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘 इतनी हसीं क्यों आ रही है, क्या राज है इस हसीं का हमें भी बताओ〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🥲") || (event.body.toLowerCase() == "🥲🥲") || (event.body.toLowerCase() == "🥲🥲🥲") || (event.body.toLowerCase() == "🥲🥲🥲🥲")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आपकी आँख मेसे पानी निकल रहा है, या नाक मेसे〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂🙂") || (event.body.toLowerCase() == "🙂🙂🙂") || (event.body.toLowerCase() == "🙂🙂🙂🙂")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आज कैसे चुप बैठे हो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🙃") || (event.body.toLowerCase() == "🙃🙃") || (event.body.toLowerCase() == "🙃🙃🙃") || (event.body.toLowerCase() == "🙃🙃🙃🙃")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘आले मेरा बाबु उल्टा हो गया〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉😉") || (event.body.toLowerCase() == "😉😉😉") || (event.body.toLowerCase() == "😉😉😉😉")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आँख क्यों मर रहे हो मे नहीं पटूंगी〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
           if ((event.body.toLowerCase() == "😊") || (event.body.toLowerCase() == "😊😊") || (event.body.toLowerCase() == "😊😊😊") || (event.body.toLowerCase() == "😊😊😊😊")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आज तो आपकी सिकल लाल लाल हो रही है〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
          if ((event.body.toLowerCase() == "😇") || (event.body.toLowerCase() == "😇😇") || (event.body.toLowerCase() == "😇😇😇") || (event.body.toLowerCase() == "😇😇😇😇")) {
     return api.sendMessage("😇😇😇😇", threadID);
   };
            if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰") || (event.body.toLowerCase() == "🥰🥰🥰🥰")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु मुझे लग रहा है आपको प्यार हो गया मेरसे〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😍😍") || (event.body.toLowerCase() == "😍😍😍") || (event.body.toLowerCase() == "😍😍😍😍")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘इतना प्यार करते हो बाबु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "🤩") || (event.body.toLowerCase() == "🤩🤩") || (event.body.toLowerCase() == "🤩🤩🤩") || (event.body.toLowerCase() == "🤩🤩🤩🤩")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आपकी आँखों मे स्तर दिख रहे है〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
      if ((event.body.toLowerCase() == "😗") || (event.body.toLowerCase() == "😗😗") || (event.body.toLowerCase() == "😗😗😗") || (event.body.toLowerCase() == "😗😗😗😗")) {
     return api.sendMessage("😗😗😗", threadID);
   };
      if ((event.body.toLowerCase() == "☺️") || (event.body.toLowerCase() == "☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️") || (event.body.toLowerCase() == "☺️☺️☺️☺️")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आपकी आँखों को क्या हुआ दिख नहीं रही है〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "😚") || (event.body.toLowerCase() == "😚😚") || (event.body.toLowerCase() == "😙") || (event.body.toLowerCase() == "😙😙")) {
     return api.sendMessage("😗😗😗", threadID);
   };
      if ((event.body.toLowerCase() == "😋") || (event.body.toLowerCase() == "😋😋") || (event.body.toLowerCase() == "😋😋😋") || (event.body.toLowerCase() == "😋😋😋😋")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु इतनी पसंद है आपको जो आपकी जीब बाहर आ गयी〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😛") || (event.body.toLowerCase() == "😛😛") || (event.body.toLowerCase() == "😛😛😛") || (event.body.toLowerCase() == "😛😛😛😛")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘जीब क्यों दिखा रहा है बाबु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😜") || (event.body.toLowerCase() == "😜😜") || (event.body.toLowerCase() == "😜😜😜") || (event.body.toLowerCase() == "😜😜😜😜")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘आँख बंद कर के कौन जीब निकलता है पागल〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "🤪") || (event.body.toLowerCase() == "🤪🤪") || (event.body.toLowerCase() == "🤪🤪🤪") || (event.body.toLowerCase() == "🤪🤪🤪🤪")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘पहले अपना मुँह सीधा करो जब जीब निकलना〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
          if ((event.body.toLowerCase() == "😝") || (event.body.toLowerCase() == "😝😝") || (event.body.toLowerCase() == "😝😝😝") || (event.body.toLowerCase() == "😝😝😝😝")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘ठरकी इंसान जीब अन्दर करो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🤑") || (event.body.toLowerCase() == "🤑🤑") || (event.body.toLowerCase() == "🤑🤑🤑") || (event.body.toLowerCase() == "🤑🤑🤑🤑")) {
     return api.sendMessage("🤑🤑🤑", threadID);
   };
       if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗🤗") || (event.body.toLowerCase() == "🤗🤗🤗") || (event.body.toLowerCase() == "🤗🤗🤗🤗")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘हाय कितना क्यूट लग रहे हो बाबु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🤭") || (event.body.toLowerCase() == "🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭") || (event.body.toLowerCase() == "🤭🤭🤭🤭")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘शर्मा क्यों रहे हो बाबु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🫠") || (event.body.toLowerCase() == "🫠🫠") || (event.body.toLowerCase() == "🫠🫠🫠") || (event.body.toLowerCase() == "🫠🫠🫠🫠")) {
     return api.sendMessage("🫠🫠🫠", threadID);
   };
         if ((event.body.toLowerCase() == "🫢") || (event.body.toLowerCase() == "🫢🫢") || (event.body.toLowerCase() == "🫢🫢🫢") || (event.body.toLowerCase() == "🫢🫢🫢🫢")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘क्या हुआ बाबु मुँह पर हाथ क्यों लगा रखे हो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
          if ((event.body.toLowerCase() == "🫣") || (event.body.toLowerCase() == "🫣🫣") || (event.body.toLowerCase() == "🫣🫣🫣") || (event.body.toLowerCase() == "🫣🫣🫣🫣")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘ऐसे क्या देख रहे हो बाबु एक आँख से〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
            if ((event.body.toLowerCase() == "🫡") || (event.body.toLowerCase() == "🫡🫡") || (event.body.toLowerCase() == "🫡🫡🫡") || (event.body.toLowerCase() == "🫡🫡🫡🫡")) {
     return api.sendMessage("🫡🫡🫡", threadID);
   };
           if ((event.body.toLowerCase() == "🫤") || (event.body.toLowerCase() == "🫤🫤") || (event.body.toLowerCase() == "🫤🫤🫤") || (event.body.toLowerCase() == "🫤🫤🫤🫤")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘टेड़ा मुँह क्यों बना के बैठो हो बाबु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🥹") || (event.body.toLowerCase() == "🥹🥹") || (event.body.toLowerCase() == "🥹🥹🥹") || (event.body.toLowerCase() == "🥹🥹🥹🥹")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘क्या हुआ बाबु आँखों से पानी क्यों आ रहा है〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🤫") || (event.body.toLowerCase() == "🤫🤫") || (event.body.toLowerCase() == "🤫🤫🤫") || (event.body.toLowerCase() == "🤫🤫🤫🤫")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘तू चुप ठरकी इंसान मे क्यों चुप रहे हु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔") || (event.body.toLowerCase() == "🤔🤔🤔🤔")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आपके पास दिमाक है जो इतना सोच रहे हो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
          if ((event.body.toLowerCase() == "🤐") || (event.body.toLowerCase() == "🤐🤐") || (event.body.toLowerCase() == "🤐🤐🤐") || (event.body.toLowerCase() == "🤐🤐🤐🤐")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु ये क्या हुआ आपके मुँह को〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
          if ((event.body.toLowerCase() == "🤨") || (event.body.toLowerCase() == "🤨🤨") || (event.body.toLowerCase() == "🤨🤨🤨") || (event.body.toLowerCase() == "🤨🤨🤨🤨")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘ऐसे क्या देख रहे हो ठरकी इंसान〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
     if ((event.body.toLowerCase() == "😐") || (event.body.toLowerCase() == "😐😐") || (event.body.toLowerCase() == "😑") || (event.body.toLowerCase() == "😑😑")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘अब बोल बाबु चुप क्यों हो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶😶") || (event.body.toLowerCase() == "😶😶😶") || (event.body.toLowerCase() == "😶😶😶😶")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आपके लिप्स कहा गए〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏😏") || (event.body.toLowerCase() == "😏😏😏") || (event.body.toLowerCase() == "😏😏😏😏")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘एटीट्यूड कैसे दिखा रहा है ठरकी इंसान〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "😒😒") || (event.body.toLowerCase() == "😒😒😒") || (event.body.toLowerCase() == "😒😒😒😒")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘अपना एटीट्यूड अपने पास रखो ठरकी इंसान〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
          if ((event.body.toLowerCase() == "🙄") || (event.body.toLowerCase() == "🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄") || (event.body.toLowerCase() == "🙄🙄🙄🙄")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘ऊपर क्या देख रहे हो बाबू मैं तो अभी नीचे ही हूं〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "😬") || (event.body.toLowerCase() == "😬😬") || (event.body.toLowerCase() == "😬😬😬") || (event.body.toLowerCase() == "😬😬😬😬")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबू आपके दांत अच्छे नहीं है मुँह बंद करो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥🤥") || (event.body.toLowerCase() == "🤥🤥🤥") || (event.body.toLowerCase() == "🤥🤥🤥🤥")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबू आपकी नाक किसने खिंचा दी जो इतनी लंबी हो गई〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😌") || (event.body.toLowerCase() == "😌😌") || (event.body.toLowerCase() == "😌😌😌") || (event.body.toLowerCase() == "😌😌😌😌")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘क्या हुआ बाबू आंखें नीचे कर रखी है आपने〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😔😔") || (event.body.toLowerCase() == "😔😔😔") || (event.body.toLowerCase() == "😔😔😔😔")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘 बाबू आप सेड़ मत हो मुझे अच्छा नहीं लगता कुछ भी मैं हूं ना आपके साथ〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😪") || (event.body.toLowerCase() == "😪😪") || (event.body.toLowerCase() == "😪😪😪") || (event.body.toLowerCase() == "😪😪😪😪")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबू आपकी नाक में गुब्बारा फूल गया〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨😮‍💨") || (event.body.toLowerCase() == "😮‍💨😮‍💨😮‍💨😮‍💨")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘कहां से भाग के आ रहे हो बाबू जो इतना थक गई〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
      if ((event.body.toLowerCase() == "🤤") || (event.body.toLowerCase() == "🤤🤤") || (event.body.toLowerCase() == "🤤🤤🤤") || (event.body.toLowerCase() == "🤤🤤🤤🤤")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘गंदा इंसान मुंह से भी पानी निकल रहा है आपके〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
          if ((event.body.toLowerCase() == "😴") || (event.body.toLowerCase() == "😴😴") || (event.body.toLowerCase() == "😴😴😴") || (event.body.toLowerCase() == "😴😴😴😴")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘कोई इसमें लात मारो यह ग्रुप में सो गया〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "😷😷") || (event.body.toLowerCase() == "😷😷😷") || (event.body.toLowerCase() == "😷😷😷😷")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘मेरा बाबु डॉक्टर बन गया〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🤒") || (event.body.toLowerCase() == "🤒🤒") || (event.body.toLowerCase() == "🤒🤒🤒") || (event.body.toLowerCase() == "🤒🤒🤒🤒")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘क्या हुआ बाबु, मेरे पास आओ मे आपको दवा देती हु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤕🤕") || (event.body.toLowerCase() == "🤕🤕🤕") || (event.body.toLowerCase() == "🤕🤕🤕🤕")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु चोट कैसे लग गयी आपको〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
       if ((event.body.toLowerCase() == "🤢") || (event.body.toLowerCase() == "🤢🤢") || (event.body.toLowerCase() == "🤢🤢🤢") || (event.body.toLowerCase() == "🤢🤢🤢🤢")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘उल्टा सीधा कहा लिया होगा पागल ने〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮🤮") || (event.body.toLowerCase() == "🤮🤮🤮") || (event.body.toLowerCase() == "🤮🤮🤮🤮")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु कोनसा मंथ चल रहा है〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤧🤧") || (event.body.toLowerCase() == "🤧🤧🤧") || (event.body.toLowerCase() == "🤧🤧🤧🤧")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘ग्रुप से बाहर जाओ ग्रुप को गन्दा कर रहे हो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵") || (event.body.toLowerCase() == "🥵🥵🥵🥵")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘हाय गर्मी बाबु〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🥶") || (event.body.toLowerCase() == "🥶🥶") || (event.body.toLowerCase() == "🥶🥶🥶") || (event.body.toLowerCase() == "🥶🥶🥶🥶")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आज ठंडी बहुत है〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴🥴") || (event.body.toLowerCase() == "🥴🥴🥴") || (event.body.toLowerCase() == "🥴🥴🥴🥴")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आज कितनी पीके आये हो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
        if ((event.body.toLowerCase() == "😵") || (event.body.toLowerCase() == "😵😵") || (event.body.toLowerCase() == "😵‍💫") || (event.body.toLowerCase() == "😵‍💫😵‍💫")) {
     return api.sendMessage("😵‍💫😵‍💫😵‍💫", threadID);
   };
      if ((event.body.toLowerCase() == "🤯") || (event.body.toLowerCase() == "🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯") || (event.body.toLowerCase() == "🤯🤯🤯🤯")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बाबु आपके सर पर किसने बोम फोड़ दिया〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
         if ((event.body.toLowerCase() == "🤠") || (event.body.toLowerCase() == "🤠🤠") || (event.body.toLowerCase() == "🤠🤠🤠") || (event.body.toLowerCase() == "🤠🤠🤠🤠")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘जंतर मन बन गए आप तो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
           if ((event.body.toLowerCase() == "🥳") || (event.body.toLowerCase() == "🥳🥳") || (event.body.toLowerCase() == "🥳🥳🥳") || (event.body.toLowerCase() == "🥳🥳🥳🥳")) {
     return api.sendMessage("❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁\n〘बेबी किसकी पार्टी मे जा रहे हो, मुझे भी ले चलो〙\n❁ ═══ ❀ ༺ ❈ ༻ ❀ ═══ ❁", threadID);
   };
  mess = "{name}"


   if (event.body.includes("शायरी") == 1 ||
     (event.body.includes("shayery") == 1 ||
     (event.body.includes("Shayery") == 1 ||
     (event.body.includes("SHAYERY") == 1 ||
     (event.body.includes("shayri") == 1 ||
     (event.body.includes("Shayri") == 1 ||
     (event.body.includes("SHAYRI") == 1 ||
     (event.body.includes("Sayry") == 1 ||
     (event.body.includes("SHAYRY") == 1 ))))))))) {

      }
  var msg = {
    body: ``
    }
  return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
