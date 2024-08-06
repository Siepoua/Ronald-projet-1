function sleep(time) {
	return new Promise((resolve) => setTimeout(resolve, time));
}

module.exports = {
	config: {
		name: "filteruser",
		version: "1.6",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		description: {
			vi: "lọc thành viên nhóm theo số tin nhắn hoặc bị khóa acc",
			en: "filter group members by number of messages or locked account"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [<số tin nhắn> | die]",
			en: "   {pn} [<number of messages> | die]"
		}
	},

	langs: {
		vi: {
			needAdmin: "⚠️ | Vui lòng thêm bot làm quản trị viên của box để sử dụng lệnh này",
			confirm: "⚠️ | Bạn có chắc chắn muốn xóa thành viên nhóm có số tin nhắn nhỏ hơn %1 không?\nThả cảm xúc bất kì vào tin nhắn này để xác nhận",
			kickByBlock: "✅ | Đã xóa thành công %1 thành viên bị khóa acc",
			kickByMsg: "✅ | Đã xóa thành công %1 thành viên có số tin nhắn nhỏ hơn %2",
			kickError: "❌ | Đã xảy ra lỗi không thể kick %1 thành viên:\n%2",
			noBlock: "✅ | Không có thành viên nào bị khóa acc",
			noMsg: "✅ | Không có thành viên nào có số tin nhắn nhỏ hơn %1"
		},
		en: {
			needAdmin: "⚠️ | 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙖𝙟𝙤𝙪𝙩𝙚𝙧 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙚𝙣 𝙩𝙖𝙣𝙩 𝙦𝙪'𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙥𝙤𝙪𝙧 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙧 𝙘𝙚𝙩𝙩𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			confirm: "⚠️ | Ê𝙩𝙚𝙨-𝙫𝙤𝙪𝙨 𝙨û𝙧 𝙙𝙚 𝙫𝙤𝙪𝙡𝙤𝙞𝙧 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙡𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙖𝙫𝙚𝙘 𝙢𝙤𝙞𝙣𝙨 𝙙𝙚 %1 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 👻?\n𝙍é𝙖𝙜𝙞𝙨𝙨𝙚𝙯 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙪𝙧 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙚𝙧 👻",
			kickByBlock: "✅ | 𝘾𝙤𝙢𝙥𝙩𝙚 𝙞𝙣𝙙𝙞𝙨𝙥𝙤𝙣𝙞𝙗𝙡𝙚 𝙙𝙚 %1 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖 𝙨𝙪𝙥𝙥𝙧𝙞𝙢é 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 👻",
			kickByMsg: "✅ | %1 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙖𝙮𝙖𝙣𝙩 𝙢𝙤𝙞𝙣𝙨 𝙙𝙚 %2 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙤𝙣𝙩 é𝙩é 𝙨𝙪𝙥𝙥𝙧𝙞𝙢é𝙨 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 👻",
			kickError: "❌ | 𝙐𝙣𝙚 𝙚𝙧𝙧𝙚𝙪𝙧 𝙨'𝙚𝙨𝙩 𝙥𝙧𝙤𝙙𝙪𝙞𝙩𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙚𝙩 𝙣'𝙖 𝙥𝙖𝙨 𝙥𝙪 𝙚𝙭𝙥𝙪𝙡𝙨𝙚𝙧 %1 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 👻",
			noBlock: "✅ | 𝘼𝙪𝙘𝙪𝙣 𝙢𝙚𝙢𝙗𝙧𝙚 𝙣'𝙚𝙨𝙩 𝙫𝙚𝙧𝙧𝙤𝙪𝙞𝙡𝙡é 𝙨𝙚𝙡𝙤𝙣 👻",
			noMsg: "✅ | 𝙄𝙡 𝙣'𝙮 𝙖 𝙖𝙪𝙘𝙪𝙣 𝙢𝙚𝙢𝙗𝙧𝙚 𝙖𝙫𝙚𝙘 𝙢𝙤𝙞𝙣𝙨 𝙙𝙚 %1 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 👻"
		}
	},

	onStart: async function ({ api, args, threadsData, message, event, commandName, getLang }) {
		const threadData = await threadsData.get(event.threadID);
		if (!threadData.adminIDs.includes(api.getCurrentUserID()))
			return message.reply(getLang("needAdmin"));

		if (!isNaN(args[0])) {
			message.reply(getLang("confirm", args[0]), (err, info) => {
				global.GoatBot.onReaction.set(info.messageID, {
					author: event.senderID,
					messageID: info.messageID,
					minimum: Number(args[0]),
					commandName
				});
			});
		}
		else if (args[0] == "die") {
			const threadData = await api.getThreadInfo(event.threadID);
			const membersBlocked = threadData.userInfo.filter(user => user.type !== "User");
			const errors = [];
			const success = [];
			for (const user of membersBlocked) {
				if (user.type !== "User" && !threadData.adminIDs.some(id => id == user.id)) {
					try {
						await api.removeUserFromGroup(user.id, event.threadID);
						success.push(user.id);
					}
					catch (e) {
						errors.push(user.name);
					}
					await sleep(700);
				}
			}

			let msg = "";
			if (success.length > 0)
				msg += `${getLang("kickByBlock", success.length)}\n`;
			if (errors.length > 0)
				msg += `${getLang("kickError", errors.length, errors.join("\n"))}\n`;
			if (msg == "")
				msg += getLang("noBlock");
			message.reply(msg);
		}
		else
			message.SyntaxError();
	},

	onReaction: async function ({ api, Reaction, event, threadsData, message, getLang }) {
		const { minimum = 1, author } = Reaction;
		if (event.userID != author)
			return;
		const threadData = await threadsData.get(event.threadID);
		const botID = api.getCurrentUserID();
		const membersCountLess = threadData.members.filter(member =>
			member.count < minimum
			&& member.inGroup == true
			// ignore bot and admin box
			&& member.userID != botID
			&& !threadData.adminIDs.some(id => id == member.userID)
		);
		const errors = [];
		const success = [];
		for (const member of membersCountLess) {
			try {
				await api.removeUserFromGroup(member.userID, event.threadID);
				success.push(member.userID);
			}
			catch (e) {
				errors.push(member.name);
			}
			await sleep(700);
		}

		let msg = "";
		if (success.length > 0)
			msg += `${getLang("kickByMsg", success.length, minimum)}\n`;
		if (errors.length > 0)
			msg += `${getLang("kickError", errors.length, errors.join("\n"))}\n`;
		if (msg == "")
			msg += getLang("noMsg", minimum);
		message.reply(msg);
	}
};
