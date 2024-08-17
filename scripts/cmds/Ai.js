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
    { url: 'https://ai-tools.replit.app/gpt', params: { prompt: input, uid: userId } },
    { url: 'https://openaikey-x20f.onrender.com/api', params: { prompt: input } },
    { url: 'http://fi1.bot-hosting.net:6518/gpt', params: { query: input } },
    { url: 'https://ai-chat-gpt-4-lite.onrender.com/api/hercai', params: { question: input } }
  ];

  let response = "👻 𝙎𝙖𝙡𝙪𝙩 𝙟𝙚 𝙢'𝙖𝙥𝙥𝙚𝙡𝙡𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙟𝙚 𝙨𝙪𝙞𝙨 𝙪𝙣 𝙗𝙤𝙩 𝙙é𝙫𝙚𝙡𝙤𝙥𝙥𝙚𝙧 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨 𝙨𝙩𝙖𝙧𝙩 𝙨𝙞 𝙩𝙪 𝙫𝙚𝙪𝙭 𝙧𝙚𝙜𝙞𝙤𝙣𝙙𝙧𝙚 𝙢𝙤𝙣 𝙜𝙧𝙤𝙪𝙥𝙚 𝙘'𝙚𝙨𝙩 𝙛𝙖𝙘𝙞𝙡𝙚 👻 é𝙘𝙧𝙞𝙩 𝙨𝙚𝙪𝙡𝙚𝙢𝙚𝙣𝙩 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚𝙜𝙘 𝙩𝙠𝙩 𝙟𝙚 𝙫𝙚𝙪𝙭 𝙩'𝙖𝙟𝙤𝙪𝙩𝙚𝙧 𝙚𝙨𝙨𝙖𝙞 𝙨𝙚𝙪𝙡𝙚𝙢𝙚𝙣𝙩 👻";
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
    name: 'ai',
    author: 'Arn',
    role: 0,
    category: 'ai',
    shortDescription: 'ai to ask anything',
  },
  onStart: async function ({ api, event, args }) {
    const input = args.join(' ').trim();
    if (!input) {
      api.sendMessage(`Please provide a question or statement.`, event.threadID, event.messageID);
      return;
    }

    const { response, messageID } = await getAIResponse(input, event.senderID, event.messageID);
    api.sendMessage(`👻𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻\n━━━━━━━━━━━━━━━━\n${response} 👻\n━━━━━━━━━━━━━━━━`, event.threadID, messageID);
  },
  onChat: async function ({ event, message }) {
    const messageContent = event.body.trim().toLowerCase();
    if (messageContent.startsWith("ai")) {
      const input = messageContent.replace(/^ai\s*/, "").trim();
      const { response, messageID } = await getAIResponse(input, event.senderID, message.messageID);
      message.reply(`❄️𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 ❄️ \n━━━━━━━━━━━━━━━━\n${response} 👻\n━━━━━━━━━━━━━━━━`, messageID);
    }
  }
};
