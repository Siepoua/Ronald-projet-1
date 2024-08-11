const fs = require("fs-extra");
const { utils } = global;

module.exports = {
	config: {
		name: "prefix",
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: "Thay đổi dấu lệnh của bot trong box chat của bạn hoặc cả hệ thống bot (chỉ admin bot)",
		category: "config",
		guide: {
			vi: "   {pn} <new prefix>: thay đổi prefix mới trong box chat của bạn"
				+ "\n   Ví dụ:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: thay đổi prefix mới trong hệ thống bot (chỉ admin bot)"
				+ "\n   Ví dụ:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: thay đổi prefix trong box chat của bạn về mặc định",
			en: "   {pn} <new prefix>: change new prefix in your box chat"
				+ "\n   Example:"
				+ "\n    {pn} #"
				+ "\n\n   {pn} <new prefix> -g: change new prefix in system bot (only admin bot)"
				+ "\n   Example:"
				+ "\n    {pn} # -g"
				+ "\n\n   {pn} reset: change prefix in your box chat to default"
		}
	},

	langs: {
		vi: {
			reset: "Đã reset prefix của bạn về mặc định: %1",
			onlyAdmin: "Chỉ admin mới có thể thay đổi prefix hệ thống bot",
			confirmGlobal: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix của toàn bộ hệ thống bot",
			confirmThisThread: "Vui lòng thả cảm xúc bất kỳ vào tin nhắn này để xác nhận thay đổi prefix trong nhóm chat của bạn",
			successGlobal: "Đã thay đổi prefix hệ thống bot thành: %1",
			successThisThread: "Đã thay đổi prefix trong nhóm chat của bạn thành: %1",
			myPrefix: "🌐 Prefix của hệ thống: %1\n🛸 Prefix của nhóm bạn: %2"
		},
		en: {
			reset: "𝙑𝙤𝙩𝙧𝙚 𝙥𝙧é𝙛𝙞𝙭𝙚 𝙖 é𝙩é 𝙧é𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨é 𝙥𝙖𝙧 𝙙é𝙛𝙖𝙪𝙩 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: %1",
			onlyAdmin: "𝙎𝙚𝙪𝙡 𝙡'𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝘾𝙝𝙧𝙞𝙨 𝙨𝙩𝙖𝙧𝙩 𝙥𝙚𝙪𝙩 𝙢𝙤𝙙𝙞𝙛𝙞𝙚𝙧 𝙡𝙚 𝙥𝙧é𝙛𝙞𝙭𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙡𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚 👻 𝙨𝙮𝙨𝙩è𝙢𝙚",
			confirmGlobal: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙧é𝙖𝙜𝙞𝙧 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙥𝙤𝙪𝙧 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙚𝙧 𝙡𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙢𝙚𝙣𝙩 𝙙𝙚 𝙥𝙧é𝙛𝙞𝙭𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚  𝙡𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚 👻 𝙨𝙮𝙨𝙩è𝙢𝙚",
			confirmThisThread: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙧é𝙖𝙜𝙞𝙧 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙥𝙤𝙪𝙧 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙚𝙧 𝙡𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙢𝙚𝙣𝙩 𝙙𝙚 𝙥𝙧é𝙛𝙞𝙭𝙚 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙗𝙤î𝙩𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻",
			successGlobal: "𝙋𝙧é𝙛𝙞𝙭𝙚 𝙢𝙤𝙙𝙞𝙛𝙞é 𝙙𝙪 𝙗𝙤𝙩 𝙨𝙮𝙨𝙩è𝙢𝙚 𝙚𝙣 👻: %1",
			successThisThread: "𝙅'𝙖𝙞 𝙢𝙤𝙙𝙞𝙛𝙞é 𝙡𝙚 𝙥𝙧é𝙛𝙞𝙭𝙚 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙗𝙤î𝙩𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙚𝙣 👻: %1",
			myPrefix: "👻 𝙋𝙧é𝙛𝙞𝙭𝙚 𝙨𝙮𝙨𝙩è𝙢𝙚: %1\n👻 𝙑𝙤𝙩𝙧𝙚 𝙥𝙧é𝙛𝙞𝙭𝙚 𝙙𝙚 𝙘𝙝𝙖𝙩 𝙚𝙣 𝙗𝙤î𝙩𝙚: %2"
		}
	},

	onStart: async function ({ message, role, args, commandName, event, threadsData, getLang }) {
		if (!args[0])
			return message.SyntaxError();

		if (args[0] == 'reset') {
			await threadsData.set(event.threadID, null, "data.prefix");
			return message.reply(getLang("reset", global.GoatBot.config.prefix));
		}

		const newPrefix = args[0];
		const formSet = {
			commandName,
			author: event.senderID,
			newPrefix
		};

		if (args[1] === "-g")
			if (role < 2)
				return message.reply(getLang("onlyAdmin"));
			else
				formSet.setGlobal = true;
		else
			formSet.setGlobal = false;

		return message.reply(args[1] === "-g" ? getLang("confirmGlobal") : getLang("confirmThisThread"), (err, info) => {
			formSet.messageID = info.messageID;
			global.GoatBot.onReaction.set(info.messageID, formSet);
		});
	},

	onReaction: async function ({ message, threadsData, event, Reaction, getLang }) {
		const { author, newPrefix, setGlobal } = Reaction;
		if (event.userID !== author)
			return;
		if (setGlobal) {
			global.GoatBot.config.prefix = newPrefix;
			fs.writeFileSync(global.client.dirConfig, JSON.stringify(global.GoatBot.config, null, 2));
			return message.reply(getLang("successGlobal", newPrefix));
		}
		else {
			await threadsData.set(event.threadID, newPrefix, "data.prefix");
			return message.reply(getLang("successThisThread", newPrefix));
		}
	},

	onChat: async function ({ event, message, getLang }) {
		if (event.body && event.body.toLowerCase() === "prefix")
			return () => {
				return message.reply(getLang("myPrefix", global.GoatBot.config.prefix, utils.getPrefix(event.threadID)));
			};
	}
};
