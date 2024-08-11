const fs = require("fs-extra");

module.exports = {
	config: {
		name: "loadconfig",
		aliases: ["loadcf"],
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Load lại config của bot",
			en: "Reload config of bot"
		},
		category: "owner",
		guide: "{pn}"
	},

	langs: {
		vi: {
			success: "Config đã được load lại thành công"
		},
		en: {
			success: "𝙇𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙩𝙞𝙤𝙣 𝙖 é𝙩é 𝙧𝙚𝙘𝙝𝙖𝙧𝙜é𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 👻"
		}
	},

	onStart: async function ({ message, getLang }) {
		global.GoatBot.config = fs.readJsonSync(global.client.dirConfig);
		global.GoatBot.configCommands = fs.readJsonSync(global.client.dirConfigCommands);
		message.reply(getLang("success"));
	}
};
