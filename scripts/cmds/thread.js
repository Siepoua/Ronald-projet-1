const { getTime } = global.utils;

module.exports = {
	config: {
		name: "thread",
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Quản lý các nhóm chat trong hệ thống bot",
			en: "Manage group chat in bot system"
		},
		category: "owner",
		guide: {
			vi: "   {pn} [find | -f | search | -s] <tên cần tìm>: tìm kiếm nhóm chat trong dữ liệu bot bằng tên"
				+ "\n   {pn} [find | -f | search | -s] [-j | joined] <tên cần tìm>: tìm kiếm nhóm chat trong dữ liệu mà bot còn tham gia bằng tên"
				+ "\n   {pn} [ban | -b] [<tid> | để trống] <reason>: dùng để cấm nhóm mang id <tid> hoặc nhóm hiện tại sử dụng bot"
				+ "\n   Ví dụ:"
				+ "\n    {pn} ban 3950898668362484 spam bot"
				+ "\n    {pn} ban spam quá nhiều"
				+ "\n\n   {pn} unban [<tid> | để trống] để bỏ cấm nhóm mang id <tid> hoặc nhóm hiện tại"
				+ "\n   Ví dụ:"
				+ "\n    {pn} unban 3950898668362484"
				+ "\n    {pn} unban",
			en: "   {pn} [find | -f | search | -s] <name to find>: search group chat in bot data by name"
				+ "\n   {pn} [find | -f | search | -s] [-j | joined] <name to find>: search group chat in bot data that bot still joined by name"
				+ "\n   {pn} [ban | -b] [<tid> | leave blank] <reason>: use to ban group with id <tid> or current group using bot"
				+ "\n   Example:"
				+ "\n    {pn} ban 3950898668362484 spam bot"
				+ "\n    {pn} ban spam too much"
				+ "\n\n   {pn} unban [<tid> | leave blank] to unban group with id <tid> or current group"
				+ "\n   Example:"
				+ "\n    {pn} unban 3950898668362484"
				+ "\n    {pn} unban"
		}
	},

	langs: {
		vi: {
			noPermission: "Bạn không có quyền sử dụng tính năng này",
			found: "🔎 Tìm thấy %1 nhóm trùng với từ khóa \"%2\" trong dữ liệu của bot:\n%3",
			notFound: "❌ Không tìm thấy nhóm nào có tên khớp với từ khoá: \"%1\" trong dữ liệu của bot",
			hasBanned: "Nhóm mang id [%1 | %2] đã bị cấm từ trước:\n» Lý do: %3\n» Thời gian: %4",
			banned: "Đã cấm nhóm mang id [%1 | %2] sử dụng bot.\n» Lý do: %3\n» Thời gian: %4",
			notBanned: "Hiện tại nhóm mang id [%1 | %2] không bị cấm sử dụng bot",
			unbanned: "Đã bỏ cấm nhóm mang tid [%1 | %2] sử dụng bot",
			missingReason: "Lý do cấm không được để trống",
			info: "» Box ID: %1\n» Tên: %2\n» Ngày tạo data: %3\n» Tổng thành viên: %4\n» Nam: %5 thành viên\n» Nữ: %6 thành viên\n» Tổng tin nhắn: %7%8"
		},
		en: {
			noPermission: "𝙑𝙤𝙪𝙨 𝙣'𝙖𝙫𝙚𝙯 𝙥𝙖𝙨 𝙡'𝙖𝙪𝙩𝙤𝙧𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙'𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙧 𝙘𝙚𝙩𝙩𝙚 𝙛𝙤𝙣𝙘𝙩𝙞𝙤𝙣𝙣𝙖𝙡𝙞𝙩é 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			found: "🔎 %1 𝙜𝙧𝙤𝙪𝙥𝙚 𝙘𝙤𝙧𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖𝙣𝙩 𝙖𝙪 𝙢𝙤𝙩-𝙘𝙡é 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %2 » 𝙩𝙧𝙤𝙪𝙫é 𝙙𝙖𝙣𝙨 𝙡𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻:\n%3",
			notFound: "❌ 𝘼𝙪𝙘𝙪𝙣 𝙜𝙧𝙤𝙪𝙥𝙚 𝙘𝙤𝙧𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖𝙣𝙩 𝙖𝙪 𝙢𝙤𝙩 𝙘𝙡é 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 : « %1 » 𝙣'𝙖 é𝙩é 𝙩𝙧𝙤𝙪𝙫é 𝙙𝙖𝙣𝙨 𝙡𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			hasBanned: "𝙇𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙖𝙫𝙚𝙘 𝙡'𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 [%1 | %2] 𝙖 𝙙é𝙟à é𝙩é 𝙗𝙖𝙣𝙣𝙞 𝙥𝙖𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻:\n» 𝙍𝙖𝙞𝙨𝙤𝙣: %3\n» 𝙏𝙚𝙢𝙥𝙨: %4",
			banned: "𝙂𝙧𝙤𝙪𝙥𝙚 𝙗𝙖𝙣𝙣𝙞 𝙖𝙫𝙚𝙘 𝙡'𝙄𝘿 [%1 | %2] 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙣𝙩 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻.\n» 𝙍𝙖𝙞𝙨𝙤𝙣: %3\n» 𝙏𝙚𝙢𝙥𝙨: %4",
			notBanned: "𝙇𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙖𝙫𝙚𝙘 𝙡'𝙄𝘿 [%1 | %2] 𝙣'𝙚𝙨𝙩 𝙥𝙖𝙨 𝙗𝙖𝙣𝙣𝙞 à 𝙡'𝙖𝙞𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			unbanned: "𝙂𝙧𝙤𝙪𝙥𝙚 𝙣𝙤𝙣 𝙗𝙖𝙣𝙣𝙞 𝙖𝙫𝙚𝙘 𝙩𝙞𝙙 [%1 | %2] 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙣𝙩 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			missingReason: "𝙇𝙖 𝙧𝙖𝙞𝙨𝙤𝙣 𝙙𝙚 𝙡'𝙞𝙣𝙩𝙚𝙧𝙙𝙞𝙘𝙩𝙞𝙤𝙣 𝙣𝙚 𝙥𝙚𝙪𝙩 𝙥𝙖𝙨 ê𝙩𝙧𝙚 𝙫𝙞𝙙𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			info: "» 𝙄𝘿 𝙙𝙚 𝙡𝙖 𝙗𝙤î𝙩𝙚: %1\n» 𝙉𝙤𝙢: %2\n» 𝘿𝙖𝙩𝙚 𝙙𝙚 𝙘𝙧é𝙖𝙩𝙞𝙤𝙣 𝙙𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: %3\n» 𝙉𝙤𝙢𝙗𝙧𝙚 𝙩𝙤𝙩𝙖𝙡 𝙙𝙚 𝙢𝙚𝙢𝙗𝙧𝙚𝙨: %4\n» 𝙈𝙚𝙘: %5 𝙢𝙚𝙢𝙗𝙧𝙚𝙨\n» 𝙈𝙚𝙪𝙛: %6 𝙢𝙚𝙢𝙗𝙧𝙚𝙨\n» 𝙉𝙤𝙢𝙗𝙧𝙚 𝙩𝙤𝙩𝙖𝙡 𝙙𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨: %7%8"
		}
	},

	onStart: async function ({ args, threadsData, message, role, event, getLang }) {
		const type = args[0];

		switch (type) {
			// find thread
			case "find":
			case "search":
			case "-f":
			case "-s": {
				if (role < 2)
					return message.reply(getLang("noPermission"));
				let allThread = await threadsData.getAll();
				let keyword = args.slice(1).join(" ");
				if (['-j', '-join'].includes(args[1])) {
					allThread = allThread.filter(thread => thread.members.some(member => member.userID == global.GoatBot.botID && member.inGroup));
					keyword = args.slice(2).join(" ");
				}
				const result = allThread.filter(item => item.threadID.length > 15 && (item.threadName || "").toLowerCase().includes(keyword.toLowerCase()));
				const resultText = result.reduce((i, thread) => i += `\n╭Name: ${thread.threadName}\n╰ID: ${thread.threadID}`, "");
				let msg = "";
				if (result.length > 0)
					msg += getLang("found", result.length, keyword, resultText);
				else
					msg += getLang("notFound", keyword);
				message.reply(msg);
				break;
			}
			// ban thread
			case "ban":
			case "-b": {
				if (role < 2)
					return message.reply(getLang("noPermission"));
				let tid, reason;
				if (!isNaN(args[1])) {
					tid = args[1];
					reason = args.slice(2).join(" ");
				}
				else {
					tid = event.threadID;
					reason = args.slice(1).join(" ");
				}
				if (!tid)
					return message.SyntaxError();
				if (!reason)
					return message.reply(getLang("missingReason"));
				reason = reason.replace(/\s+/g, ' ');
				const threadData = await threadsData.get(tid);
				const name = threadData.threadName;
				const status = threadData.banned.status;

				if (status)
					return message.reply(getLang("hasBanned", tid, name, threadData.banned.reason, threadData.banned.date));
				const time = getTime("DD/MM/YYYY HH:mm:ss");
				await threadsData.set(tid, {
					banned: {
						status: true,
						reason,
						date: time
					}
				});
				return message.reply(getLang("banned", tid, name, reason, time));
			}
			// unban thread
			case "unban":
			case "-u": {
				if (role < 2)
					return message.reply(getLang("noPermission"));
				let tid;
				if (!isNaN(args[1]))
					tid = args[1];
				else
					tid = event.threadID;
				if (!tid)
					return message.SyntaxError();

				const threadData = await threadsData.get(tid);
				const name = threadData.threadName;
				const status = threadData.banned.status;

				if (!status)
					return message.reply(getLang("notBanned", tid, name));
				await threadsData.set(tid, {
					banned: {}
				});
				return message.reply(getLang("unbanned", tid, name));
			}
			// info thread
			case "info":
			case "-i": {
				let tid;
				if (!isNaN(args[1]))
					tid = args[1];
				else
					tid = event.threadID;
				if (!tid)
					return message.SyntaxError();
				const threadData = await threadsData.get(tid);
				const createdDate = getTime(threadData.createdAt, "DD/MM/YYYY HH:mm:ss");
				const valuesMember = Object.values(threadData.members).filter(item => item.inGroup);
				const totalBoy = valuesMember.filter(item => item.gender == "MALE").length;
				const totalGirl = valuesMember.filter(item => item.gender == "FEMALE").length;
				const totalMessage = valuesMember.reduce((i, item) => i += item.count, 0);
				const infoBanned = threadData.banned.status ?
					`\n- Banned: ${threadData.banned.status}`
					+ `\n- Reason: ${threadData.banned.reason}`
					+ `\n- Time: ${threadData.banned.date}` :
					"";
				const msg = getLang("info", threadData.threadID, threadData.threadName, createdDate, valuesMember.length, totalBoy, totalGirl, totalMessage, infoBanned);
				return message.reply(msg);
			}
			default:
				return message.SyntaxError();
		}
	}
};
