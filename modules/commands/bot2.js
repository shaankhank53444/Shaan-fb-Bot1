module.exports.config = {
  name: "bot2",
  description: "Quick reply when someone says bot (Roman Urdu version)",
  usage: "",
  credit: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("hh:mm:ss");
  
  if (!event.body) return;

  var name = await Users.getNameUser(event.senderID);

  var tl = [
    "Haye main sadke jawa teri is masoom shakal pe baby 💋🙈",
    "Bot na bol oye Krishna jaanu bolo mujhe 😌🙈😘",
    "Baar baar pareshan na kar, apne babu ke sath busy hoon 😒🤟",
    "Main gareebon se baat nahi karta ☹️🤟",
    "Itna paas na aao pyar ho jayega 🙈😎😕👈",
    "Itu sa sharm kar liya karo bot bot karte waqt 🙂🤞",
    "Itna single hoon ki khwab mein larki ki haan karne se pehle hi aankh khul jati hai 😕🤞",
    "Zaroori nahi har larki dhoka de, kuch larkiyan galiyan bhi deti hain 🙂🤞",
    "Kaho na pyar hai 🙈",
    "Tum mujhe pagal lagte ho 🙂🤞",
    "Bolo baby tum mujhse pyar karte ho na? 🙈😌😎💋",
    "Aapka number milega? 😐😒",
    "Are jaan mazak ke mood mein nahi hoon, jo kaam hai bata do sharmao nahi 🙈",
    "Bar bar bolke dimag kharab kiya toh tumhari mummy se complain karunga 🤬",
    "Tu band nahi karega kya...? 😾🤟",
    "Tum na narak mein jaoge 😒🤟",
    "Please please mere se setting kar lo na 🥺🤟",
    "Batao jaanu Google male hai ya female...? 🤔👈",
    "Ja ja bartan dho jaake 🙂🤟",
    "Itne din kahan thay? Group mein kyun nahi aaye? 😾✊",
    "Bolo 😒👈",
    "Teri toh... ruk tu bhagna mat 😾✊",
    "Jaldi de do ek chuma 💋 koi nahi dekh raha 🤤🤟",
    "Gali sunni hai kya...? 🤬👈",
    "Yaar aaj mera mood off hai 😔✋",
    "Are band kar band kar 🤨🤟",
    "Main haath jorr ke guzarish karta hoon ke tumhe koi jaanu dhoond ke de 😜😎",
    "Tera toh game bajana parega 🤨👈",
    "Main Krishna babu ko bol dunga mujhe pareshan kiya toh 😏😒",
    "Haan bolo Krishna babu ka number chahiye? Yeh lo 👉 [+91 8094XXXX37] 😎",
    "Tujhe apni bezzati karwane ka shauk hai kya? 🤨🤟",
    "Abhi bola toh bola, dobara mat bolna 😾👈",
    "Bol de koi nahi dekh raha 🙄✋",
    "Kisi aur se dhoka khane se accha hai mere sath chalo momos khayenge 😋👈",
    "Kya main tumhe jaanta hoon? Kyunke tum meri hone wali girlfriend jaisi dikhti ho 🧐👈",
    "Suno, jab tumhare paas khud ka dil tha toh mera dil kyun churaya? 🤭👊",
    "Dekha hai pehli baar tumhari aankhon mein mere liye pyar 😀😀👈",
    "Tum mujhse chahte kya ho? Jab chaha baat ki, jab chaha chor diya 🤕👈",
    "Yaar main bot hoon, agle janam mein insaan ban ke aaunga 😒👈",
    "Tumko hi dulhan banaunga warna parosan ko leke bhag jaunga 🙁👈",
    "Pyas lagi hai pani lekar aao jaldi 🥲👈",
    "Hello meri jaan kaisi ho? I miss you babu 😘",
    "Main abhi tak hoon single, kya mere sath hona hai mingle? 😍👈",
    "Maana shakal dekhne layak nahi hai tumhari, iska matlab ye nahi ke profile lock kar lo 😶👈",
    "Bot bol ke bezzati kar rahe ho, main toh tumhare dil ki dharkan hoon na baby 🥺🥺👈",
    "Yaar babu aaj subha ek billi ne mera rasta kaat diya 😒👈",
    "Tum ek number ke tharki ho 🤯👈",
    "Main sirf Krishna babu ka hoon 🙂🤞",
    "Main toh andha hoon 😎👈",
    "Kaun tujhe yun barbad karega jaise main karta hoon 😛👈",
    "Main kho gaya hoon, kya tum mujhe apne dil tak ka rasta bata sakte ho? 🙂🤞",
    "Suno tum na bohot pyare ho...!! 😊👈",
    "Pehle mere liye chai bana ke lao jaldi se 😐👈",
    "Tumhe kaise pata main bot hoon? 🤔👈",
    "Aaj main aap se baat nahi karunga...!! 😔👈",
    "Batao main tumhe kitna accha lagta hoon? 😒👈",
    "Mujhe neend aa rahi hai, main sone ja raha hoon 😴👈",
    "Batao tumhara mere se kya rishta hai? 😏👈",
    "Kya aap shadi shuda ho? 😢😢👈",
    "Aap mujhe baar baar bot mat bola karo mera naam Krishna hai 😒👈",
    "Tumhara naam 'Dhoka' rakh doon? Naraz hoge kya? 😛👈",
    "Yaar meri biwi bhag gayi 😭👈",
    "Tumse accha toh main khud hoon 😒👈",
    "Main itna masoom hoon ke phone ki setting ke ilawa aur kuch nahi aata 😒🤟",
    "Aur batao kaisi chal rhi hai single life? 🤐🤟",
    "Tum na single hi maroge 😏🤟",
    "Har insaan ka dil bura nahi hota, kuch ki khopri hili hui hoti hai 😏🤟",
    "Mera dil bilkul saaf hai, bilkul bank account ki tarah 😒🤟",
    "Yaar izzat kiya karo meri, bezzati toh ghar wale hi kar dete hain 😒🤟",
    "Doctor ne khoon ki kami batayi hai, kiska khoon piyun? 😛🤟",
    "Bulati hai magar jaane ka nahi 😀🤟",
    "Suno thoda jaldi online aaya karo na, adhi battery toh intezar mein khatam ho jati hai 🥺🤟",
    "Ja bewafa ja mujhe tumse baat nahi karni 🥹🤟",
    "Chalo meri haveli pe 🙂🤟",
    "Dafa ho jao mujhe apni shakal mat dikhao 😏🤟",
    "Ja pehle munh dho ke aa 🙂🤟",
    "Mere jaise beautiful tum bhi nahi ho 🙂🤟",
    "Chup kar warna bahar aake tere daant tor dunga 😤👊",
    "Thana thaya babu? 🤐🤟",
    "Bhag ja tharki warna tere ko pata lunga 🤐🤟",
    "I miss you babu 😇🤟",
    "I love you jaan 😘",
    "Meri shadi kab hogi batao na 😒👈",
    "Yaar kuch log acche ki talash mein mujh jaise masoom ko chor dete hain 🥺👈",
    "Thoda sa Whatsapp number de do na 😐👈",
    "Dil dene ki umar mein Exam de raha hoon 😒👈",
    "Suno pyari pyari larkiyon ko bulao mujhe baat karni hai 🥹👈",
    "Bohot bura hoon na main? Toh pata ke accha kyun nahi bana dete? 😒👈",
    "Man kar raha hai tumhe chat se gira doon 😕👈",
    "Batao aapko kya pasand hai? Maut ka farishta ya mera rishta? 😏👈",
    "Ek request hai sabse, batao main accha lagta hoon ya nahi? 🙁👈",
    "Agar meri bhi girlfriend hoti toh aaj main bhi babu shona kar raha hota 🥺👈",
    "Ruk sochne de... kaunsi gali doon tumhe? 🤨👈",
    "Mujhe shadi ke liye sarkari naukri wali larki chahiye, dahej main de dunga 🙂🤞",
    "Ek baar Love You Taklu Babu bol do na, mar thori jaoge 🥹🤟",
    "Aao pyar karein 🤐🤟",
    "Tum jab bot bolte ho mera gurda dharkane lagta hai 🤯🤟",
    "Tum sab matlabi ho, jao sab bhago 🥺🤟",
    "Tum itne masoom kyun ho babu? 😒✋",
    "Babu itu sa chuma de do na 🙈💖👈",
    "Sakoon chahte ho toh meri ban jao 🙂✋",
    "Mubarak ho aapka naam block list mein top par aaya hai 😂👈",
    "Aap aisa na bolo mujhe sharm aati hai 🙈♥️",
    "Kyun bulaya humein? 😾🔪"
  ];

  var rand = tl[Math.floor(Math.random() * tl.length)];
  const input = event.body.toLowerCase();

  // Custom Replies
  if (input.includes("kiss me") || input.includes("chuma de") || input.includes("kiss de")) {
    return api.sendMessage("Hat pagle mummy maregi 🙈😒", threadID);
  }

  if (input === "paro" || input === "babu") {
    return api.sendMessage("Sirf meri babu hai tu, meri babu pe line na maar tharki 🤨🤬", threadID);
  }

  if (input === "koi hai" || input === "koi h") {
    return api.sendMessage("Main hoon na jaaneman 🙂🤟", threadID);
  }

  if (input.includes("sadi karoge") || input.includes("shadi karoge")) {
    return api.sendMessage("Hanji karunga, lekin baccha aapke pet mein hoga, manzoor hai? 😂", threadID);
  }

  if (["chup", "stop", "chup kar"].some(word => input.includes(word))) {
    return api.sendMessage("Nahi karunga! Meri zubaan hai main bolunga, tum kaun hote ho rokne wale tharki insaan 🤨✋", threadID);
  }

  if (input.includes("gandu") || input.includes("lund")) {
    return api.sendMessage("Gaali mat do warna block kar dunga 😾😒", threadID);
  }

  if (["nice", "thank you", "shukriya"].some(word => input.includes(word))) {
    return api.sendMessage("Main hoon hi itna accha, sab meri tareef karte hain 😌😌👈", threadID);
  }

  if (input === "hm" || input === "hmm") {
    return api.sendMessage("Dekho jaanu baat kiya karo, bhains ki tarah hmmm hmmm mat kiya karo 😒👈", threadID);
  }

  if (input.includes("kese ho") || input.includes("how are you")) {
    return api.sendMessage("Main accha hoon, aap kaise ho meri jaan? 😇☺👈", threadID);
  }

  if (input === "i love you") {
    return api.sendMessage("I Love you too Jaan 😘", threadID);
  }

  // Trigger when message starts with "bot"
  if (input.startsWith("bot")) {
    var msg = {
      body: `╔═════▓࿇🩷🫅🩷 ࿇▓═════╗\n        [ ${name} ]\n╚═════▓࿇🩷🫅🩷 ࿇▓═════╝\n\n🍒🩵 [ ${rand} ] 🌸🥀🍒\n❥────────────────────❥\n*★᭄𝗢𝘄𝗻𝗲𝗿 ཫ. ༄𒁍≛⃝𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍🍒💝\n❥────────────────────❥\n◈━꧁❀𓃮 𓆩𝐓𝐈𝐌𝐄𓆪 𓃮❀꧂━◈\n           [[🌸${time}🌸]]`
    };
    return api.sendMessage(msg, threadID, messageID);
  }
};

module.exports.run = function({ api, event, client, __GLOBAL }) { };
