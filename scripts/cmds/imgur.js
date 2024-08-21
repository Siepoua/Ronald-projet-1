const axios = require('axios');
const { GoatWrapper } = require('fca-liane-utils');

module.exports = {
		config: {
				name: "imgur",
				version: "1.0.0",
				role: 0,
				author: "Chris",
				shortDescription: "imgur upload",
				countDown: 0,
				category: "imgur",
				guide: {
						en: '[reply to image]'
				}
		},

		onStart: async ({ api, event }) => {
				let link2;

				if (event.type === "message_reply" && event.messageReply.attachments.length > 0) {
						link2 = event.messageReply.attachments[0].url;
				} else if (event.attachments.length > 0) {
						link2 = event.attachments[0].url;
				} else {
						return api.sendMessage('𝘼𝙪𝙘𝙪𝙣𝙚 𝙥𝙞è𝙘𝙚 𝙟𝙤𝙞𝙣𝙩𝙚 𝙙é𝙩𝙚𝙘𝙩é𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚. 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙧é𝙥𝙤𝙣𝙙𝙧𝙚 à 𝙪𝙣𝙚 𝙞𝙢𝙖𝙜𝙚.', event.threadID, event.messageID);
				}

				try {
						const res = await axios.get(`http://158.101.198.227:8609/imgur2?link=${encodeURIComponent(link2)}`);
						const link = res.data.uploaded.image;
						return api.sendMessage(`𝙑𝙤𝙞𝙘𝙞 𝙡𝙚 𝙡𝙞𝙚𝙣 𝙄𝙢𝙜𝙪𝙧 𝙥𝙤𝙪𝙧 𝙡'𝙞𝙢𝙖𝙜𝙚 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙖𝙫𝙚𝙯 𝙛𝙤𝙪𝙧𝙣𝙞𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚:\n\n${link}`, event.threadID, event.messageID);
				} catch (error) {
						console.error("𝙀𝙧𝙧𝙚𝙪𝙧 𝙡𝙤𝙧𝙨 𝙙𝙪 𝙩é𝙡é𝙘𝙝𝙖𝙧𝙜𝙚𝙢𝙚𝙣𝙩 𝙙𝙚 𝙡'𝙞𝙢𝙖𝙜𝙚 𝙨𝙪𝙧 𝙄𝙢𝙜𝙪𝙧 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚:", 𝙀𝙧𝙧𝙚𝙪𝙧);
						return api.sendMessage("An error occurred while uploading the image to Imgur.", event.threadID, event.messageID);
				}
		}
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
