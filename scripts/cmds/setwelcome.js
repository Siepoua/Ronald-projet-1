const { drive, getStreamFromURL, getExtFromUrl, getTime } = global.utils;

module.exports = {
	config: {
		name: "setwelcome",
		aliases: ["setwc"],
		version: "1.7",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		description: {
			vi: "Chỉnh sửa nội dung tin nhắn chào mừng thành viên mới tham gia vào nhóm chat của bạn",
			en: "Edit welcome message content when new member join your group chat"
		},
		category: "custom",
		guide: {
			vi: {
				body: "   {pn} text [<nội dung> | reset]: chỉnh sửa nội dung văn bản hoặc reset về mặc định, với những shortcut có sẵn:"
					+ "\n  + {userName}: tên của thành viên mới"
					+ "\n  + {userNameTag}: tên của thành viên mới (tag)"
					+ "\n  + {boxName}:  tên của nhóm chat"
					+ "\n  + {multiple}: bạn || các bạn"
					+ "\n  + {session}:  buổi trong ngày"
					+ "\n\n   Ví dụ:"
					+ "\n    {pn} text Hello {userName}, welcome to {boxName}, chúc {multiple} một ngày mới vui vẻ"
					+ "\n"
					+ "\n   Reply (phản hồi) hoặc gửi kèm một tin nhắn có file với nội dung {pn} file: để thêm tệp đính kèm vào tin nhắn chào mừng (ảnh, video, audio)"
					+ "\n\n   Ví dụ:"
					+ "\n    {pn} file reset: xóa gửi file",
				attachment: {
					[`${__dirname}/assets/guide/setwelcome/setwelcome_vi_1.png`]: "https://i.ibb.co/vd6bQrW/setwelcome-vi-1.png"
				}
			},
			en: {
				body: "   {pn} text [<content> | reset]: edit text content or reset to default, with some shortcuts:"
					+ "\n  + {userName}: new member name"
					+ "\n  + {userNameTag}: new member name (tag)"
					+ "\n  + {boxName}:  group chat name"
					+ "\n  + {multiple}: you || you guys"
					+ "\n  + {session}:  session in day"
					+ "\n\n   Example:"
					+ "\n    {pn} text Hello {userName}, welcome to {boxName}, have a nice day {multiple}"
					+ "\n"
					+ "\n   Reply (phản hồi) or send a message with file with content {pn} file: to add file attachments to welcome message (image, video, audio)"
					+ "\n\n   Example:"
					+ "\n    {pn} file reset: delete file attachments",
				attachment: {
					[`${__dirname}/assets/guide/setwelcome/setwelcome_en_1.png`]: "https://i.ibb.co/vsCz0ks/setwelcome-en-1.png"
				}
			}
		}
	},

	langs: {
		vi: {
			turnedOn: "Đã bật chức năng chào mừng thành viên mới",
			turnedOff: "Đã tắt chức năng chào mừng thành viên mới",
			missingContent: "Vui lùng nhập nội dung tin nhắn",
			edited: "Đã chỉnh sửa nội dung tin nhắn chào mừng của nhóm bạn thành: %1",
			reseted: "Đã reset nội dung tin nhắn chào mừng",
			noFile: "Không có tệp đính kèm tin nhắn chào mừng nào để xóa",
			resetedFile: "Đã reset tệp đính kèm thành công",
			missingFile: "Hãy phản hồi tin nhắn này kèm file ảnh/video/audio",
			addedFile: "Đã thêm %1 tệp đính kèm vào tin nhắn chào mừng của nhóm bạn"
		},
		en: {
			turnedOn: "𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 à é𝙩𝙖𝙞𝙩 𝙖𝙘𝙩𝙞𝙫é 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			turnedOff: "𝙈𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 à é𝙩𝙖𝙞𝙩 𝙙é𝙨𝙖𝙘𝙩𝙞𝙫é 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			missingContent: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙪 𝙙𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			edited: "𝘾𝙤𝙣𝙩𝙚𝙣𝙪 𝙙𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 𝙢𝙤𝙙𝙞𝙛𝙞é 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙥𝙤𝙪𝙧 👻: %1",
			reseted: "𝘾𝙤𝙣𝙩𝙚𝙣𝙪 𝙙𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 𝙧é𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨é 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚",
			noFile: "𝘼𝙪𝙘𝙪𝙣𝙚 𝙥𝙞è𝙘𝙚 𝙟𝙤𝙞𝙣𝙩𝙚 à 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			resetedFile: "𝙇𝙚𝙨 𝙥𝙞è𝙘𝙚𝙨 𝙟𝙤𝙞𝙣𝙩𝙚𝙨 𝙤𝙣𝙩 é𝙩é 𝙧é𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨é𝙚𝙨 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			missingFile: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙧é𝙥𝙤𝙣𝙙𝙧𝙚 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙖𝙫𝙚𝙘 𝙪𝙣 𝙛𝙞𝙘𝙝𝙞𝙚𝙧 𝙞𝙢𝙖𝙜𝙚/𝙫𝙞𝙙é𝙤/𝙖𝙪𝙙𝙞𝙤 𝙚𝙣 𝙢𝙤𝙙𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚 👻",
			addedFile: "𝘼𝙟𝙤𝙪𝙩 𝙙𝙚 %1 𝙥𝙞è𝙘𝙚𝙨 𝙟𝙤𝙞𝙣𝙩𝙚𝙨 à 𝙫𝙤𝙩𝙧𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙪𝙚 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙚𝙣 𝙢𝙤𝙙𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚 👻"
		}
	},

	onStart: async function ({ args, threadsData, message, event, commandName, getLang }) {
		const { threadID, senderID, body } = event;
		const { data, settings } = await threadsData.get(threadID);

		switch (args[0]) {
			case "text": {
				if (!args[1])
					return message.reply(getLang("missingContent"));
				else if (args[1] == "reset")
					delete data.welcomeMessage;
				else
					data.welcomeMessage = body.slice(body.indexOf(args[0]) + args[0].length).trim();
				await threadsData.set(threadID, {
					data
				});
				message.reply(data.welcomeMessage ? getLang("edited", data.welcomeMessage) : getLang("reseted"));
				break;
			}
			case "file": {
				if (args[1] == "reset") {
					const { welcomeAttachment } = data;
					if (!welcomeAttachment)
						return message.reply(getLang("noFile"));
					try {
						await Promise.all(data.welcomeAttachment.map(fileId => drive.deleteFile(fileId)));
						delete data.welcomeAttachment;
					}
					catch (e) { }
					await threadsData.set(threadID, {
						data
					});
					message.reply(getLang("resetedFile"));
				}
				else if (event.attachments.length == 0 && (!event.messageReply || event.messageReply.attachments.length == 0))
					return message.reply(getLang("missingFile"), (err, info) => {
						global.GoatBot.onReply.set(info.messageID, {
							messageID: info.messageID,
							author: senderID,
							commandName
						});
					});
				else {
					saveChanges(message, event, threadID, senderID, threadsData, getLang);
				}
				break;
			}
			case "on":
			case "off": {
				settings.sendWelcomeMessage = args[0] == "on";
				await threadsData.set(threadID, { settings });
				message.reply(settings.sendWelcomeMessage ? getLang("turnedOn") : getLang("turnedOff"));
				break;
			}
			default:
				message.SyntaxError();
				break;
		}
	},

	onReply: async function ({ event, Reply, message, threadsData, getLang }) {
		const { threadID, senderID } = event;
		if (senderID != Reply.author)
			return;

		if (event.attachments.length == 0 && (!event.messageReply || event.messageReply.attachments.length == 0))
			return message.reply(getLang("missingFile"));
		saveChanges(message, event, threadID, senderID, threadsData, getLang);
	}
};

async function saveChanges(message, event, threadID, senderID, threadsData, getLang) {
	const { data } = await threadsData.get(threadID);
	const attachments = [...event.attachments, ...(event.messageReply?.attachments || [])].filter(item => ["photo", 'png', "animated_image", "video", "audio"].includes(item.type));
	if (!data.welcomeAttachment)
		data.welcomeAttachment = [];

	await Promise.all(attachments.map(async attachment => {
		const { url } = attachment;
		const ext = getExtFromUrl(url);
		const fileName = `${getTime()}.${ext}`;
		const infoFile = await drive.uploadFile(`setwelcome_${threadID}_${senderID}_${fileName}`, await getStreamFromURL(url));
		data.welcomeAttachment.push(infoFile.id);
	}));

	await threadsData.set(threadID, {
		data
	});
	message.reply(getLang("addedFile", attachments.length));
}
