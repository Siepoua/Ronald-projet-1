const axios = require("axios");

module.exports = {
	config: {
		name: "emojimix",
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Mix 2 emoji lại với nhau",
			en: "Mix 2 emoji together"
		},
		guide: {
			vi: "   {pn} <emoji1> <emoji2>"
				+ "\n   Ví dụ:  {pn} 🤣 🥰",
			en: "   {pn} <emoji1> <emoji2>"
				+ "\n   Example:  {pn} 🤣 🥰"
		},
		category: "fun"
	},

	langs: {
		vi: {
			error: "Rất tiếc, emoji %1 và %2 không mix được",
			success: "Emoji %1 và %2 mix được %3 ảnh"
		},
		en: {
			error: "𝘿é𝙨𝙤𝙡é, 𝙡𝙚𝙨 𝙚𝙢𝙤𝙟𝙞 %1 𝙚𝙩 %2 𝙣𝙚 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙥𝙖𝙨 𝙨𝙚 𝙢é𝙡𝙖𝙣𝙜𝙚𝙧 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			success: "𝙀𝙢𝙤𝙟𝙞 %1 𝙚𝙩 %2 𝙢é𝙡𝙖𝙣𝙜𝙚𝙣𝙩 %3 𝙞𝙢𝙖𝙜𝙚𝙨 👻"
		}
	},

	onStart: async function ({ message, args, getLang }) {
		const readStream = [];
		const emoji1 = args[0];
		const emoji2 = args[1];

		if (!emoji1 || !emoji2)
			return message.SyntaxError();

		const generate1 = await generateEmojimix(emoji1, emoji2);
		const generate2 = await generateEmojimix(emoji2, emoji1);

		if (generate1)
			readStream.push(generate1);
		if (generate2)
			readStream.push(generate2);

		if (readStream.length == 0)
			return message.reply(getLang("error", emoji1, emoji2));

		message.reply({
			body: getLang("success", emoji1, emoji2, readStream.length),
			attachment: readStream
		});
	}
};



async function generateEmojimix(emoji1, emoji2) {
	try {
		const { data: response } = await axios.get("https://goatbotserver.onrender.com/taoanhdep/emojimix", {
			params: {
				emoji1,
				emoji2
			},
			responseType: "stream"
		});
		response.path = `emojimix${Date.now()}.png`;
		return response;
	}
	catch (e) {
		return null;
	}
}
