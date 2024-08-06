module.exports = {
	config: {
		name: "count",
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Xem số lượng tin nhắn của tất cả thành viên hoặc bản thân (tính từ lúc bot vào nhóm)",
			en: "View the number of messages of all members or yourself (since the bot joined the group)"
		},
		category: "box chat",
		guide: {
			vi: "   {pn}: dùng để xem số lượng tin nhắn của bạn"
				+ "\n   {pn} @tag: dùng để xem số lượng tin nhắn của những người được tag"
				+ "\n   {pn} all: dùng để xem số lượng tin nhắn của tất cả thành viên",
			en: "   {pn}: used to view the number of messages of you"
				+ "\n   {pn} @tag: used to view the number of messages of those tagged"
				+ "\n   {pn} all: used to view the number of messages of all members"
		}
	},

	langs: {
		vi: {
			count: "Số tin nhắn của các thành viên:",
			endMessage: "Những người không có tên trong danh sách là chưa gửi tin nhắn nào.",
			page: "Trang [%1/%2]",
			reply: "Phản hồi tin nhắn này kèm số trang để xem tiếp",
			result: "%1 hạng %2 với %3 tin nhắn",
			yourResult: "Bạn đứng hạng %1 và đã gửi %2 tin nhắn trong nhóm này",
			invalidPage: "Số trang không hợp lệ"
		},
		en: {
			count: "𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙙𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 👻:",
			endMessage: "𝘾𝙚𝙪𝙭 𝙦𝙪𝙞 𝙣'𝙤𝙣𝙩 𝙥𝙖𝙨 𝙙𝙚 𝙣𝙤𝙢 𝙙𝙖𝙣𝙨 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙣'𝙤𝙣𝙩 𝙚𝙣𝙫𝙤𝙮é 𝙖𝙪𝙘𝙪𝙣 𝙢𝙚𝙨𝙨𝙖𝙜𝙚. 👻",
			page: "𝙋𝙖𝙜𝙚 👻 [%1/%2]",
			reply: "𝙍é𝙥𝙤𝙣𝙙𝙚𝙯 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙖𝙫𝙚𝙘 𝙡𝙚 𝙣𝙪𝙢é𝙧𝙤 𝙙𝙚 𝙥𝙖𝙜𝙚 𝙥𝙤𝙪𝙧 𝙚𝙣 𝙫𝙤𝙞𝙧 𝙥𝙡𝙪𝙨 👻",
			result: "%1 𝙧𝙖𝙣𝙜 %2 𝙖𝙫𝙚𝙘 %3 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 👻",
			yourResult: "𝙑𝙤𝙪𝙨 ê𝙩𝙚𝙨 𝙘𝙡𝙖𝙨𝙨é %1 𝙚𝙩 𝙖𝙫𝙚𝙯 𝙚𝙣𝙫𝙤𝙮é %2 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙙𝙖𝙣𝙨 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			invalidPage: "𝙉𝙪𝙢é𝙧𝙤 𝙙𝙚 𝙥𝙖𝙜𝙚 𝙞𝙣𝙫𝙖𝙡𝙞𝙙𝙚 👻"
		}
	},

	onStart: async function ({ args, threadsData, message, event, api, commandName, getLang }) {
		const { threadID, senderID } = event;
		const threadData = await threadsData.get(threadID);
		const { members } = threadData;
		const usersInGroup = (await api.getThreadInfo(threadID)).participantIDs;
		let arraySort = [];
		for (const user of members) {
			if (!usersInGroup.includes(user.userID))
				continue;
			const charac = "️️️️️️️️️️️️️️️️️"; // This character is banned from facebook chat (it is not an empty string)
			arraySort.push({
				name: user.name.includes(charac) ? `Uid: ${user.userID}` : user.name,
				count: user.count,
				uid: user.userID
			});
		}
		let stt = 1;
		arraySort.sort((a, b) => b.count - a.count);
		arraySort.map(item => item.stt = stt++);

		if (args[0]) {
			if (args[0].toLowerCase() == "all") {
				let msg = getLang("count");
				const endMessage = getLang("endMessage");
				for (const item of arraySort) {
					if (item.count > 0)
						msg += `\n${item.stt}/ ${item.name}: ${item.count}`;
				}

				if ((msg + endMessage).length > 19999) {
					msg = "";
					let page = parseInt(args[1]);
					if (isNaN(page))
						page = 1;
					const splitPage = global.utils.splitPage(arraySort, 50);
					arraySort = splitPage.allPage[page - 1];
					for (const item of arraySort) {
						if (item.count > 0)
							msg += `\n${item.stt}/ ${item.name}: ${item.count}`;
					}
					msg += getLang("page", page, splitPage.totalPage)
						+ `\n${getLang("reply")}`
						+ `\n\n${endMessage}`;

					return message.reply(msg, (err, info) => {
						if (err)
							return message.err(err);
						global.GoatBot.onReply.set(info.messageID, {
							commandName,
							messageID: info.messageID,
							splitPage,
							author: senderID
						});
					});
				}
				message.reply(msg);
			}
			else if (event.mentions) {
				let msg = "";
				for (const id in event.mentions) {
					const findUser = arraySort.find(item => item.uid == id);
					msg += `\n${getLang("result", findUser.name, findUser.stt, findUser.count)}`;
				}
				message.reply(msg);
			}
		}
		else {
			const findUser = arraySort.find(item => item.uid == senderID);
			return message.reply(getLang("yourResult", findUser.stt, findUser.count));
		}
	},

	onReply: ({ message, event, Reply, commandName, getLang }) => {
		const { senderID, body } = event;
		const { author, splitPage } = Reply;
		if (author != senderID)
			return;
		const page = parseInt(body);
		if (isNaN(page) || page < 1 || page > splitPage.totalPage)
			return message.reply(getLang("invalidPage"));
		let msg = getLang("count");
		const endMessage = getLang("endMessage");
		const arraySort = splitPage.allPage[page - 1];
		for (const item of arraySort) {
			if (item.count > 0)
				msg += `\n${item.stt}/ ${item.name}: ${item.count}`;
		}
		msg += getLang("page", page, splitPage.totalPage)
			+ "\n" + getLang("reply")
			+ "\n\n" + endMessage;
		message.reply(msg, (err, info) => {
			if (err)
				return message.err(err);
			message.unsend(Reply.messageID);
			global.GoatBot.onReply.set(info.messageID, {
				commandName,
				messageID: info.messageID,
				splitPage,
				author: senderID
			});
		});
	},

	onChat: async ({ usersData, threadsData, event }) => {
		const { senderID, threadID } = event;
		const members = await threadsData.get(threadID, "members");
		const findMember = members.find(user => user.userID == senderID);
		if (!findMember) {
			members.push({
				userID: senderID,
				name: await usersData.getName(senderID),
				nickname: null,
				inGroup: true,
				count: 1
			});
		}
		else
			findMember.count += 1;
		await threadsData.set(threadID, members, "members");
	}

};
