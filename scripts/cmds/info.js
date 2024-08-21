const fs = require('fs');
const moment = require('moment-timezone');

module.exports = {
	config: {
		name: "info",
		version: "1.0",
		author: "chris",
		countDown: 20,
		role: 0,
		shortDescription: { vi: "", en: "" },
		longDescription: { vi: "", en: "" },
		category: "owner",
		guide: { en: "" },
		envConfig: {}
	},
	onStart: async function ({ message }) {
		const botName = "𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙡𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚";
		const botPrefix = ".";
		const authorName = "𝘾𝙝𝙧𝙞𝙨 𝙨𝙩";
		const ownAge = "16";
		const teamName = "𝘾𝙝𝙧𝙞𝙨 𝙨𝙩";
		const authorFB = "https://www.facebook.com/profile.php?id=100094118835962";
		const authorInsta = "𝘾𝙝𝙧𝙞𝙨 𝙨𝙩";
		const tikTok = "tiktok.com/@Minato897876";
		const urls = JSON.parse(fs.readFileSync('chris.json'));
		const link = urls[Math.floor(Math.random() * urls.length)];
		const now = moment().tz('chris/st');
		const date = now.format('MMMM Do YYYY');
		const time = now.format('h:mm:ss A');
		const uptime = process.uptime();
		const seconds = Math.floor(uptime % 60);
		const minutes = Math.floor((uptime / 60) % 60);
		const hours = Math.floor((uptime / (60 * 60)) % 24);
		const days = Math.floor(uptime / (60 * 60 * 24));
		const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

		message.reply({
			body: `《  𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙇𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚 𝙞𝙣𝙛𝙤 》
\Name: ${botName}
\Bot Prefix: ${botPrefix}
\owner: ${authorName}
\age : ${ownAge}
\Facebook: ${authorFB}
\Instagram: ${authorInsta}
\TikTok: ${tikTok}
\Datee: ${date}
\Time: ${time}
\Team: ${teamName}
\Uptime: ${uptimeString}
\===============`,
			attachment: await global.utils.getStreamFromURL(link)
		});
	},
	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "info") {
			this.onStart({ message });
		}
	}
};
