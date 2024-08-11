const { getStreamsFromAttachment } = global.utils;

module.exports = {
	config: {
		name: "notification",
		aliases: ["notify", "noti"],
		version: "1.7",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Gửi thông báo từ admin đến all box",
			en: "Send notification from admin to all box"
		},
		category: "owner",
		guide: {
			en: "{pn} <tin nhắn>"
		},
		envConfig: {
			delayPerGroup: 250
		}
	},

	langs: {
		vi: {
			missingMessage: "Vui lòng nhập tin nhắn bạn muốn gửi đến tất cả các nhóm",
			notification: "Thông báo từ admin bot đến tất cả nhóm chat (không phản hồi tin nhắn này)",
			sendingNotification: "Bắt đầu gửi thông báo từ admin bot đến %1 nhóm chat",
			sentNotification: "✅ Đã gửi thông báo đến %1 nhóm thành công",
			errorSendingNotification: "Có lỗi xảy ra khi gửi đến %1 nhóm:\n%2"
		},
		en: {
			missingMessage: "👻 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙚𝙣𝙫𝙤𝙮𝙚𝙧 à 𝙩𝙤𝙪𝙨 𝙡𝙚𝙨 𝙜𝙧𝙤𝙪𝙥𝙚𝙨 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙫𝙖𝙨 𝙡𝙚 𝙛𝙖𝙞𝙧𝙚",
			notification: "𝙉𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝙘𝙝𝙧𝙞𝙨_𝙨𝙩𝙖𝙧𝙩 à 𝙩𝙤𝙪𝙨 𝙡𝙚𝙨 𝙜𝙧𝙤𝙪𝙥𝙚𝙨 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 (𝙣𝙚 𝙧é𝙥𝙤𝙣𝙙𝙚𝙯 𝙥𝙖𝙨 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚) 👻",
			sendingNotification: "𝘾𝙤𝙢𝙢𝙚𝙣𝙘𝙚𝙧 à 𝙚𝙣𝙫𝙤𝙮𝙚𝙧 𝙙𝙚𝙨 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝘾𝙝𝙧𝙞𝙨 𝙨𝙩𝙖𝙧𝙩 𝙖𝙪𝙭 𝙜𝙧𝙤𝙪𝙥𝙚𝙨 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 %1 👻",
			sentNotification: "✅ 𝙇𝙖 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖 é𝙩é 𝙚𝙣𝙫𝙤𝙮é𝙚 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 à %1 𝙜𝙧𝙤𝙪𝙥𝙚𝙨 👻",
			errorSendingNotification: "𝙐𝙣𝙚 𝙚𝙧𝙧𝙚𝙪𝙧 𝙨'𝙚𝙨𝙩 𝙥𝙧𝙤𝙙𝙪𝙞𝙩𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙡𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚 👻 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡'𝙚𝙣𝙫𝙤𝙞 à %1 𝙜𝙧𝙤𝙪𝙥𝙚𝙨 👻:\n%2"
		}
	},

	onStart: async function ({ message, api, event, args, commandName, envCommands, threadsData, getLang }) {
		const { delayPerGroup } = envCommands[commandName];
		if (!args[0])
			return message.reply(getLang("missingMessage"));
		const formSend = {
			body: `${getLang("notification")}\n────────────────\n${args.join(" ")}`,
			attachment: await getStreamsFromAttachment(
				[
					...event.attachments,
					...(event.messageReply?.attachments || [])
				].filter(item => ["photo", "png", "animated_image", "video", "audio"].includes(item.type))
			)
		};

		const allThreadID = (await threadsData.getAll()).filter(t => t.isGroup && t.members.find(m => m.userID == api.getCurrentUserID())?.inGroup);
		message.reply(getLang("sendingNotification", allThreadID.length));

		let sendSucces = 0;
		const sendError = [];
		const wattingSend = [];

		for (const thread of allThreadID) {
			const tid = thread.threadID;
			try {
				wattingSend.push({
					threadID: tid,
					pending: api.sendMessage(formSend, tid)
				});
				await new Promise(resolve => setTimeout(resolve, delayPerGroup));
			}
			catch (e) {
				sendError.push(tid);
			}
		}

		for (const sended of wattingSend) {
			try {
				await sended.pending;
				sendSucces++;
			}
			catch (e) {
				const { errorDescription } = e;
				if (!sendError.some(item => item.errorDescription == errorDescription))
					sendError.push({
						threadIDs: [sended.threadID],
						errorDescription
					});
				else
					sendError.find(item => item.errorDescription == errorDescription).threadIDs.push(sended.threadID);
			}
		}

		let msg = "";
		if (sendSucces > 0)
			msg += getLang("sentNotification", sendSucces) + "\n";
		if (sendError.length > 0)
			msg += getLang("errorSendingNotification", sendError.reduce((a, b) => a + b.threadIDs.length, 0), sendError.reduce((a, b) => a + `\n - ${b.errorDescription}\n  + ${b.threadIDs.join("\n  + ")}`, ""));
		message.reply(msg);
	}
};
