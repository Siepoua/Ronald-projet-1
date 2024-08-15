const { findUid } = global.utils;
const regExCheckURL = /^(http|https):\/\/[^ "]+$/;

module.exports = {
	config: {
		name: "uid",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Xem user id facebook của người dùng",
			en: "𝘼𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙡'𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙙𝙚 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 👻"
		},
		category: "info",
		guide: {
			vi: "   {pn}: dùng để xem id facebook của bạn"
				+ "\n   {pn} @tag: xem id facebook của những người được tag"
				+ "\n   {pn} <link profile>: xem id facebook của link profile"
				+ "\n   Phản hồi tin nhắn của người khác kèm lệnh để xem id facebook của họ",
			en: "   {pn}: use to view your facebook user id"
				+ "\n   {pn} @tag: view facebook user id of tagged people"
				+ "\n   {pn} <profile link>: view facebook user id of profile link"
				+ "\n   Reply to someone's message with the command to view their facebook user id"
		}
	},

	langs: {
		vi: {
			syntaxError: "Vui lòng tag người muốn xem uid hoặc để trống để xem uid của bản thân"
		},
		en: {
			syntaxError: "𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 :𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙢𝙖𝙧𝙦𝙪𝙚𝙧 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙙𝙤𝙣𝙩 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙖𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙡'𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 𝙤𝙪 𝙡𝙖𝙞𝙨𝙨𝙚𝙯-𝙡𝙚 𝙫𝙞𝙙𝙚 𝙥𝙤𝙪𝙧 𝙖𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙫𝙤𝙩𝙧𝙚 𝙥𝙧𝙤𝙥𝙧𝙚 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 👻"
		}
	},

	onStart: async function ({ message, event, args, getLang }) {
		if (event.messageReply)
			return message.reply(event.messageReply.senderID);
		if (!args[0])
			return message.reply(event.senderID);
		if (args[0].match(regExCheckURL)) {
			let msg = '';
			for (const link of args) {
				try {
					const uid = await findUid(link);
					msg += `${link} => ${uid}\n`;
				}
				catch (e) {
					msg += `${link} (ERROR) => ${e.message}\n`;
				}
			}
			message.reply(msg);
			return;
		}

		let msg = "";
		const { mentions } = event;
		for (const id in mentions)
			msg += `${mentions[id].replace("@", "")}: ${id}\n`;
		message.reply(msg || getLang("syntaxError"));
	}
};
