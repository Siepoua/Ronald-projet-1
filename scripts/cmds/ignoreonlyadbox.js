module.exports = {
	config: {
		name: "ignoreonlyadbox",
		aliases: ["ignoreadboxonly", "ignoreadminboxonly"],
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Bỏ qua lệnh trong adminonly (khi bật adminonly, các lệnh được thêm từ lệnh này người dùng vẫn có thể sử dụng)",
			en: "Ignore command in adminonly (when turn on adminonly, user can use command added from this command)"
		},
		category: "owner",
		guide: {
			vi: "   {pn} add <commandName>: Thêm lệnh vào danh sách bỏ qua"
				+ "\n   {pn} del <commandName>: Xóa lệnh khỏi danh sách bỏ qua"
				+ "\n   {pn} list: Xem danh sách lệnh bỏ qua",
			en: "   {pn} add <commandName>: Add command to ignore list"
				+ "\n   {pn} del <commandName>: Remove command from ignore list"
				+ "\n   {pn} list: View ignore list"
		}
	},

	langs: {
		vi: {
			missingCommandNameToAdd: "⚠️ Vui lòng nhập tên lệnh bạn muốn thêm vào danh sách bỏ qua",
			missingCommandNameToDelete: "⚠️ Vui lòng nhập tên lệnh bạn muốn xóa khỏi danh sách bỏ qua",
			commandNotFound: "❌ Không tìm thấy lệnh \"%1\" trong danh sách lệnh của bot",
			commandAlreadyInList: "❌ Lệnh \"%1\" đã có trong danh sách bỏ qua",
			commandAdded: "✅ Đã thêm lệnh \"%1\" vào danh sách bỏ qua",
			commandNotInList: "❌ Lệnh \"%1\" không có trong danh sách bỏ qua",
			commandDeleted: "✅ Đã xóa lệnh \"%1\" khỏi danh sách bỏ qua",
			ignoreList: "📑 Danh sách lệnh bỏ qua trong nhóm bạn:\n%1"
		},
		en: {
			missingCommandNameToAdd: "⚠️ 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙖𝙟𝙤𝙪𝙩𝙚𝙧 à 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙'𝙞𝙜𝙣𝙤𝙧é𝙨",
			missingCommandNameToDelete: "⚠️ 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙙𝙚 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙞𝙜𝙣𝙤𝙧é𝙨 👻",
			commandNotFound: "❌ 𝙇𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙣'𝙖 𝙥𝙖𝙨 é𝙩é 𝙩𝙧𝙤𝙪𝙫é𝙚 𝙙𝙖𝙣𝙨 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙙𝙪 𝙗𝙤𝙩 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			commandAlreadyInList: "❌ 𝙇𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙚𝙨𝙩 𝙙é𝙟à 𝙙𝙖𝙣𝙨 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙞𝙜𝙣𝙤𝙧é𝙨 👻",
			commandAdded: "✅ 𝘼𝙟𝙤𝙪𝙩 𝙙𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙥𝙤𝙪𝙧 𝙞𝙜𝙣𝙤𝙧𝙚𝙧 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 👻",
			commandNotInList: "❌ 𝙇𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙣'𝙚𝙨𝙩 𝙥𝙖𝙨 𝙙𝙖𝙣𝙨 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 é𝙡é𝙢𝙚𝙣𝙩𝙨 𝙞𝙜𝙣𝙤𝙧é𝙨 👻",
			commandDeleted: "✅ 𝙎𝙪𝙥𝙥𝙧𝙚𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙙𝙚 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 é𝙡é𝙢𝙚𝙣𝙩𝙨 𝙞𝙜𝙣𝙤𝙧é𝙨 👻",
			ignoreList: "📑 𝙇𝙞𝙨𝙩𝙚 𝙙'𝙞𝙜𝙣𝙤𝙧𝙚𝙧 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻:\n%1"
		}
	},

	onStart: async function ({ args, message, threadsData, getLang, event }) {
		const ignoreList = await threadsData.get(event.threadID, "data.ignoreCommanToOnlyAdminBox", []);
		switch (args[0]) {
			case "add": {
				if (!args[1])
					return message.reply(getLang("missingCommandNameToAdd"));
				const commandName = args[1].toLowerCase();
				const command = global.GoatBot.commands.get(commandName);
				if (!command)
					return message.reply(getLang("commandNotFound", commandName));
				if (ignoreList.includes(commandName))
					return message.reply(getLang("commandAlreadyInList", commandName));
				ignoreList.push(commandName);
				await threadsData.set(event.threadID, ignoreList, "data.ignoreCommanToOnlyAdminBox");
				return message.reply(getLang("commandAdded", commandName));
			}
			case "del":
			case "delete":
			case "remove":
			case "rm":
			case "-d": {
				if (!args[1])
					return message.reply(getLang("missingCommandNameToDelete"));
				const commandName = args[1].toLowerCase();
				const command = global.GoatBot.commands.get(commandName);
				if (!command)
					return message.reply(getLang("commandNotFound", commandName));

				if (!ignoreList.includes(commandName))
					return message.reply(getLang("commandNotInList", commandName));
				ignoreList.splice(ignoreList.indexOf(commandName), 1);
				await threadsData.set(event.threadID, ignoreList, "data.ignoreCommanToOnlyAdminBox");
				return message.reply(getLang("commandDeleted", commandName));
			}
			case "list": {
				return message.reply(getLang("ignoreList", ignoreList.join(", ")));
			}
			default: {
				return message.SyntaxError();
			}
		}
	}
};
