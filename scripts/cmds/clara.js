const axios = require('axios');

const Prefixes = [
  '/clara', 
  'clara',
  'mia',
  'ask',
];

module.exports = {
  config: {
    name: "clara",
    version: 1.0,
    author: "OtinXSandip",
    longDescription: "AI",
    category: "ai",
    guide: {
      en: "{p} questions",
    },
  },
  onStart: async function () {},
  onChat: async function ({ api, event, args, message }) {
    try {
      
      const prefix = Prefixes.find((p) => event.body && event.body.toLowerCase().startsWith(p));
      if (!prefix) {
        return; // Invalid prefix, ignore the command
      }
      const prompt = event.body.substring(prefix.length).trim();
   if (!prompt) {
        await message.reply("💬𝘾𝙝𝙖𝙩𝙂𝙋𝙏 \n━━━━━━━━━━━━━━━━\n𝙔𝙤 𝙞'𝙢 𝙘𝙡𝙖𝙧𝙖. 𝘼 𝙫𝙞𝙧𝙩𝙪𝙖𝙡 𝙖𝙨𝙨𝙞𝙨𝙩𝙖𝙣𝙩 𝙬𝙝𝙖𝙩 𝙘𝙖𝙣 𝙞 𝙙𝙤 𝙛𝙤4 𝙮𝙤𝙪 ?\n━━━━━━━━━━━━━━━━");
        return;
      }


      const response = await axios.get(`https://sandipbaruwal.onrender.com/gpt?prompt=${encodeURIComponent(prompt)}`);
      const answer = response.data.answer;

 
    await message.reply(answer);

    } catch (error) {
      console.error("Error:", error.message);
    }
  }
};
