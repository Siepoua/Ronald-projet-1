module.exports = {
	config: {
		name: "refresh",
		version: "1.2",
		author: "NTKhang",
		countDown: 60,
		role: 0,
		description: {
			vi: "làm mới thông tin nhóm chat hoặc người dùng",
			en: "refresh information of group chat or user"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [thread | group]: làm mới thông tin nhóm chat của bạn"
				+ "\n   {pn} group <threadID>: làm mới thông tin nhóm chat theo ID"
				+ "\n\n   {pn} user: làm mới thông tin người dùng của bạn"
				+ "\n   {pn} user [<userID> | @tag]: làm mới thông tin người dùng theo ID",
			en: "   {pn} [thread | group]: refresh information of your group chat"
				+ "\n   {pn} group <threadID>: refresh information of group chat by ID"
				+ "\n\n   {pn} user: refresh information of your user"
				+ "\n   {pn} user [<userID> | @tag]: refresh information of user by ID"
		}
	},

	langs: {
		vi: {
			refreshMyThreadSuccess: "✅ | Đã làm mới thông tin nhóm chat của bạn thành công!",
			refreshThreadTargetSuccess: "✅ | Đã làm mới thông tin nhóm chat %1 thành công!",
			errorRefreshMyThread: "❌ | Đã xảy ra lỗi không thể làm mới thông tin nhóm chat của bạn",
			errorRefreshThreadTarget: "❌ | Đã xảy ra lỗi không thể làm mới thông tin nhóm chat %1",
			refreshMyUserSuccess: "✅ | Đã làm mới thông tin người dùng của bạn thành công!",
			refreshUserTargetSuccess: "✅ | Đã làm mới thông tin người dùng %1 thành công!",
			errorRefreshMyUser: "❌ | Đã xảy ra lỗi không thể làm mới thông tin người dùng của bạn",
			errorRefreshUserTarget: "❌ | Đã xảy ra lỗi không thể làm mới thông tin người dùng %1"
		},
		en: {
			refreshMyThreadSuccess: "✅ | 👻𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙨𝙚𝙯 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è 👻!",
			refreshThreadTargetSuccess: "✅ | 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙨𝙚𝙧 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 %1 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 👻!",
			errorRefreshMyThread: "❌ | 𝙀𝙧𝙧𝙚𝙪𝙧 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡'𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻",
			errorRefreshThreadTarget: "❌ | 𝙀𝙧𝙧𝙚𝙪𝙧 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡'𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 %1 👻",
			refreshMyUserSuccess: "✅ | 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙨𝙚𝙯 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨!",
			refreshUserTargetSuccess: "✅ | 𝘼𝙘𝙩𝙪𝙖𝙡𝙞𝙨𝙚𝙧 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 %1 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨👻!",
			errorRefreshMyUser: "❌ | 𝙀𝙧𝙧𝙚𝙪𝙧 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡'𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 👻",
			errorRefreshUserTarget: "❌ | 𝙀𝙧𝙧𝙚𝙪𝙧 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡'𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙡'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧👻 %1"
		}
	},

	onStart: async function ({ args, threadsData, message, event, usersData, getLang }) {
		if (args[0] == "group" || args[0] == "thread") {
			const targetID = args[1] || event.threadID;
			try {
				await threadsData.refreshInfo(targetID);
				return message.reply(targetID == event.threadID ? getLang("refreshMyThreadSuccess") : getLang("refreshThreadTargetSuccess", targetID));
			}
			catch (error) {
				return message.reply(targetID == event.threadID ? getLang("errorRefreshMyThread") : getLang("errorRefreshThreadTarget", targetID));
			}
		}
		else if (args[0] == "user") {
			let targetID = event.senderID;
			if (args[1]) {
				if (Object.keys(event.mentions).length)
					targetID = Object.keys(event.mentions)[0];
				else
					targetID = args[1];
			}
			try {
				await usersData.refreshInfo(targetID);
				return message.reply(targetID == event.senderID ? getLang("refreshMyUserSuccess") : getLang("refreshUserTargetSuccess", targetID));
			}
			catch (error) {
				return message.reply(targetID == event.senderID ? getLang("errorRefreshMyUser") : getLang("errorRefreshUserTarget", targetID));
			}
		}
		else
			message.SyntaxError();
	}
};
