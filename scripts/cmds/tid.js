module.exports = {
	config: {
		name: "tid",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Xem id nhóm chat của bạn",
			en: "𝘼𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙡'𝙄𝘿 𝙙𝙪 𝙛𝙞𝙡 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻"
		},
		category: "info",
		guide: {
			en: "{pn}"
		}
	},

	onStart: async function ({ message, event }) {
		message.reply(event.threadID.toString());
	}
};
