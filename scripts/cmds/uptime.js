 module.exports = {
  config: {
    name: "upt",
    aliases: ["uptime"],
    version: "1.0",
    author: "chris",
    role: 2,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();
      
const days = 
Math.floor(uptime / (3600 * 24));
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `${days} : ${hours} : ${minutes} : ${seconds}`;
      
      api.sendMessage(`[⌛] 𝙏𝙞𝙢𝙚\n\n✪➩ ${uptimeString}\n
[👻] 𝙉𝙪𝙢é𝙧𝙤 𝙥𝙤𝙪𝙧 𝙡𝙚𝙨 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻\n\n✪➩ ${allUsers.length}\n
[👻] 𝙣𝙪𝙢é𝙧𝙞𝙦𝙪𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻\n\n✪➩ ${allThreads.length}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
