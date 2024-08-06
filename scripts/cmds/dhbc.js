const axios = require("axios");
const { getStreamFromURL } = global.utils;

module.exports = {
	config: {
		name: "dhbc",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "chơi game đuổi hình bắt chữ",
			en: "play game catch the word"
		},
		category: "game",
		guide: {
			en: "{pn}"
		},
		envConfig: {
			reward: 1000
		}
	},

	langs: {
		vi: {
			reply: "Hãy reply tin nhắn này với câu trả lời\n%1",
			isSong: "Đây là tên bài hát của ca sĩ %1",
			notPlayer: "⚠️ Bạn không phải là người chơi của câu hỏi này",
			correct: "🎉 Chúc mừng bạn đã trả lời đúng và nhận được %1$",
			wrong: "⚠️ Bạn đã trả lời sai"
		},
		en: {
			reply: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙧é𝙥𝙤𝙣𝙙𝙧𝙚 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙖𝙫𝙚𝙘 𝙡𝙖 𝙧é𝙥𝙤𝙣𝙨𝙚 👻\n%1",
			isSong: "𝘾'𝙚𝙨𝙩 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙚 𝙡𝙖 𝙘𝙝𝙖𝙣𝙨𝙤𝙣 𝙙𝙪 𝙘𝙝𝙖𝙣𝙩𝙚𝙪𝙧 %1 👻",
			notPlayer: "⚠️ 𝙑𝙤𝙪𝙨 𝙣'ê𝙩𝙚𝙨 𝙥𝙖𝙨 𝙡𝙚 𝙟𝙤𝙪𝙚𝙪𝙧 𝙙𝙚 𝙘𝙚𝙩𝙩𝙚 𝙦𝙪𝙚𝙨𝙩𝙞𝙤𝙣 👻",
			correct: "🎉 𝙁é𝙡𝙞𝙘𝙞𝙩𝙖𝙩𝙞𝙤𝙣𝙨, 𝙫𝙤𝙪𝙨 𝙖𝙫𝙚𝙯 𝙧é𝙥𝙤𝙣𝙙𝙪 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙚𝙢𝙚𝙣𝙩 𝙚𝙩 𝙧𝙚ç𝙪 %1$ 👻",
			wrong: "⚠️ 𝙑𝙤𝙪𝙨 𝙖𝙫𝙚𝙯 𝙢𝙖𝙡 𝙧é𝙥𝙤𝙣𝙙𝙪 👻"
		}
	},

	onStart: async function ({ message, event, commandName, getLang }) {
		const datagame = (await axios.get("https://goatbotserver.onrender.com/api/duoihinhbatchu")).data;
		const { wordcomplete, casi, image1, image2 } = datagame.data;

		message.reply({
			body: getLang("reply", wordcomplete.replace(/\S/g, "█ ")) + (casi ? getLang("isSong", casi) : ''),
			attachment: [
				await getStreamFromURL(image1),
				await getStreamFromURL(image2)
			]
		}, (err, info) => {
			global.GoatBot.onReply.set(info.messageID, {
				commandName,
				messageID: info.messageID,
				author: event.senderID,
				wordcomplete
			});
		});
	},

	onReply: async ({ message, Reply, event, getLang, usersData, envCommands, commandName }) => {
		const { author, wordcomplete, messageID } = Reply;
		if (event.senderID != author)
			return message.reply(getLang("notPlayer"));

		if (formatText(event.body) == formatText(wordcomplete)) {
			global.GoatBot.onReply.delete(messageID);
			await usersData.addMoney(event.senderID, envCommands[commandName].reward);
			message.reply(getLang("correct", envCommands[commandName].reward));
		}
		else
			message.reply(getLang("wrong"));
	}
};

function formatText(text) {
	return text.normalize("NFD")
		.toLowerCase()
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[đ|Đ]/g, (x) => x == "đ" ? "d" : "D");
}
