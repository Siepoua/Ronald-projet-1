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

async function getAIResponse(input, userName, userId, messageID) {
  const services = [
    { url: 'https://metoushela-rest-api-tp5g.onrender.com/api/gpt4o?', params: { context: input } },
    
    { url: 'https://jonellccprojectapis10.adaptable.app/api/gpt4o', params: { context: input } }
  ];

  let response = `𝙃𝙚𝙡𝙡𝙤 𝙬𝙝𝙖𝙩 𝙘𝙖𝙣 𝙞 𝙙𝙤 𝙛𝙤𝙧 𝙮𝙤𝙪 ☕`;
  let currentIndex = 0;

  for (let i = 0; i < services.length; i++) {
    const service = services[currentIndex];
    const data = await fetchFromAI(service.url, service.params);
    if (data && (data.gpt4 || data.reply || data.response)) {
      response = data.gpt4 || data.reply || data.response;
      break;
    }
    currentIndex = (currentIndex + 1) % services.length; // Passer au service suivant
  }

  return { response, messageID };
}

module.exports = {
  config: {
    name: 'clara',
    author: 'Metouchela', // édit by metouchela🧑‍🦯
    role: 0,
    category: 'ai',
    shortDescription: 'clara to ask anything',
  },
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage("𝙃𝙚𝙡𝙡𝙤 𝙬𝙝𝙖𝙩 𝙘𝙖𝙣 𝙞 𝙙𝙤 𝙛𝙤𝙧 𝙮𝙤𝙪 ☕", event.threadID, event.messageID);
      return;
    }

    api.getUserInfo(event.senderID, async (err, ret) => {
      if (err) {
        console.error(err);
        return;
      }
      const userName = ret[event.senderID].name;
      const { response, messageID } = await getAIResponse(input, userName, event.senderID, event.messageID);
      api.sendMessage(`💬 𝘾𝙝𝙖𝙩𝙂𝙋𝙏 ☯\n━━━━━━━━━━━━━━━━\n\n${response}\n\n━━━━━━━━━━━━━━━━`, event.threadID, messageID);
    });
  },
  onChat: async function ({ api, event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("clara")) {
      const input = messageContent.replace(/^clara\s*/, "").trim();
      api.getUserInfo(event.senderID, async (err, ret) => {
        if (err) {
          console.error(err);
          return;
        }
        const userName = ret[event.senderID].name;
        const { response, messageID } = await getAIResponse(input, userName, event.senderID, message.messageID);
        message.reply(`💬 𝘾𝙝𝙖𝙩𝙂𝙋𝙏 ☯\n━━━━━━━━━━━━━━━━\n✓ 𝘼𝙣𝙨𝙬𝙚𝙧 𝙛𝙤𝙧: ${userName}\n${response}\n━━━━━━━━━━━━━━━━\n`, messageID);
api.setMessageReaction("✅", event.messageID, () => {}, true);

      });
    }
  }
};
