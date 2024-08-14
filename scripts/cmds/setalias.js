module.exports = {
	config: {
		name: "setalias",
		version: "1.8",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Thêm tên gọi khác cho 1 lệnh bất kỳ trong nhóm của bạn",
			en: "Add an alias for any command in your group"
		},
		category: "config",
		guide: {
			vi: "  Lệnh dùng để thêm/xóa tên gọi khác cho 1 lệnh nào đó để tiện sử dụng trong nhóm chat của bạn"
				+ "\n   {pn} add <tên gọi khác> <tên lệnh>: dùng để thêm tên gọi khác cho lệnh trong nhóm chat của bạn"
				+ "\n   {pn} add <tên gọi khác> <tên lệnh> -g: dùng để thêm tên gọi khác cho lệnh trong toàn hệ thống (chỉ admin bot)"
				+ "\nVí dụ:\n    {pn} add ctrk customrankcard"
				+ "\n\n   {pn} [remove | rm] <tên gọi khác> <tên lệnh>: dùng để xóa tên gọi khác của lệnh trong nhóm chat của bạn"
				+ "\n   {pn} [remove | rm] <tên gọi khác> <tên lệnh> -g: dùng để xóa tên gọi khác của lệnh trong toàn hệ thống (chỉ admin bot)"
				+ "\nVí dụ:\n    {pn} rm ctrk customrankcard"
				+ "\n\n   {pn} list: dùng để xem danh sách tên gọi khác của các lệnh trong nhóm bạn"
				+ "\n   {pn} list -g: dùng để xem danh sách tên gọi khác của các lệnh trong nhóm bạn",
			en: "  This command is used to add/remove alias for any command in your group"
				+ "\n   {pn} add <alias> <command>: add an alias for the command in your group"
				+ "\n   {pn} add <alias> <command> -g: add an alias for the command in the whole system (only bot admin)"
				+ "\nExample:\n    {pn} add ctrk customrankcard"
				+ "\n\n   {pn} [remove | rm] <alias> <command>: remove an alias for the command in your group"
				+ "\n   {pn} [remove | rm] <alias> <command> -g: remove an alias for the command in the whole system (only bot admin)"
				+ "\nExample:\n    {pn} rm ctrk customrankcard"
				+ "\n\n   {pn} list: list all alias for commands in your group"
				+ "\n   {pn} list -g: list all alias for commands in the whole system"
		}
	},

	langs: {
		vi: {
			commandNotExist: "❌ Lệnh \"%1\" không tồn tại",
			aliasExist: "❌ Tên gọi \"%1\" đã tồn tại cho lệnh \"%2\" trong hệ thống",
			addAliasSuccess: "✅ Đã thêm tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noPermissionAdd: "❌ Bạn không có quyền thêm tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			aliasIsCommand: "❌ Tên gọi \"%1\" trùng với tên lệnh khác trong hệ thống bot",
			aliasExistInGroup: "❌ Tên gọi \"%1\" đã tồn tại cho lệnh \"%2\" trong nhóm này",
			addAliasToGroupSuccess: "✅ Đã thêm tên gọi \"%1\" cho lệnh \"%2\" trong nhóm chat của bạn",
			aliasNotExist: "❌ Tên gọi \"%1\" không tồn tại trong lệnh \"%2\"",
			removeAliasSuccess: "✅ Đã xóa tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noPermissionDelete: "❌ Bạn không có quyền xóa tên gọi \"%1\" cho lệnh \"%2\" trong hệ thống",
			noAliasInGroup: "❌ Lệnh \"%1\" không có tên gọi khác nào trong nhóm của bạn",
			removeAliasInGroupSuccess: "✅ Đã xóa tên gọi \"%1\" khỏi lệnh \"%2\" trong nhóm chat của bạn",
			aliasList: "📜 Danh sách tên gọi khác của các lệnh trong hệ thống:\n%1",
			noAliasInSystem: "⚠️ Hiện tại không có tên gọi nào trong hệ thống",
			notExistAliasInGroup: "⚠️ Nhóm bạn chưa cài đặt tên gọi khác cho lệnh nào cả",
			aliasListInGroup: "📜 Danh sách tên gọi khác của các lệnh trong nhóm chat của bạn:\n%1"
		},
		en: {
			commandNotExist: "❌ 𝙇𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙣'𝙚𝙭𝙞𝙨𝙩𝙚 𝙥𝙖𝙨",
			aliasExist: "❌ 𝙇'𝙖𝙡𝙞𝙖𝙨 « %1 » 𝙚𝙭𝙞𝙨𝙩𝙚 𝙙é𝙟à 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %2 » 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙨𝙮𝙨𝙩è𝙢𝙚 »,
			addAliasSuccess: "✅ 𝙇'𝙖𝙡𝙞𝙖𝙨 « %1 » 𝙚𝙭𝙞𝙨𝙩𝙚 𝙙é𝙟à 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %2 » 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙨𝙮𝙨𝙩è𝙢𝙚 »",
			noPermissionAdd: "❌ 𝙑𝙤𝙪𝙨 𝙣'𝙖𝙫𝙚𝙯 𝙥𝙖𝙨 𝙡'𝙖𝙪𝙩𝙤𝙧𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙'𝙖𝙟𝙤𝙪𝙩𝙚𝙧 𝙡'𝙖𝙡𝙞𝙖𝙨 « %1 » 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %2 » 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙨𝙮𝙨𝙩è𝙢𝙚 👻",
			aliasIsCommand: "❌ 𝙇'𝙖𝙡𝙞𝙖𝙨 "%1" 𝙚𝙨𝙩 𝙞𝙙𝙚𝙣𝙩𝙞𝙦𝙪𝙚 à 𝙪𝙣𝙚 𝙖𝙪𝙩𝙧𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙨𝙮𝙨𝙩è𝙢𝙚 👻",
			aliasExistInGroup: "❌ 𝙇'𝙖𝙡𝙞𝙖𝙨 "%1" 𝙚𝙭𝙞𝙨𝙩𝙚 𝙙é𝙟à 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 "%2" 𝙙𝙖𝙣𝙨 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			addAliasToGroupSuccess: "✅ 𝘼𝙟𝙤𝙪𝙩 𝙙𝙚 𝙡'𝙖𝙡𝙞𝙖𝙨 « %1 » 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚  𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %2 » 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			aliasNotExist: "❌ 𝙇'𝙖𝙡𝙞𝙖𝙨 "%1" 𝙣'𝙚𝙭𝙞𝙨𝙩𝙚 𝙥𝙖𝙨 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 "%2" 👻",
			removeAliasSuccess: "✅ 𝙎𝙪𝙥𝙥𝙧𝙚𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙡'𝙖𝙡𝙞𝙖𝙨 « %1 » 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %2 » 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙨𝙮𝙨𝙩è𝙢𝙚 👻",
			noPermissionDelete: "❌ 𝙑𝙤𝙪𝙨 𝙣'𝙖𝙫𝙚𝙯 𝙥𝙖𝙨 𝙡'𝙖𝙪𝙩𝙤𝙧𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙡'𝙖𝙡𝙞𝙖𝙨 « %1 » 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %2 » 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙨𝙮𝙨𝙩è𝙢𝙚 👻",
			noAliasInGroup: "❌ 𝙇𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙣'𝙖 𝙖𝙪𝙘𝙪𝙣 𝙖𝙪𝙩𝙧𝙚 𝙖𝙡𝙞𝙖𝙨 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			removeAliasInGroupSuccess: "✅ 𝙎𝙪𝙥𝙥𝙧𝙚𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙡'𝙖𝙡𝙞𝙖𝙨 « %1 » 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %2 » 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			aliasList: "📜 𝙇𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙖𝙪𝙩𝙧𝙚𝙨 𝙖𝙡𝙞𝙖𝙨 𝙥𝙤𝙪𝙧 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙨𝙮𝙨𝙩è𝙢𝙚 👻:\n%1",
			noAliasInSystem: "⚠️ 𝙄𝙡 𝙣'𝙮 𝙖 𝙥𝙖𝙨 𝙙'𝙖𝙡𝙞𝙖𝙨 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙨𝙮𝙨𝙩è𝙢𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			notExistAliasInGroup: "⚠️ 𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣'𝙖 𝙙é𝙛𝙞𝙣𝙞 𝙖𝙪𝙘𝙪𝙣 𝙖𝙪𝙩𝙧𝙚 𝙖𝙡𝙞𝙖𝙨 𝙥𝙤𝙪𝙧 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙙𝙚𝙨 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			aliasListInGroup: "📜 𝙇𝙞𝙨𝙩𝙚 𝙙'𝙖𝙪𝙩𝙧𝙚𝙨 𝙖𝙡𝙞𝙖𝙨 𝙥𝙤𝙪𝙧 𝙡𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻:\n%1"
		}
	},

	onStart: async function ({ message, event, args, threadsData, globalData, role, getLang }) {
		const aliasesData = await threadsData.get(event.threadID, "data.aliases", {});

		switch (args[0]) {
			case "add": {
				if (!args[2])
					return message.SyntaxError();
				const commandName = args[2].toLowerCase();
				if (!global.GoatBot.commands.has(commandName))
					return message.reply(getLang("commandNotExist", commandName));
				const alias = args[1].toLowerCase();

				if (args[3] == '-g') {
					if (role > 1) {
						const globalAliasesData = await globalData.get('setalias', 'data', []);
						const globalAliasesExist = globalAliasesData.find(item => item.aliases.includes(alias));
						if (globalAliasesExist)
							return message.reply(getLang("aliasExist", alias, globalAliasesExist.commandName));
						if (global.GoatBot.aliases.has(alias))
							return message.reply(getLang("aliasExist", alias, global.GoatBot.aliases.get(alias)));
						const globalAliasesThisCommand = globalAliasesData.find(aliasData => aliasData.commandName == commandName);
						if (globalAliasesThisCommand)
							globalAliasesThisCommand.aliases.push(alias);
						else
							globalAliasesData.push({
								commandName,
								aliases: [alias]
							});
						await globalData.set('setalias', globalAliasesData, 'data');
						global.GoatBot.aliases.set(alias, commandName);
						return message.reply(getLang("addAliasSuccess", alias, commandName));
					}
					else {
						return message.reply(getLang("noPermissionAdd", alias, commandName));
					}
				}

				if (global.GoatBot.commands.get(alias))
					return message.reply(getLang("aliasIsCommand", alias));
				if (global.GoatBot.aliases.has(alias))
					return message.reply(getLang("aliasExist", alias, global.GoatBot.aliases.get(alias)));
				for (const cmdName in aliasesData)
					if (aliasesData[cmdName].includes(alias))
						return message.reply(getLang("aliasExistInGroup", alias, cmdName));

				const oldAlias = aliasesData[commandName] || [];
				oldAlias.push(alias);
				aliasesData[commandName] = oldAlias;
				await threadsData.set(event.threadID, aliasesData, "data.aliases");
				return message.reply(getLang("addAliasToGroupSuccess", alias, commandName));
			}
			case "remove":
			case "rm": {
				if (!args[2])
					return message.SyntaxError();
				const commandName = args[2].toLowerCase();
				const alias = args[1].toLowerCase();

				if (!global.GoatBot.commands.has(commandName))
					return message.reply(getLang("commandNotExist", commandName));

				if (args[3] == '-g') {
					if (role > 1) {
						const globalAliasesData = await globalData.get('setalias', 'data', []);
						const globalAliasesThisCommand = globalAliasesData.find(aliasData => aliasData.commandName == commandName);
						if (!globalAliasesThisCommand || !globalAliasesThisCommand.aliases.includes(alias))
							return message.reply(getLang("aliasNotExist", alias, commandName));
						globalAliasesThisCommand.aliases.splice(globalAliasesThisCommand.aliases.indexOf(alias), 1);
						await globalData.set('setalias', globalAliasesData, 'data');
						global.GoatBot.aliases.delete(alias);
						return message.reply(getLang("removeAliasSuccess", alias, commandName));
					}
					else {
						return message.reply(getLang("noPermissionDelete", alias, commandName));
					}
				}

				const oldAlias = aliasesData[commandName];
				if (!oldAlias)
					return message.reply(getLang("noAliasInGroup", commandName));
				const index = oldAlias.indexOf(alias);
				if (index === -1)
					return message.reply(getLang("aliasNotExist", alias, commandName));
				oldAlias.splice(index, 1);
				await threadsData.set(event.threadID, aliasesData, "data.aliases");
				return message.reply(getLang("removeAliasInGroupSuccess", alias, commandName));
			}
			case "list": {
				if (args[1] == '-g') {
					const globalAliasesData = await globalData.get('setalias', 'data', []);
					const globalAliases = globalAliasesData.map(aliasData => ({
						commandName: aliasData.commandName,
						aliases: aliasData.aliases.join(', ')
					}));
					return message.reply(
						globalAliases.length ?
							getLang("aliasList", globalAliases.map(alias => `• ${alias.commandName}: ${alias.aliases}`).join('\n')) :
							getLang("noAliasInSystem")
					);
				}

				if (!Object.keys(aliasesData).length)
					return message.reply(getLang("notExistAliasInGroup"));
				const list = Object.keys(aliasesData).map(commandName => `\n• ${commandName}: ${aliasesData[commandName].join(", ")} `);
				return message.reply(getLang("aliasListInGroup", list.join("\n")));
			}
			default: {
				return message.SyntaxError();
			}
		}
	}
};
