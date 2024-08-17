onst axios = require("axios");
const fs = require("fs-extra");
const request = require("request");

module.exports = {
  config: {
    name: "join",
    version: "2.0",
    author: "Kshitiz",
    countDown: 5,
    role: 2,
    shortDescription: "Join the group that bot is in",
    longDescription: "",
    category: "user",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, event }) {
    try {
      const groupList = await api.getThreadList(10, null, ['INBOX']);

      const filteredList = groupList.filter(group => group.threadName !== null);

      if (filteredList.length === 0) {
        api.sendMessage('𝘼𝙪𝙘𝙪𝙣𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙩𝙧𝙤𝙪𝙫é𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻.', event.threadID);
      } else {
        const formattedList = filteredList.map((group, index) =>
          `│${index + 1}. ${group.threadName}\n│𝐓𝐈𝐃: ${group.threadID}`
        );
        const message = `╭─╮\n│𝐋𝐢𝐬𝐭𝐞 𝐝𝐞𝐬 𝐠𝐫𝐨𝐮𝐩𝐞𝐬 𝐝𝐞 𝐂𝐡𝐫𝐢𝐬𝐭𝐞𝐥𝐥𝐞 👻:\n${formattedList.map(line => `${line}`).join("\n")}\n╰───────────ꔪ`;

        const sentMessage = await api.sendMessage(message, event.threadID);
        global.GoatBot.onReply.set(sentMessage.messageID, {
          commandName: 'join',
          messageID: sentMessage.messageID,
          author: event.senderID,
        });
      }
    } catch (error) {
      console.error("𝙀𝙧𝙧𝙚𝙪𝙧 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻);
    }
  },

  onReply: async function ({ api, event, Reply, args }) {
    const { author, commandName } = Reply;

    if (event.senderID !== author) {
      return;
    }

    const groupIndex = parseInt(args[0], 10);

    if (isNaN(groupIndex) || groupIndex <= 0) {
      api.sendMessage('Invalid input.\nPlease provide a valid number.', event.threadID, event.messageID);
      return;
    }

    try {
      const groupList = await api.getThreadList(10, null, ['INBOX']);
      const filteredList = groupList.filter(group => group.threadName !== null);

      if (groupIndex > filteredList.length) {
        api.sendMessage('Invalid group number.\nPlease choose a number within the range.', event.threadID, event.messageID);
        return;
      }

      const selectedGroup = filteredList[groupIndex - 1];
      const groupID = selectedGroup.threadID;

      await api.addUserToGroup(event.senderID, groupID);
      api.sendMessage(`You have joined the group chat: ${selectedGroup.threadName}`, event.threadID, event.messageID);
    } catch (error) {
      console.error("Error joining group chat", error);
      api.sendMessage('An error occurred while joining the group chat.\nPlease try again later.', event.threadID, event.messageID);
    } finally {
      global.GoatBot.onReply.delete(event.messageID);
    }
  },
};
