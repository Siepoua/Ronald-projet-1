const deltaNext = global.GoatBot.configCommands.envCommands.rank.deltaNext;
const expToLevel = exp => Math.floor((1 + Math.sqrt(1 + 8 * exp / deltaNext)) / 2);
const { drive } = global.utils;

module.exports = {
	config: {
		name: "rankup",
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Bật/tắt thông báo level up",
			en: "Turn on/off level up notification"
		},
		category: "rank",
		guide: {
			en: "{pn} [on | off]"
		},
		envConfig: {
			deltaNext: 5
		}
	},

	langs: {
		vi: {
			syntaxError: "Sai cú pháp, chỉ có thể dùng {pn} on hoặc {pn} off",
			turnedOn: "Đã bật thông báo level up",
			turnedOff: "Đã tắt thông báo level up",
			notiMessage: "🎉🎉 chúc mừng bạn đạt level %1"
		},
		en: {
			syntaxError: "𝙀𝙧𝙧𝙚𝙪𝙧 𝙙𝙚 𝙨𝙮𝙣𝙩𝙖𝙭𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻, 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙯 𝙪𝙣𝙞𝙦𝙪𝙚𝙢𝙚𝙣𝙩 {𝙥𝙣} 𝙤𝙣 𝙤𝙪 {𝙥𝙣} 𝙤𝙛𝙛",
			turnedOn: "𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙢𝙞𝙨𝙚 à 𝙣𝙞𝙫𝙚𝙖𝙪 𝙖𝙘𝙩𝙞𝙫é𝙚 👻",
			turnedOff: "𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙡𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚 👻 𝙙𝙚 𝙢𝙞𝙨𝙚 à 𝙣𝙞𝙫𝙚𝙖𝙪 𝙙é𝙨𝙖𝙘𝙩𝙞𝙫é𝙚",
			notiMessage: "🎉🎉 𝙁é𝙡𝙞𝙘𝙞𝙩𝙖𝙩𝙞𝙤𝙣𝙨 𝙥𝙤𝙪𝙧 𝙖𝙫𝙤𝙞𝙧 𝙖𝙩𝙩𝙚𝙞𝙣𝙩 𝙡𝙚 𝙣𝙞𝙫𝙚𝙖𝙪 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 %1"
		}
	},

	onStart: async function ({ message, event, threadsData, args, getLang }) {
		if (!["on", "off"].includes(args[0]))
			return message.reply(getLang("syntaxError"));
		await threadsData.set(event.threadID, args[0] == "on", "settings.sendRankupMessage");
		return message.reply(args[0] == "on" ? getLang("turnedOn") : getLang("turnedOff"));
	},

	onChat: async function ({ threadsData, usersData, event, message, getLang }) {
		const threadData = await threadsData.get(event.threadID);
		const sendRankupMessage = threadData.settings.sendRankupMessage;
		if (!sendRankupMessage)
			return;
		const { exp } = await usersData.get(event.senderID);
		const currentLevel = expToLevel(exp);
		if (currentLevel > expToLevel(exp - 1)) {
			let customMessage = await threadsData.get(event.threadID, "data.rankup.message");
			let isTag = false;
			let userData;
			const formMessage = {};

			if (customMessage) {
				userData = await usersData.get(event.senderID);
				customMessage = customMessage
					// .replace(/{userName}/g, userData.name)
					.replace(/{oldRank}/g, currentLevel - 1)
					.replace(/{currentRank}/g, currentLevel);
				if (customMessage.includes("{userNameTag}")) {
					isTag = true;
					customMessage = customMessage.replace(/{userNameTag}/g, `@${userData.name}`);
				}
				else {
					customMessage = customMessage.replace(/{userName}/g, userData.name);
				}

				formMessage.body = customMessage;
			}
			else {
				formMessage.body = getLang("notiMessage", currentLevel);
			}

			if (threadData.data.rankup?.attachments?.length > 0) {
				const files = threadData.data.rankup.attachments;
				const attachments = files.reduce((acc, file) => {
					acc.push(drive.getFile(file, "stream"));
					return acc;
				}, []);
				formMessage.attachment = (await Promise.allSettled(attachments))
					.filter(({ status }) => status == "fulfilled")
					.map(({ value }) => value);
			}

			if (isTag) {
				formMessage.mentions = [{
					tag: `@${userData.name}`,
					id: event.senderID
				}];
			}

			message.reply(formMessage);
		}
	}
};
