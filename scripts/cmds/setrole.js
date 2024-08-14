module.exports = {
	config: {
		name: "setrole",
		version: "1.4",
		author: "NTKhang",
		countDown: 5,
		role: 1,
		description: {
			vi: "Chỉnh sửa role của lệnh (những lệnh có role < 2)",
			en: "Edit role of command (commands with role < 2)"
		},
		category: "info",
		guide: {
			vi: "   {pn} <commandName> <new role>: set role mới cho lệnh"
				+ "\n   Với:"
				+ "\n   + <commandName>: tên lệnh"
				+ "\n   + <new role>: role mới của lệnh với:"
				+ "\n   + <new role> = 0: lệnh có thể được sử dụng bởi mọi thành viên trong nhóm"
				+ "\n   + <new role> = 1: lệnh chỉ có thể được sử dụng bởi quản trị viên"
				+ "\n   + <new role> = default: reset role lệnh về mặc định"
				+ "\n   Ví dụ:"
				+ "\n    {pn} rank 1: (lệnh rank sẽ chỉ có thể được sử dụng bởi quản trị viên)"
				+ "\n    {pn} rank 0: (lệnh rank sẽ có thể được sử dụng bởi mọi thành viên trong nhóm)"
				+ "\n    {pn} rank default: reset về mặc định"
				+ "\n—————"
				+ "\n   {pn} [viewrole|view|show]: xem role của những lệnh đã chỉnh sửa",
			en: "   {pn} <commandName> <new role>: set new role for command"
				+ "\n   With:"
				+ "\n   + <commandName>: command name"
				+ "\n   + <new role>: new role of command with:"
				+ "\n   + <new role> = 0: command can be used by all members in group"
				+ "\n   + <new role> = 1: command can be used by admin only"
				+ "\n   + <new role> = default: reset role of command to default"
				+ "\n   Example:"
				+ "\n    {pn} rank 1: (command rank can be used by admin only)"
				+ "\n    {pn} rank 0: (command rank can be used by all members in group)"
				+ "\n    {pn} rank default: reset to default"
				+ "\n—————"
				+ "\n   {pn} [viewrole|view|show]: view role of edited commands"
		}
	},

	langs: {
		vi: {
			noEditedCommand: "✅ Hiện tại nhóm bạn không có lệnh nào được chỉnh sửa role",
			editedCommand: "⚠️ Những lệnh trong nhóm bạn đã chỉnh sửa role:\n",
			noPermission: "❗ Chỉ có quản trị viên mới có thể thực hiện lệnh này",
			commandNotFound: "Không tìm thấy lệnh \"%1\"",
			noChangeRole: "❗ Không thể thay đổi role của lệnh \"%1\"",
			resetRole: "Đã reset role của lệnh \"%1\" về mặc định",
			changedRole: "Đã thay đổi role của lệnh \"%1\" thành %2"
		},
		en: {
			noEditedCommand: "✅ 𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣'𝙖 𝙥𝙖𝙨 𝙙𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 é𝙙𝙞𝙩é𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			editedCommand: "⚠️ 𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙖 é𝙙𝙞𝙩é 𝙙𝙚𝙨 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻:\n",
			noPermission: "❗ 𝙎𝙚𝙪𝙡 𝙡'𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝘾𝙝𝙧𝙞𝙨_𝙨𝙩𝙖𝙧 𝙥𝙚𝙪𝙩 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙧 𝙘𝙚𝙩𝙩𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			commandNotFound: "𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙣𝙤𝙣 𝙩𝙧𝙤𝙪𝙫é𝙚 👻",
			noChangeRole: "❗ 𝙄𝙢𝙥𝙤𝙨𝙨𝙞𝙗𝙡𝙚 𝙙𝙚 𝙘𝙝𝙖𝙣𝙜𝙚𝙧 𝙡𝙚 𝙧ô𝙡𝙚 𝙙𝙪 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙢𝙚𝙣𝙩 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 \"%1\" 👻",
			resetRole: "𝙍é𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙚𝙧 𝙡𝙚 𝙧ô𝙡𝙚 𝙙𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻  « %1 » 𝙥𝙖𝙧 𝙙é𝙛𝙖𝙪𝙩 👻",
			changedRole: "𝙇𝙚 𝙧ô𝙡𝙚 𝙙𝙚 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙖 é𝙩é 𝙢𝙤𝙙𝙞𝙛𝙞é 𝙚𝙣 %2 👻"
		}
	},

	onStart: async function ({ message, event, args, role, threadsData, getLang }) {
		const { commands, aliases } = global.GoatBot;
		const setRole = await threadsData.get(event.threadID, "data.setRole", {});

		if (["view", "viewrole", "show"].includes(args[0])) {
			if (!setRole || Object.keys(setRole).length === 0)
				return message.reply(getLang("noEditedCommand"));
			let msg = getLang("editedCommand");
			for (const cmd in setRole) msg += `- ${cmd} => ${setRole[cmd]}\n`;
			return message.reply(msg);
		}

		let commandName = (args[0] || "").toLowerCase();
		let newRole = args[1];
		if (!commandName || (isNaN(newRole) && newRole !== "default"))
			return message.SyntaxError();
		if (role < 1)
			return message.reply(getLang("noPermission"));

		const command = commands.get(commandName) || commands.get(aliases.get(commandName));
		if (!command)
			return message.reply(getLang("commandNotFound", commandName));
		commandName = command.config.name;
		if (command.config.role > 1)
			return message.reply(getLang("noChangeRole", commandName));

		let Default = false;
		if (newRole === "default" || newRole == command.config.role) {
			Default = true;
			newRole = command.config.role;
		}
		else {
			newRole = parseInt(newRole);
		}

		setRole[commandName] = newRole;
		if (Default)
			delete setRole[commandName];
		await threadsData.set(event.threadID, setRole, "data.setRole");
		message.reply("✅ " + (Default === true ? getLang("resetRole", commandName) : getLang("changedRole", commandName, newRole)));
	}
};
