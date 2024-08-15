module.exports = {
	config: {
		name: "unsend",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Gỡ tin nhắn của bot",
			en: "𝘼𝙣𝙣𝙪𝙡𝙚𝙧 𝙡'𝙚𝙣𝙫𝙤𝙞 𝙙𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻"
		},
		category: "box chat",
		guide: {
			vi: "reply tin nhắn muốn gỡ của bot và gọi lệnh {pn}",
			en: "𝙧é𝙥𝙤𝙣𝙙𝙚𝙯 𝙖𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙖𝙣𝙣𝙪𝙡𝙚𝙧 𝙚𝙩 𝙖𝙥𝙥𝙚𝙡𝙚𝙯 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 {𝙥𝙣}"
		}
	},

	langs: {
		vi: {
			syntaxError: "Vui lòng reply tin nhắn muốn gỡ của bot"
		},
		en: {
			syntaxError: "Please reply the message you want to unsend"
		}
	},

	onStart: async function ({ message, event, api, getLang }) {
		if (!event.messageReply || event.messageReply.senderID != api.getCurrentUserID())
			return message.reply(getLang("syntaxError"));
		message.unsend(event.messageReply.messageID);
	}
};
