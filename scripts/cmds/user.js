const { getTime } = global.utils;

module.exports = {
	config: {
		name: "user",
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Quản lý người dùng trong hệ thống bot",
			en: "Manage users in bot system"
		},
		category: "owner",
		guide: {
			vi: "   {pn} [find | -f | search | -s] <tên cần tìm>: tìm kiếm người dùng trong dữ liệu bot bằng tên"
				+ "\n"
				+ "\n   {pn} [ban | -b] [<uid> | @tag | reply tin nhắn] <reason>: để cấm người dùng mang id <uid> hoặc người được tag hoặc người gửi của tin nhắn được reply sử dụng bot"
				+ "\n"
				+ "\n   {pn} unban [<uid> | @tag | reply tin nhắn]: để bỏ cấm người dùng sử dụng bot",
			en: "   {pn} [find | -f | search | -s] <name to find>: search for users in bot data by name"
				+ "\n"
				+ "\n   {pn} [ban | -b] [<uid> | @tag | reply message] <reason>: to ban user with id <uid> or tagged user or sender of message replied using bot"
				+ "\n"
				+ "\n   {pn} unban [<uid> | @tag | reply message]: to unban user using bot"
		}
	},

	langs: {
		vi: {
			noUserFound: "❌ Không tìm thấy người dùng nào có tên khớp với từ khóa: \"%1\" trong dữ liệu của bot",
			userFound: "🔎 Tìm thấy %1 người dùng có tên trùng với từ khóa \"%2\" trong dữ liệu của bot:\n%3",
			uidRequired: "Uid của người cần ban không được để trống, vui lòng nhập uid hoặc tag hoặc reply tin nhắn của 1 người theo cú pháp user ban <uid> <lý do>",
			reasonRequired: "Lý do ban người dùng không được để trống, vui lòng nhập uid hoặc tag hoặc reply tin nhắn của 1 người theo cú pháp user ban <uid> <lý do>",
			userHasBanned: "Người dùng mang id [%1 | %2] đã bị cấm từ trước:\n» Lý do: %3\n» Thời gian: %4",
			userBanned: "Đã cấm người dùng mang id [%1 | %2] sử dụng bot.\n» Lý do: %3\n» Thời gian: %4",
			uidRequiredUnban: "Uid của người cần unban không được để trống",
			userNotBanned: "Hiện tại người dùng mang id [%1 | %2] không bị cấm sử dụng bot",
			userUnbanned: "Đã bỏ cấm người dùng mang id [%1 | %2], hiện tại người này có thể sử dụng bot"
		},
		en: {
			noUserFound: "❌ 𝘼𝙪𝙘𝙪𝙣 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙩𝙧𝙤𝙪𝙫é 𝙖𝙫𝙚𝙘 𝙡𝙚 𝙣𝙤𝙢 𝙘𝙤𝙧𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖𝙣𝙩 𝙖𝙪 𝙢𝙤𝙩-𝙘𝙡é : « %1 » 𝙙𝙖𝙣𝙨 𝙡𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙𝙪  𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			userFound: "🔎 𝙐𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 %1 𝙩𝙧𝙤𝙪𝙫é 𝙖𝙫𝙚𝙘 𝙪𝙣 𝙣𝙤𝙢 𝙘𝙤𝙧𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖𝙣𝙩 𝙖𝙪 𝙢𝙤𝙩-𝙘𝙡é « %2 » 𝙙𝙖𝙣𝙨 𝙡𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙𝙪 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻:\n%3",
			uidRequired: "𝙇'𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 𝙙𝙚 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 à 𝙗𝙖𝙣𝙣𝙞𝙧 𝙣𝙚 𝙥𝙚𝙪𝙩 𝙥𝙖𝙨 ê𝙩𝙧𝙚 𝙫𝙞𝙙𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚, 𝙫𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡'𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 𝙤𝙪 𝙡𝙚 𝙩𝙖𝙜 𝙤𝙪 𝙧é𝙥𝙤𝙣𝙙𝙧𝙚 𝙖𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙'𝙪𝙣 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙥𝙖𝙧 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 <𝙗𝙖𝙣𝙣𝙞> <𝙪𝙞𝙙> <𝙧𝙖𝙞𝙨𝙤𝙣>",
			reasonRequired: "𝙇𝙖 𝙧𝙖𝙞𝙨𝙤𝙣 𝙙𝙚 𝙡'𝙞𝙣𝙩𝙚𝙧𝙙𝙞𝙘𝙩𝙞𝙤𝙣 𝙙𝙚 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙣𝙚 𝙥𝙚𝙪𝙩 𝙥𝙖𝙨 ê𝙩𝙧𝙚 𝙫𝙞𝙙𝙚, 𝙫𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡'𝙐𝙄𝘿 𝙤𝙪 𝙡𝙚 𝙩𝙖𝙜 𝙤𝙪 𝙧é𝙥𝙤𝙣𝙙𝙧𝙚 𝙖𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙'𝙞𝙣𝙩𝙚𝙧𝙙𝙞𝙘𝙩𝙞𝙤𝙣 𝙙'𝙪𝙣 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙥𝙖𝙧 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 <𝙪𝙞𝙙> <𝙧𝙖𝙞𝙨𝙤𝙣>",
			userHasBanned: "𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙖𝙫𝙚𝙘 𝙡'𝙄𝘿 [%1 | %2] 𝙖 𝙙é𝙟à é𝙩é 𝙗𝙖𝙣𝙣𝙞:\n» 𝙧𝙖𝙞𝙨𝙤𝙣: %3\n» 𝘿𝙖𝙩𝙚: %4",
			userBanned: "𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙖𝙫𝙚𝙘 𝙡'𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 [%1 | %2] 𝙖 é𝙩é 𝙗𝙖𝙣𝙣𝙞:\n» 𝙧𝙖𝙞𝙨𝙤𝙣: %3\n» 𝘿𝙖𝙩𝙚: %4",
			uidRequiredUnban: "𝙇'𝙐𝙄𝘿 𝙙𝙚 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 à 𝙙é𝙗𝙡𝙤𝙦𝙪𝙚𝙧 𝙣𝙚 𝙥𝙚𝙪𝙩 𝙥𝙖𝙨 ê𝙩𝙧𝙚 𝙫𝙞𝙙𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			userNotBanned: "𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙖𝙫𝙚𝙘 𝙡'𝙄𝘿 [%1 | %2] 𝙣'𝙚𝙨𝙩 𝙥𝙖𝙨 𝙗𝙖𝙣𝙣𝙞 👻",
			userUnbanned: "𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙖𝙫𝙚𝙘 𝙡'𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 [%1 | %2] 𝙖 é𝙩é 𝙙é𝙗𝙡𝙤𝙦𝙪é 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻"
		}
	},

	onStart: async function ({ args, usersData, message, event, prefix, getLang }) {
		const type = args[0];
		switch (type) {
			// find user
			case "find":
			case "-f":
			case "search":
			case "-s": {
				const allUser = await usersData.getAll();
				const keyWord = args.slice(1).join(" ");
				const result = allUser.filter(item => (item.name || "").toLowerCase().includes(keyWord.toLowerCase()));
				const msg = result.reduce((i, user) => i += `\n╭Name: ${user.name}\n╰ID: ${user.userID}`, "");
				message.reply(result.length == 0 ? getLang("noUserFound", keyWord) : getLang("userFound", result.length, keyWord, msg));
				break;
			}
			// ban user
			case "ban":
			case "-b": {
				let uid, reason;
				if (event.type == "message_reply") {
					uid = event.messageReply.senderID;
					reason = args.slice(1).join(" ");
				}
				else if (Object.keys(event.mentions).length > 0) {
					const { mentions } = event;
					uid = Object.keys(mentions)[0];
					reason = args.slice(1).join(" ").replace(mentions[uid], "");
				}
				else if (args[1]) {
					uid = args[1];
					reason = args.slice(2).join(" ");
				}
				else return message.SyntaxError();

				if (!uid)
					return message.reply(getLang("uidRequired"));
				if (!reason)
					return message.reply(getLang("reasonRequired", prefix));
				reason = reason.replace(/\s+/g, ' ');

				const userData = await usersData.get(uid);
				const name = userData.name;
				const status = userData.banned.status;

				if (status)
					return message.reply(getLang("userHasBanned", uid, name, userData.banned.reason, userData.banned.date));
				const time = getTime("DD/MM/YYYY HH:mm:ss");
				await usersData.set(uid, {
					banned: {
						status: true,
						reason,
						date: time
					}
				});
				message.reply(getLang("userBanned", uid, name, reason, time));
				break;
			}
			// unban user
			case "unban":
			case "-u": {
				let uid;
				if (event.type == "message_reply") {
					uid = event.messageReply.senderID;
				}
				else if (Object.keys(event.mentions).length > 0) {
					const { mentions } = event;
					uid = Object.keys(mentions)[0];
				}
				else if (args[1]) {
					uid = args[1];
				}
				else
					return message.SyntaxError();
				if (!uid)
					return message.reply(getLang("uidRequiredUnban"));
				const userData = await usersData.get(uid);
				const name = userData.name;
				const status = userData.banned.status;
				if (!status)
					return message.reply(getLang("userNotBanned", uid, name));
				await usersData.set(uid, {
					banned: {}
				});
				message.reply(getLang("userUnbanned", uid, name));
				break;
			}
			default:
				return message.SyntaxError();
		}
	}
};
