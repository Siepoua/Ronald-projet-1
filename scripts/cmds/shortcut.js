const { getExtFromUrl, drive, getStreamFromURL } = global.utils;

module.exports = {
	config: {
		name: 'shortcut',
		aliases: ['short'],
		version: '1.14',
		author: 'NTKhang',
		countDown: 5,
		role: 0,
		description: {
			vi: 'Thêm một phím tắt cho tin nhắn trong nhóm chat của bạn',
			en: 'Add a shortcut for your message in group chat'
		},
		category: 'custom',
		guide: {
			vi: '   {pn} add <word> => <content>: thêm một phím tắt cho bạn (có thể gửi kèm hoặc phản hồi một tin nhắn có file để thêm tệp đính kèm)'
				+ '\n   Ví dụ:\n    {pn} add hi => Xin chào mọi người'
				+ '\n'
				+ '\n   {pn} del <word>: xóa một phím tắt'
				+ '\n   Ví dụ:\n    {pn} del hi'
				+ '\n'
				+ '\n   {pn} [remove | reset]: xóa bỏ tất cả các phím tắt trong nhóm chat của bạn'
				+ '\n'
				+ '\n   {pn} list: xem danh sách tất cả các phím tắt của bạn'
				+ '\n   {pn} list start <keyword>: xem danh sách các phím tắt của bạn bắt đầu bằng từ khóa <keyword>'
				+ '\n   {pn} list end <keyword>: xem danh sách các phím tắt của bạn kết thúc bằng từ khóa <keyword>'
				+ '\n   {pn} list contain <keyword>: xem danh sách các phím tắt của bạn có chứa từ khóa <keyword>',
			en: '   {pn} add <word> => <content>: add a shortcut for you (you can send or reply a message with file to add attachment)'
				+ '\n   Example:\n    {pn} add hi => Hello everyone'
				+ '\n'
				+ '\n   {pn} del <word>: delete a shortcut'
				+ '\n   Example:\n    {pn} del hi'
				+ '\n'
				+ '\n   {pn} remove: remove all shortcuts in your group chat'
				+ '\n'
				+ '\n   {pn} list: view your shortcuts list'
				+ '\n   {pn} list start <keyword>: view your shortcuts list start with <keyword>'
				+ '\n   {pn} list end <keyword>: view your shortcuts list end with <keyword>'
				+ '\n   {pn} list contain <keyword>: view your shortcuts list contain <keyword>'
		}
	},

	langs: {
		vi: {
			missingContent: 'Vui lòng nhập nội dung tin nhắn',
			shortcutExists: 'Shortcut %1 đã tồn tại, thả cảm xúc bất kì vào tin nhắn này để thay thế nội dung của shortcut',
			shortcutExistsByOther: 'Shortcut %1 đã được thêm vào bởi thành viên khác, vui lòng thử từ khóa khác',
			added: 'Đã thêm shortcut %1 => %2',
			addedAttachment: ' với %1 tệp đính kèm',
			missingKey: 'Vui lòng nhập từ khóa của shortcut muốn xóa',
			notFound: 'Không tìm thấy shortcut nào cho từ khóa %1 trong nhóm chat của bạn',
			onlyAdmin: 'Chỉ quản trị viên mới có thể xóa shortcut của người khác',
			deleted: 'Đã xóa shortcut %1',
			empty: 'Nhóm chat của bạn chưa thêm shortcut nào',
			message: 'Tin nhắn',
			attachment: 'Tệp đính kèm',
			list: 'Danh sách các shortcut của bạn',
			listWithTypeStart: 'Danh sách các shortcut của nhóm bạn (bắt đầu bằng "%1")',
			listWithTypeEnd: 'Danh sách các shortcut của nhóm bạn (kết thúc bằng "%1")',
			listWithTypeContain: 'Danh sách các shortcut của nhóm bạn (chứa "%1")',
			listWithTypeStartNot: 'Nhóm bạn không có shortcut nào bắt đầu bằng "%1"',
			listWithTypeEndNot: 'Nhóm bạn không có shortcut nào kết thúc bằng "%1"',
			listWithTypeContainNot: 'Nhóm bạn không có shortcut nào chứa "%1"',
			onlyAdminRemoveAll: 'Chỉ quản trị viên mới có thể xóa tất cả các shortcut trong nhóm chat',
			confirmRemoveAll: 'Bạn có chắc muốn xóa tất cả các shortcut trong nhóm chat này không? (thả cảm xúc vào tin nhắn này để xác nhận)',
			removedAll: 'Đã xóa tất cả các shortcut trong nhóm chat của bạn'
		},
		en: {
			missingContent: '𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙪 𝙙𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻',
			shortcutExists: '𝙇𝙚 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 "%1" 𝙚𝙭𝙞𝙨𝙩𝙚 𝙙é𝙟à, 𝙧é𝙖𝙜𝙞𝙨𝙨𝙚𝙯 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙥𝙤𝙪𝙧 𝙧𝙚𝙢𝙥𝙡𝙖𝙘𝙚𝙧 𝙡𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙪 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 👻',
			shortcutExistsByOther: '𝙇𝙚 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 %1 𝙖 é𝙩é 𝙖𝙟𝙤𝙪𝙩é 𝙥𝙖𝙧 𝙪𝙣 𝙖𝙪𝙩𝙧𝙚 𝙢𝙚𝙢𝙗𝙧𝙚, 𝙫𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙚𝙨𝙨𝙖𝙮𝙚𝙧 𝙪𝙣 𝙖𝙪𝙩𝙧𝙚 𝙢𝙤𝙩-𝙘𝙡é 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻',
			added: '𝙍𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 𝙖𝙟𝙤𝙪𝙩é 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 %1 => %2',
			addedAttachment: ' 𝙖𝙫𝙚𝙘 %1 𝙥𝙞è𝙘𝙚 𝙟𝙤𝙞𝙣𝙩𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚(s)',
			missingKey: '𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙢𝙤𝙩 𝙘𝙡é 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 👻',
			notFound: '𝘼𝙪𝙘𝙪𝙣 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 𝙩𝙧𝙤𝙪𝙫é 𝙥𝙤𝙪𝙧 𝙡𝙚 𝙢𝙤𝙩-𝙘𝙡é 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 %1 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻, ',
			onlyAdmin: '𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙙'𝙖𝙪𝙩𝙧𝙚𝙨 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚𝙨 𝙜𝙧â𝙘𝙚 à 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻\'s 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 👻',
			deleted: '𝙍𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 𝙨𝙪𝙥𝙥𝙧𝙞𝙢é 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 %1',
			empty: '𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙣'𝙖 𝙖𝙟𝙤𝙪𝙩é 𝙖𝙪𝙘𝙪𝙣 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻',
			message: '𝙈𝙚𝙨𝙨𝙖𝙜𝙚 👻',
			attachment: '𝙋𝙞è𝙘𝙚 𝙟𝙤𝙞𝙣𝙩𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻',
			list: '𝙑𝙤𝙩𝙧𝙚 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻',
			listWithTypeStart: '𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: 𝙇𝙞𝙨𝙩𝙚 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻\'s 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 (𝙘𝙤𝙢𝙢𝙚𝙣𝙘𝙚𝙯 𝙥𝙖𝙧 👻 "%1")',
			listWithTypeEnd: '𝙇𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 (𝙨𝙚 𝙩𝙚𝙧𝙢𝙞𝙣𝙚 𝙥𝙖𝙧 "%1")',
			listWithTypeContain: '𝙇𝙞𝙨𝙩𝙚 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻\'s 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 (𝙘𝙤𝙣𝙩𝙞𝙚𝙣𝙣𝙚𝙣𝙩 👻 "%1")',
			listWithTypeStartNot: '𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣'𝙖 𝙥𝙖𝙨 𝙙𝙚 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻, 𝙘𝙤𝙢𝙢𝙚𝙣𝙘𝙚𝙯 𝙥𝙖𝙧 👻 "%1"',
			listWithTypeEndNot: '𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣'𝙖 𝙥𝙖𝙨 𝙙𝙚 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻, ç𝙖 𝙨𝙚 𝙩𝙚𝙧𝙢𝙞𝙣𝙚 𝙥𝙖𝙧 👻 "%1"',
			listWithTypeContainNot: '𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣𝙚 𝙘𝙤𝙣𝙩𝙞𝙚𝙣𝙩 𝙖𝙪𝙘𝙪𝙣 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 "%1"',
			onlyAdminRemoveAll: '𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙩𝙤𝙪𝙨 𝙡𝙚𝙨 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙖𝙣𝙨 𝙡𝙖 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻',
			confirmRemoveAll: '𝙀𝙩𝙚𝙨-𝙫𝙤𝙪𝙨 𝙨û𝙧 𝙙𝙚 𝙫𝙤𝙪𝙡𝙤𝙞𝙧 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙩𝙤𝙪𝙨 𝙡𝙚𝙨 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙖𝙣𝙨 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 ? (𝙧é𝙖𝙜𝙞𝙨𝙨𝙚𝙯 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙪𝙧 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙚𝙧)',
			removedAll: '𝙎𝙪𝙥𝙥𝙧𝙚𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙩𝙤𝙪𝙨 𝙡𝙚𝙨 𝙧𝙖𝙘𝙘𝙤𝙪𝙧𝙘𝙞𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻'
		}
	},

	onStart: async function ({ args, threadsData, message, event, role, usersData, getLang, commandName }) {
		const { threadID, senderID, body } = event;
		const shortCutData = await threadsData.get(threadID, 'data.shortcut', []);

		switch (args[0]) {
			case 'add': {
				const split = body.split(' ').slice(2).join(' ').split('=>');
				const attachments = [
					...event.attachments,
					...(event.messageReply?.attachments || [])
				].filter(item => ["photo", 'png', "animated_image", "video", "audio"].includes(item.type));

				let key = split[0];
				let content = split.slice(1).join('=>');

				if (!key || !content && attachments.length === 0)
					return message.reply(getLang('missingContent'));

				key = key.trim().toLowerCase();
				content = (content || "").trim();

				const alreadyExists = shortCutData.find(item => item.key == key);
				if (alreadyExists) {
					if (alreadyExists.author == senderID)
						return message.reply(getLang('shortcutExists', key), async (err, info) => {
							if (err)
								return;
							global.GoatBot.onReaction.set(info.messageID, {
								commandName,
								messageID: info.messageID,
								author: senderID,
								type: 'replaceContent',
								newShortcut: await createShortcut(key, content, attachments, threadID, senderID)
							});
						});
					else
						return message.reply(getLang('shortcutExistsByOther'));
				}

				const newShortcut = await createShortcut(key, content, attachments, threadID, senderID);
				shortCutData.push(newShortcut);
				await threadsData.set(threadID, shortCutData, 'data.shortcut');
				let msg = `${getLang('added', key, content)}\n`;
				if (newShortcut.attachments.length > 0)
					msg += getLang('addedAttachment', newShortcut.attachments.length);
				message.reply(msg);
				break;
			}
			case 'del':
			case 'delete': {
				const key = args.slice(1).join(' ')?.trim()?.toLowerCase();
				if (!key)
					return message.reply(getLang('missingKey'));
				const index = shortCutData.findIndex(x => x.key === key);
				if (index === -1)
					return message.reply(getLang('notFound', key));
				if (senderID != shortCutData[index].author && role < 1)
					return message.reply(getLang('onlyAdmin'));
				shortCutData.splice(index, 1);
				await threadsData.set(threadID, shortCutData, 'data.shortcut');
				message.reply(getLang('deleted', key));
				break;
			}
			case 'list': {
				if (shortCutData.length === 0)
					return message.reply(getLang('empty'));
				let shortCutList = shortCutData;
				let stringType = getLang('list');

				if (args[1]) {
					const type = args[1];
					const keyword = args.slice(2).join(' ');

					if (type == "start") {
						shortCutList = shortCutData.filter(x => x.key.startsWith(keyword));
						stringType = getLang('listWithTypeStart', keyword);
					}
					else if (type == "end") {
						shortCutList = shortCutData.filter(x => x.key.endsWith(keyword));
						stringType = getLang('listWithTypeEnd', keyword);
					}
					else if (["contain", "has", "have", "include", "in"].includes(type)) {
						shortCutList = shortCutData.filter(x => x.key.includes(keyword));
						stringType = getLang('listWithTypeContain', keyword);
					}
					else {
						shortCutList = shortCutData.filter(x => x.key.startsWith(type));
						stringType = getLang('listWithTypeStart', type);
					}

					if (shortCutList.length === 0) {
						if (type == "start")
							return message.reply(getLang('listWithTypeStartNot', keyword));
						else if (type == "end")
							return message.reply(getLang('listWithTypeEndNot', keyword));
						else
							return message.reply(getLang('listWithTypeContainNot', keyword));
					}
				}

				const list = (
					await Promise.all(
						shortCutList.map(async (x, index) => {
							const num = index + 1;
							const keyword = x.key;
							const numMessage = x.content ? 1 : 0;
							const msgContent = numMessage ? `${numMessage} ${getLang("message")}, ` : "";
							const numAttachments = x.attachments.length;
							const msgAttachments = numAttachments ? `${x.attachments.length} ${getLang('attachment')}` : "";
							const authorName = await usersData.getName(x.author);

							return `[${num}] ${keyword} => ${msgContent}${msgAttachments} (${authorName})`;
						})
					)
				).join('\n');
				message.reply(stringType + '\n' + list);
				break;
			}
			case 'remove':
			case '-rm':
			case 'reset':
			case 'rm': {
				if (threadID != senderID && role < 1)
					return message.reply(getLang('onlyAdminRemoveAll'));
				message.reply(getLang('confirmRemoveAll'), (err, info) => {
					if (err)
						return;
					global.GoatBot.onReaction.set(info.messageID, {
						commandName,
						messageID: info.messageID,
						author: senderID,
						type: 'removeAll'
					});
				});
				break;
			}
			default:
				message.SyntaxError();
				break;
		}
	},

	onReaction: async function ({ event, message, threadsData, getLang, Reaction }) {
		const { author } = Reaction;
		const { threadID, userID } = event;
		if (author != userID)
			return;
		if (Reaction.type == 'removeAll') {
			await threadsData.set(threadID, [], "data.shortcut");
			return message.reply(getLang('removedAll'));
		}
		else if (Reaction.type == 'replaceContent') {
			const shortCutData = await threadsData.get(threadID, 'data.shortcut', []);
			const index = shortCutData.findIndex(x => x.key === Reaction.newShortcut.key);
			if (index == -1)
				shortCutData.push(Reaction.newShortcut);
			else
				shortCutData[index] = Reaction.newShortcut;
			await threadsData.set(threadID, shortCutData, 'data.shortcut');
			return message.reply(getLang(
				'added',
				Reaction.newShortcut.key,
				Reaction.newShortcut.content
			)
				+ (Reaction.newShortcut.attachments.length > 0 ? `\n${getLang(
					'addedAttachment',
					Reaction.newShortcut.attachments.length
				)} ` : '')
			);
		}
	},

	onChat: async ({ threadsData, message, event }) => {
		const { threadID } = event;
		const body = (event.body || '').toLowerCase();
		const dataShortcut = await threadsData.get(threadID, 'data.shortcut', []);
		const findShortcut = dataShortcut.find(x => x.key === body);
		let attachments = [];
		if (findShortcut) {
			if (findShortcut.attachments.length > 0) {
				for (const id of findShortcut.attachments)
					attachments.push(drive.getFile(id, 'stream', true));
				attachments = await Promise.all(attachments);
			}

			message.reply({
				body: findShortcut.content,
				attachment: attachments
			});
		}
	}
};

async function createShortcut(key, content, attachments, threadID, senderID) {
	let attachmentIDs = [];
	if (attachments.length > 0)
		attachmentIDs = attachments.map(attachment => new Promise(async (resolve) => {
			const ext = attachment.type == "audio" ? "mp3" : getExtFromUrl(attachment.url);
			const fileName = `${Date.now()}.${ext}`;
			const infoFile = await drive.uploadFile(`shortcut_${threadID}_${senderID}_${fileName}`, attachment.type == "audio" ? "audio/mpeg" : undefined, await getStreamFromURL(attachment.url));
			resolve(infoFile.id);
		}));
	return {
		key: key.trim().toLowerCase(),
		content,
		attachments: await Promise.all(attachmentIDs),
		author: senderID
	};
}
