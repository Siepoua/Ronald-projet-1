module.exports = {
  config: {
    name: "profile",
    aliases: ["pfp"],
    version: "1.1",
    author: "NIB",
    countDown: 5,
    role: 0,
    shortDescription: "PROFILE image",
    longDescription: "PROFILE image",
    category: "image",
    guide: {
      en: "   {pn} @tag"
    }
  },

  langs: {
    vi: {
      noTag: "Bạn phải tag người bạn muốn tát"
    },
    en: {
      noTag: "𝙑𝙤𝙪𝙨 𝙙𝙚𝙫𝙚𝙯 𝙩𝙖𝙜𝙪𝙚𝙧 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙙𝙤𝙣𝙩 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙤𝙗𝙩𝙚𝙣𝙞𝙧 𝙪𝙣𝙚 𝙥𝙝𝙤𝙩𝙤 𝙙𝙚 𝙥𝙧𝙤𝙛𝙞𝙡"
    }
  },

  onStart: async function ({ event, message, usersData, args, getLang }) {
    let avt;
    const uid1 = event.senderID;
    const uid2 = Object.keys(event.mentions)[0];
    if(event.type == "message_reply"){
      avt = await usersData.getAvatarUrl(event.messageReply.senderID)
    } else{
      if (!uid2){avt =  await usersData.getAvatarUrl(uid1)
              } else{avt = await usersData.getAvatarUrl(uid2)}}


    message.reply({
      body:"",
      attachment: await global.utils.getStreamFromURL(avt)
  })
  }
};
