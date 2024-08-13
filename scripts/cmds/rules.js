const { getPrefix } = global.utils;

module.exports = {
	config: {
		name: "rules",
		version: "1.6",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Tạo/xem/thêm/sửa/đổi vị trí/xóa nội quy nhóm của bạn",
			en: "Create/view/add/edit/change position/delete group rules of you"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} [add | -a] <nội quy muốn thêm>: thêm nội quy cho nhóm."
				+ "\n   {pn}: xem nội quy của nhóm."
				+ "\n   {pn} [edit | -e] <n> <nội dung sau khi sửa>: chỉnh sửa lại nội quy thứ n."
				+ "\n   {pn} [move | -m] <stt1> <stt2> hoán đổi vị trí của nội quy thứ <stt1> và <stt2> với nhau."
				+ "\n   {pn} [delete | -d] <n>: xóa nội quy theo số thứ tự thứ n."
				+ "\n   {pn} [remove | -r]: xóa tất cả nội quy của nhóm."
				+ "\n"
				+ "\n   Ví dụ:"
				+ "\n    {pn} add không spam"
				+ "\n    {pn} move 1 3"
				+ "\n    {pn} -e 1 không spam tin nhắn trong nhóm"
				+ "\n    {pn} -r",
			en: "   {pn} [add | -a] <rule to add>: add rule for group."
				+ "\n   {pn}: view group rules."
				+ "\n   {pn} [edit | -e] <n> <content after edit>: edit rule number n."
				+ "\n   {pn} [move | -m] <stt1> <stt2> swap position of rule number <stt1> and <stt2>."
				+ "\n   {pn} [delete | -d] <n>: delete rule number n."
				+ "\n   {pn} [remove | -r]: delete all rules of group."
				+ "\n"
				+ "\n   Example:"
				+ "\n    {pn} add don't spam"
				+ "\n    {pn} move 1 3"
				+ "\n    {pn} -e 1 don't spam message in group"
				+ "\n    {pn} -r"
		}
	},

	langs: {
		vi: {
			yourRules: "Nội quy của nhóm bạn\n%1",
			noRules: "Hiện tại nhóm bạn chưa có bất kỳ nội quy nào, để thêm nội quy cho nhóm hãy sử dụng `%1rules add`",
			noPermissionAdd: "Chỉ quản trị viên mới có thể thêm nội quy cho nhóm",
			noContent: "Vui lòng nhập nội dung cho nội quy bạn muốn thêm",
			success: "Đã thêm nội quy mới cho nhóm thành công",
			noPermissionEdit: "Chỉ quản trị viên mới có thể chỉnh sửa nội quy nhóm",
			invalidNumber: "Vui lòng nhập số thứ tự của quy định bạn muốn chỉnh sửa",
			rulesNotExist: "Không tồn tại nội quy thứ %1",
			numberRules: "Hiện tại nhóm bạn chỉ có %1 nội quy được đặt ra",
			noContentEdit: "Vui lòng nhập nội dung bạn muốn thay đổi cho nội quy thứ %1",
			successEdit: "Đã chỉnh sửa nội quy thứ %1 thành: %2",
			noPermissionMove: "Chỉ quản trị viên mới có thể đổi vị trí nội quy của nhóm",
			invalidNumberMove: "Vui lòng nhập số thứ tự của 2 nội quy nhóm bạn muốn chuyển đổi vị trí với nhau",
			sameNumberMove: "Không thể chuyển đổi vị trí của 2 nội quy giống nhau",
			rulesNotExistMove2: "Không tồn tại nội quy thứ %1 và %2",
			successMove: "Đã chuyển đổi vị trí của 2 nội quy thứ %1 và %2 thành công",
			noPermissionDelete: "Chỉ quản trị viên mới có thể xóa nội quy của nhóm",
			invalidNumberDelete: "Vui lòng nhập số thứ tự của nội quy bạn muốn xóa",
			rulesNotExistDelete: "Không tồn tại nội quy thứ %1",
			successDelete: "Đã xóa nội quy thứ %1 của nhóm, nội dung: %2",
			noPermissionRemove: "Chỉ có quản trị viên nhóm mới có thể xoá bỏ tất cả nội quy của nhóm",
			confirmRemove: "⚠️ Thả cảm xúc bất kỳ vào tin nhắn này để xác nhận xóa toàn bộ nội quy của nhóm",
			successRemove: "Đã xóa toàn bộ nội quy của nhóm thành công",
			invalidNumberView: "Vui lòng nhập số thứ tự của nội quy bạn muốn xem"
		},
		en: {
			yourRules: "𝙑𝙤𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻\n%1",
			noRules: "𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣'𝙖 𝙥𝙖𝙨 𝙙𝙚 𝙧è𝙜𝙡𝙚𝙨, 𝙥𝙤𝙪𝙧 𝙖𝙟𝙤𝙪𝙩𝙚𝙧 𝙙𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙪𝙧 𝙡𝙚 𝙜𝙧𝙤𝙪𝙥𝙚, 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙯 `%1𝙧𝙪𝙡𝙚𝙨 𝙖𝙙𝙙 👻`",
			noPermissionAdd: "𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙖𝙟𝙤𝙪𝙩𝙚𝙧 𝙙𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙪𝙧 𝙡𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			noContent: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙪 𝙙𝙚 𝙡𝙖 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙖𝙟𝙤𝙪𝙩𝙚𝙧 👻",
			success: "𝘼𝙟𝙤𝙪𝙩 𝙧é𝙪𝙨𝙨𝙞 𝙙'𝙪𝙣𝙚 𝙣𝙤𝙪𝙫𝙚𝙡𝙡𝙚 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙪𝙧 𝙡𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			noPermissionEdit: "𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙢𝙤𝙙𝙞𝙛𝙞𝙚𝙧 𝙡𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			invalidNumber: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙪𝙢é𝙧𝙤 𝙙𝙚 𝙡𝙖 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙢𝙤𝙙𝙞𝙛𝙞𝙚𝙧 👻",
			rulesNotExist: "𝙇𝙖 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙣𝙪𝙢é𝙧𝙤 %1 𝙣'𝙚𝙭𝙞𝙨𝙩𝙚 𝙥𝙖𝙨",
			numberRules: "𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣'𝙖 𝙦𝙪𝙚 %1 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			noContentEdit: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙘𝙤𝙣𝙩𝙚𝙣𝙪 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙢𝙤𝙙𝙞𝙛𝙞𝙚𝙧 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙣𝙪𝙢é𝙧𝙤 %1 👻",
			successEdit: "𝙍è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙣𝙪𝙢é𝙧𝙤 %1 𝙢𝙤𝙙𝙞𝙛𝙞é𝙚 𝙚𝙣: %2",
			noPermissionMove: "𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙙é𝙥𝙡𝙖𝙘𝙚𝙧 𝙡𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			invalidNumberMove: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 2 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 é𝙘𝙝𝙖𝙣𝙜𝙚𝙧 👻",
			sameNumberMove: "𝙄𝙢𝙥𝙤𝙨𝙨𝙞𝙗𝙡𝙚 𝙙'é𝙘𝙝𝙖𝙣𝙜𝙚𝙧 𝙡𝙖 𝙥𝙤𝙨𝙞𝙩𝙞𝙤𝙣 𝙙𝙚 2 𝙢ê𝙢𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			rulesNotExistMove2: "𝙇𝙚𝙨 𝙣𝙪𝙢é𝙧𝙤𝙨 𝙙𝙚 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻%1 𝙚𝙩 %2 𝙣'𝙚𝙭𝙞𝙨𝙩𝙚𝙣𝙩 𝙥𝙖𝙨",
			successMove: "𝙇𝙖 𝙥𝙤𝙨𝙞𝙩𝙞𝙤𝙣 𝙙𝙚𝙨 𝙣𝙪𝙢é𝙧𝙤𝙨 𝙙𝙚 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻%1 𝙚𝙩 %2 𝙖 é𝙩é é𝙘𝙝𝙖𝙣𝙜é𝙚 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 👻",
			noPermissionDelete: "𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙡𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			invalidNumberDelete: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙪𝙢é𝙧𝙤 𝙙𝙚 𝙡𝙖 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 👻",
			rulesNotExistDelete: "𝙇𝙖 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙣𝙪𝙢é𝙧𝙤 %1 𝙣'𝙚𝙭𝙞𝙨𝙩𝙚 𝙥𝙖𝙨 👻",
			successDelete: "𝙍è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙣𝙪𝙢é𝙧𝙤 %1 𝙨𝙪𝙥𝙥𝙧𝙞𝙢é𝙚 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚, 𝙘𝙤𝙣𝙩𝙚𝙣𝙪 👻: %2",
			noPermissionRemove: "𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙩𝙤𝙪𝙩𝙚𝙨 𝙡𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			confirmRemove: "⚠️ 𝙍é𝙖𝙜𝙞𝙨𝙨𝙚𝙯 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙖𝙫𝙚𝙘 𝙣'𝙞𝙢𝙥𝙤𝙧𝙩𝙚 𝙦𝙪𝙚𝙡 𝙚𝙢𝙤𝙟𝙞 𝙥𝙤𝙪𝙧 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙚𝙧 𝙡𝙖 𝙨𝙪𝙥𝙥𝙧𝙚𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙩𝙤𝙪𝙩𝙚𝙨 𝙡𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			successRemove: "𝙏𝙤𝙪𝙩𝙚𝙨 𝙡𝙚𝙨 𝙧è𝙜𝙡𝙚𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙤𝙣𝙩 é𝙩é 𝙨𝙪𝙥𝙥𝙧𝙞𝙢é𝙚𝙨 𝘾𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨",
			invalidNumberView: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙪𝙢é𝙧𝙤 𝙙𝙚 𝙡𝙖 𝙧è𝙜𝙡𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻  𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙚𝙧 👻"
		}
	},

	onStart: async function ({ role, args, message, event, threadsData, getLang, commandName }) {
		const { threadID, senderID } = event;

		const type = args[0];
		const rulesOfThread = await threadsData.get(threadID, "data.rules", []);
		const totalRules = rulesOfThread.length;

		if (!type) {
			let i = 1;
			const msg = rulesOfThread.reduce((text, rules) => text += `${i++}. ${rules}\n`, "");
			message.reply(msg ? getLang("yourRules", msg) : getLang("noRules", getPrefix(threadID)), (err, info) => {
				global.GoatBot.onReply.set(info.messageID, {
					commandName,
					author: senderID,
					rulesOfThread,
					messageID: info.messageID
				});
			});
		}
		else if (["add", "-a"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionAdd"));
			if (!args[1])
				return message.reply(getLang("noContent"));
			rulesOfThread.push(args.slice(1).join(" "));
			try {
				await threadsData.set(threadID, rulesOfThread, "data.rules");
				message.reply(getLang("success"));
			}
			catch (err) {
				message.err(err);
			}
		}
		else if (["edit", "-e"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionEdit"));
			const stt = parseInt(args[1]);
			if (stt === NaN)
				return message.reply(getLang("invalidNumber"));
			if (!rulesOfThread[stt - 1])
				return message.reply(`${getLang("rulesNotExist", stt)}, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`);
			if (!args[2])
				return message.reply(getLang("noContentEdit", stt));
			const newContent = args.slice(2).join(" ");
			rulesOfThread[stt - 1] = newContent;
			try {
				await threadsData.set(threadID, rulesOfThread, "data.rules");
				message.reply(getLang("successEdit", stt, newContent));
			}
			catch (err) {
				message.err(err);
			}
		}
		else if (["move", "-m"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionMove"));
			const num1 = parseInt(args[1]);
			const num2 = parseInt(args[2]);
			if (isNaN(num1) || isNaN(num2))
				return message.reply(getLang("invalidNumberMove"));
			if (!rulesOfThread[num1 - 1] || !rulesOfThread[num2 - 1]) {
				let msg = !rulesOfThread[num1 - 1] ?
					!rulesOfThread[num2 - 1] ?
						message.reply(getLang("rulesNotExistMove2", num1, num2)) :
						message.reply(getLang("rulesNotExistMove", num1)) :
					message.reply(getLang("rulesNotExistMove", num2));
				msg += `, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`;
				return message.reply(msg);
			}
			if (num1 == num2)
				return message.reply(getLang("sameNumberMove"));

			// swap
			[rulesOfThread[num1 - 1], rulesOfThread[num2 - 1]] = [rulesOfThread[num2 - 1], rulesOfThread[num1 - 1]];
			try {
				await threadsData.set(threadID, rulesOfThread, "data.rules");
				message.reply(getLang("successMove", num1, num2));
			}
			catch (err) {
				message.err(err);
			}
		}
		else if (["delete", "del", "-d"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionDelete"));
			if (!args[1] || isNaN(args[1]))
				return message.reply(getLang("invalidNumberDelete"));
			const rulesDel = rulesOfThread[parseInt(args[1]) - 1];
			if (!rulesDel)
				return message.reply(`${getLang("rulesNotExistDelete", args[1])}, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`);
			rulesOfThread.splice(parseInt(args[1]) - 1, 1);
			await threadsData.set(threadID, rulesOfThread, "data.rules");
			message.reply(getLang("successDelete", args[1], rulesDel));
		}
		else if (["remove", "reset", "-r", "-rm"].includes(type)) {
			if (role < 1)
				return message.reply(getLang("noPermissionRemove"));
			message.reply(getLang("confirmRemove"), (err, info) => {
				global.GoatBot.onReaction.set(info.messageID, {
					commandName: "rules",
					messageID: info.messageID,
					author: senderID
				});
			});
		}
		else if (!isNaN(type)) {
			let msg = "";
			for (const stt of args) {
				const rules = rulesOfThread[parseInt(stt) - 1];
				if (rules)
					msg += `${stt}. ${rules}\n`;
			}
			if (msg == "")
				return message.reply(`${getLang("rulesNotExist", type)}, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`);
			message.reply(msg);
		}
		else {
			message.SyntaxError();
		}
	},

	onReply: async function ({ message, event, getLang, Reply }) {
		const { author, rulesOfThread } = Reply;
		if (author != event.senderID)
			return;
		const num = parseInt(event.body || "");
		if (isNaN(num) || num < 1)
			return message.reply(getLang("invalidNumberView"));
		const totalRules = rulesOfThread.length;
		if (num > totalRules)
			return message.reply(`${getLang("rulesNotExist", num)}, ${totalRules == 0 ? getLang("noRules") : getLang("numberRules", totalRules)}`);
		message.reply(`${num}. ${rulesOfThread[num - 1]}`, () => message.unsend(Reply.messageID));
	},

	onReaction: async ({ threadsData, message, Reaction, event, getLang }) => {
		const { author } = Reaction;
		const { threadID, userID } = event;
		if (author != userID)
			return;
		await threadsData.set(threadID, [], "data.rules");
		message.reply(getLang("successRemove"));
	}
};
