const axios = require('axios');

async function fetchFromAI(url, params) {
  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getAIResponse(input, userId, messageID) {
  const services = [
     { url: 'https://metoushela-rest-api-tp5g.onrender.com/api/gpt4o?', params: { context: input } }
  ];

  let response = "𝐇𝐢 𝐡𝐨𝐰 𝐚𝐫𝐞 𝐲𝐨𝐮, 𝐡𝐨𝐰 𝐜𝐚𝐧 𝐈 𝐡𝐞𝐥𝐩 𝐲𝐨𝐮 𝐬𝐨 𝐟𝐚𝐫 🙂";
  let currentIndex = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[currentIndex];
    const data = await fetchFromAI(service.url, service.params);
    if (data && (data.gpt4 || data.reply || data.response)) {
      response = data.gpt4 || data.reply || data.response;
      break;
    }
    currentIndex = (currentIndex + 1) % services.length; // Move to the next service in the cycle
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'clara',
    author: 'Metouchela',
    role: 0,
    category: 'ai',
    shortDescription: 'ai to ask anything',
  },
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage(`📑 𝙿𝚕𝚎𝚊𝚜𝚎 𝚙𝚛𝚘𝚟𝚒𝚍𝚎 a 𝚚𝚞𝚎𝚜𝚝𝚒𝚘𝚗 𝚘𝚛 𝚜𝚝𝚊𝚝𝚎𝚖𝚎𝚗𝚝. `, event.threadID, event.messageID);
      return;
    }

    const { response, messageID } = await getAIResponse(input, event.senderID, event.messageID);
    api.sendMessage(`\n¥n${response}\n\n`, event.threadID, messageID);
  },
  onChat: async function ({ event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("clara")) {
      const input = messageContent.replace(/^clara\s*/, "").trim();
      const { response, messageID } = await getAIResponse(input, event.senderID, message.messageID);
      message.reply(`💬 𝘾𝙝𝙖𝙩𝙂𝙋𝙏\n━━━━━━━━━━━━━━━━\n${response}\n━━━━━━━━━━━━━━━━`, messageID);
    }
  }
};
