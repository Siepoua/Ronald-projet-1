const { getTime } = global.utils;

module.exports = {
	config: {
		name: "warn",
		version: "1.8",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "cảnh cáo thành viên trong nhóm, đủ 3 lần ban khỏi box",
			en: "warn member in group, if they have 3 warns, they will be banned"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} @tag <lý do>: dùng cảnh cáo thành viên"
				+ "\n   {pn} list: xem danh sách những thành viên đã bị cảnh cáo"
				+ "\n   {pn} listban: xem danh sách những thành viên đã bị cảnh cáo đủ 3 lần và bị ban khỏi box"
				+ "\n   {pn} info [@tag | <uid> | reply | để trống]: xem thông tin cảnh cáo của người được tag hoặc uid hoặc bản thân"
				+ "\n   {pn} unban [@tag | <uid> | reply | để trống]: gỡ ban thành viên, đồng thời gỡ tất cả cảnh cáo của thành viên đó"
				+ "\n   {pn} unwarn [@tag | <uid> | reply | để trống] [<số thứ tự> | để trống]: gỡ cảnh cáo thành viên bằng uid và số thứ tự cảnh cáo, nếu để trống sẽ gỡ cảnh cáo cuối cùng"
				+ "\n   {pn} reset: reset tất cả dữ liệu cảnh cáo"
				+ "\n⚠️ Cần set quản trị viên cho bot để bot tự kick thành viên bị ban",
			en: "   {pn} @tag <reason>: warn member"
				+ "\n   {pn} list: view list of warned members"
				+ "\n   {pn} listban: view list of banned members"
				+ "\n   {pn} info [@tag | <uid> | reply | leave blank]: view warning information of tagged person or uid or yourself"
				+ "\n   {pn} unban [@tag | <uid> | reply | leave blank]: unban member, at the same time remove all warnings of that member"
				+ "\n   {pn} unwarn [@tag | <uid> | reply | leave blank] [<number> | leave blank]: remove warning of member by uid and number of warning, if leave blank will remove the last warning"
				+ "\n   {pn} reset: reset all warn data"
				+ "\n⚠️ You need to set admin for bot to auto kick banned members"
		}
	},

	langs: {
		vi: {
			list: "Danh sách những thành viên bị cảnh cáo:\n%1\n\nĐể xem chi tiết những lần cảnh cáo hãy dùng lệnh \"%2warn info  [@tag | <uid> | để trống]\": để xem thông tin cảnh cáo của người được tag hoặc uid hoặc bản thân",
			listBan: "Danh sách những thành viên bị cảnh cáo đủ 3 lần và ban khỏi box:\n%1",
			listEmpty: "Nhóm bạn chưa có thành viên nào bị cảnh cáo",
			listBanEmpty: "Nhóm bạn chưa có thành viên nào bị ban khỏi box",
			invalidUid: "Vui lòng nhập uid hợp lệ của người bạn muốn xem thông tin",
			noData: "Không có dữ liệu nào",
			noPermission: "❌ Chỉ quản trị viên nhóm mới có thể unban thành viên bị ban khỏi box",
			invalidUid2: "⚠️ Vui lòng nhập uid hợp lệ của người muốn gỡ ban",
			notBanned: "⚠️ Người dùng mang id %1 chưa bị ban khỏi box của bạn",
			unbanSuccess: "✅ Đã gỡ ban thành viên [%1 | %2], hiện tại người này có thể tham gia box chat của bạn",
			noPermission2: "❌ Chỉ quản trị viên nhóm mới có thể gỡ cảnh cáo của thành viên trong nhóm",
			invalidUid3: "⚠️ Vui lòng nhập uid hoặc tag người muốn gỡ cảnh cáo",
			noData2: "⚠️ Người dùng mang id %1 chưa có dữ liệu cảnh cáo",
			notEnoughWarn: "❌ Người dùng %1 chỉ có %2 lần cảnh cáo",
			unwarnSuccess: "✅ Đã gỡ lần cảnh cáo thứ %1 của thành viên [%2 | %3] thành công",
			noPermission3: "❌ Chỉ quản trị viên nhóm mới có thể reset dữ liệu cảnh cáo",
			resetWarnSuccess: "✅ Đã reset dữ liệu cảnh cáo thành công",
			noPermission4: "❌ Chỉ quản trị viên nhóm mới có thể cảnh cáo thành viên trong nhóm",
			invalidUid4: "⚠️ Bạn cần phải tag hoặc phản hồi tin nhắn của người muốn cảnh cáo",
			warnSuccess: "⚠️ Đã cảnh cáo thành viên %1 lần %2\n- Uid: %3\n- Lý do: %4\n- Date Time: %5\nThành viên này đã bị cảnh cáo đủ 3 lần và bị ban khỏi box, để gỡ ban hãy sử dụng lệnh \"%6warn unban <uid>\" (với uid là uid của người muốn gỡ ban)",
			noPermission5: "⚠️ Bot cần quyền quản trị viên để kick thành viên bị ban",
			warnSuccess2: "⚠️ Đã cảnh cáo thành viên %1 lần %2\n- Uid: %3\n- Lý do: %4\n- Date Time: %5\nNếu vi phạm %6 lần nữa người này sẽ bị ban khỏi box",
			hasBanned: "⚠️ Thành viên sau đã bị cảnh cáo đủ 3 lần trước đó và bị ban khỏi box:\n%1",
			failedKick: "⚠️ Đã xảy ra lỗi khi kick những thành viên sau:\n%1",
			userNotInGroup: "⚠️ Người dùng \"%1\" hiện tại không có trong nhóm của bạn"
		},
		en: {
			list: "𝙇𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙦𝙪𝙞 𝙤𝙣𝙩 é𝙩é 𝙖𝙫𝙚𝙧𝙩𝙞𝙨 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻:\n%1\n\n𝙋𝙤𝙪𝙧 𝙖𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙡𝙚𝙨 𝙙é𝙩𝙖𝙞𝙡𝙨 𝙙𝙚𝙨 𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩𝙨, 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙯 𝙡𝙚 👻 \"%2warn info [@tag | <uid> | leave blank]\" 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: 𝙥𝙤𝙪𝙧 𝙖𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙙'𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙩𝙖𝙜𝙪é𝙚 𝙤𝙪 𝙙𝙚 𝙡'𝙪𝙞𝙙 𝙤𝙪 𝙙𝙚 𝙫𝙤𝙪𝙨-𝙢ê𝙢𝙚",
			listBan: "𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: 𝙇𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙦𝙪𝙞 𝙤𝙣𝙩 é𝙩é 𝙖𝙫𝙚𝙧𝙩𝙞𝙨 3 𝙛𝙤𝙞𝙨 𝙚𝙩 𝙗𝙖𝙣𝙣𝙞𝙨 𝙙𝙚 𝙡𝙖 𝙗𝙤𝙭:\n%1",
			listEmpty: "𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣𝙚 𝙘𝙤𝙢𝙥𝙩𝙚 𝙖𝙪𝙘𝙪𝙣 𝙢𝙚𝙢𝙗𝙧𝙚 𝙖𝙫𝙚𝙧𝙩𝙞 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			listBanEmpty: "𝙑𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙣'𝙖 𝙖𝙪𝙘𝙪𝙣 𝙢𝙚𝙢𝙗𝙧𝙚 𝙗𝙖𝙣𝙣𝙞 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙡𝙖 𝙗𝙤𝙭",
			invalidUid: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙪𝙣 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙫𝙖𝙡𝙞𝙙𝙚 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙙𝙤𝙣𝙩 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙘𝙤𝙣𝙨𝙪𝙡𝙩𝙚𝙧 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			noData: "𝘼𝙪𝙘𝙪𝙣𝙚 𝙙𝙤𝙣𝙣é𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			noPermission: "❌ 𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙙é𝙗𝙡𝙤𝙦𝙪𝙚𝙧 𝙡𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙗𝙖𝙣𝙣𝙞𝙨 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻  𝙙𝙚 𝙡𝙖 𝙗𝙤î𝙩𝙚 👻",
			invalidUid2: "⚠️ 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙪𝙣 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙫𝙖𝙡𝙞𝙙𝙚 𝙥𝙤𝙪𝙧 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙙é𝙗𝙡𝙤𝙦𝙪𝙚𝙧 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			notBanned: "⚠️ 𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙖𝙫𝙚𝙘 𝙡'𝙄𝘿 %1 𝙣'𝙖 𝙥𝙖𝙨 é𝙩é 𝙗𝙖𝙣𝙣𝙞 𝘾𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙫𝙤𝙩𝙧𝙚 𝙗𝙤î𝙩𝙚",
			unbanSuccess: "✅ 𝙈𝙚𝙢𝙗𝙧𝙚 [%1 | %2] 𝙗𝙖𝙣𝙣𝙞 𝙥𝙖𝙧 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨, 𝙘𝙚𝙩𝙩𝙚 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙥𝙚𝙪𝙩 𝙖𝙘𝙩𝙪𝙚𝙡𝙡𝙚𝙢𝙚𝙣𝙩 𝙧𝙚𝙟𝙤𝙞𝙣𝙙𝙧𝙚 𝙫𝙤𝙩𝙧𝙚 𝙗𝙤î𝙩𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻",
			noPermission2: "❌ 𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙡𝙚𝙨 𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩𝙨 𝙙𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			invalidUid3: "⚠️ 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙪𝙣 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙖𝙣𝙩 𝙤𝙪 𝙞𝙙𝙚𝙣𝙩𝙞𝙛𝙞𝙚𝙧 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙙𝙤𝙣𝙩 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙡'𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩 𝙥𝙖𝙧 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			noData2: "⚠️ 𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙖𝙫𝙚𝙘 𝙡'𝙄𝘿 %1 𝙣'𝙖 𝙥𝙖𝙨 𝙙𝙚 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙'𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩 𝙥𝙖𝙧 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			notEnoughWarn: "❌ 𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 %1 𝙣'𝙖 𝙦𝙪𝙚 %2 𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩𝙨 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			unwarnSuccess: "✅ 𝙇'𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩 %1 𝙙𝙪 𝙢𝙚𝙢𝙗𝙧𝙚 𝙖 é𝙩é 𝙨𝙪𝙥𝙥𝙧𝙞𝙢é 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 [%2 | %3]",
			noPermission3: "❌ 𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙧é𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙚𝙧 𝙡𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙'𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			resetWarnSuccess: "✅ 𝙍é𝙞𝙣𝙞𝙩𝙞𝙖𝙡𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙧é𝙪𝙨𝙨𝙞𝙚 𝙙𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙'𝙖𝙫𝙚𝙧𝙩𝙞𝙨𝙨𝙚𝙢𝙚𝙣𝙩 𝙥𝙖𝙧 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			noPermission4: "❌ 𝙎𝙚𝙪𝙡𝙨 𝙡𝙚𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙥𝙚𝙪𝙫𝙚𝙣𝙩 𝙖𝙫𝙚𝙧𝙩𝙞𝙧 𝙡𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			invalidUid4: "⚠️ 𝙑𝙤𝙪𝙨 𝙙𝙚𝙫𝙚𝙯 𝙩𝙖𝙜𝙪𝙚𝙧 𝙤𝙪 𝙧é𝙥𝙤𝙣𝙙𝙧𝙚 𝙖𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙖𝙫𝙚𝙧𝙩𝙞𝙧 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			warnSuccess: "⚠️ 𝙈𝙚𝙢𝙗𝙧𝙚 𝙖𝙫𝙚𝙧𝙩𝙞 %1 𝙛𝙤𝙞𝙨 %2\n- 𝙐𝙞𝙙: %3\n- 𝙍𝙖𝙞𝙨𝙤𝙣: %4\n- 𝘿𝙖𝙩𝙚 𝙃𝙚𝙪𝙧𝙚: %5\n𝘾𝙚 𝙢𝙚𝙢𝙗𝙧𝙚 𝙖 é𝙩é 𝙖𝙫𝙚𝙧𝙩𝙞 3 𝙛𝙤𝙞𝙨 𝙚𝙩 𝙗𝙖𝙣𝙣𝙞 𝙥𝙖𝙧 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙡𝙖 𝙗𝙤𝙭, 𝙥𝙤𝙪𝙧 𝙡𝙚 𝙙é𝙗𝙖𝙣𝙞𝙧, 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙯 𝙡𝙖 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 \"%𝙬𝙖𝙧𝙣 𝙪𝙣𝙗𝙖𝙣 <𝙪𝙞𝙙>\" (𝙖𝙫𝙚𝙘 𝙪𝙞𝙙 𝙚𝙨𝙩 𝙡'𝙪𝙞𝙙 𝙙𝙚 𝙡𝙖 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙙é𝙗𝙡𝙤𝙦𝙪𝙚𝙧 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻)",
			noPermission5: "⚠️ 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖 𝙗𝙚𝙨𝙤𝙞𝙣 𝙙𝙚𝙨 𝙖𝙪𝙩𝙤𝙧𝙞𝙨𝙖𝙩𝙞𝙤𝙣𝙨 𝙙'𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝙥𝙤𝙪𝙧 𝙚𝙭𝙥𝙪𝙡𝙨𝙚𝙧 𝙡𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙗𝙖𝙣𝙣𝙞𝙨 👻",
			warnSuccess2: "⚠️ 𝙈𝙚𝙢𝙗𝙧𝙚 𝙖𝙫𝙚𝙧𝙩𝙞 %1 %2 𝙛𝙤𝙞𝙨\n- 𝙐𝙞𝙙: %3\n- 𝙍𝙖𝙞𝙨𝙤𝙣: %4\n- 𝘿𝙖𝙩𝙚 𝙃𝙚𝙪𝙧𝙚: %5\n𝙎𝙞 𝙘𝙚𝙩𝙩𝙚 𝙥𝙚𝙧𝙨𝙤𝙣𝙣𝙚 𝙚𝙣𝙛𝙧𝙚𝙞𝙣𝙩 %6 𝙛𝙤𝙞𝙨 𝙙𝙚 𝙥𝙡𝙪𝙨, 𝙚𝙡𝙡𝙚 𝙨𝙚𝙧𝙖 𝙗𝙖𝙣𝙣𝙞𝙚 𝙙𝙚 𝙡𝙖 𝙗𝙤î𝙩𝙚𝙥𝙖𝙧 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			hasBanned: "⚠️ 𝙇𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙨𝙪𝙞𝙫𝙖𝙣𝙩𝙨 𝙤𝙣𝙩 𝙙é𝙟à é𝙩é 𝙖𝙫𝙚𝙧𝙩𝙞𝙨 3 𝙛𝙤𝙞𝙨 𝙚𝙩 𝙗𝙖𝙣𝙣𝙞𝙨 𝙥𝙖𝙧 𝙘𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙙𝙚 𝙡𝙖 𝙗𝙤𝙭 👻:\n%1",
			failedKick: "⚠️ 𝙐𝙣𝙚 𝙚𝙧𝙧𝙚𝙪𝙧 𝙨'𝙚𝙨𝙩 𝙥𝙧𝙤𝙙𝙪𝙞𝙩𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡'𝙚𝙭𝙥𝙪𝙡𝙨𝙞𝙤𝙣 𝙙𝙚𝙨 𝙢𝙚𝙢𝙗𝙧𝙚𝙨 𝙨𝙪𝙞𝙫𝙖𝙣𝙩𝙨 👻:\n%1",
			userNotInGroup: "⚠️ 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 : 𝙇'𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 « %1 » 𝙣'𝙚𝙨𝙩 𝙖𝙘𝙩𝙪𝙚𝙡𝙡𝙚𝙢𝙚𝙣𝙩 𝙥𝙖𝙨 𝙙𝙖𝙣𝙨 𝙫𝙤𝙩𝙧𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻"
		}
	},

	onStart: async function ({ message, api, event, args, threadsData, usersData, prefix, role, getLang }) {
		if (!args[0])
			return message.SyntaxError();
		const { threadID, senderID } = event;
		const warnList = await threadsData.get(threadID, "data.warn", []);

		switch (args[0]) {
			case "list": {
				const msg = await Promise.all(warnList.map(async user => {
					const { uid, list } = user;
					const name = await usersData.getName(uid);
					return `${name} (${uid}): ${list.length}`;
				}));
				message.reply(msg.length ? getLang("list", msg.join("\n"), prefix) : getLang("listEmpty"));
				break;
			}
			case "listban": {
				const result = (await Promise.all(warnList.map(async user => {
					const { uid, list } = user;
					if (list.length >= 3) {
						const name = await usersData.getName(uid);
						return `${name} (${uid})`;
					}
				}))).filter(item => item);
				message.reply(result.length ? getLang("listBan", result.join("\n")) : getLang("listBanEmpty"));
				break;
			}
			case "check":
			case "info": {
				let uids, msg = "";
				if (Object.keys(event.mentions).length)
					uids = Object.keys(event.mentions);
				else if (event.messageReply?.senderID)
					uids = [event.messageReply.senderID];
				else if (args.slice(1).length)
					uids = args.slice(1);
				else
					uids = [senderID];

				if (!uids)
					return message.reply(getLang("invalidUid"));
				msg += (await Promise.all(uids.map(async uid => {
					if (isNaN(uid))
						return null;
					const dataWarnOfUser = warnList.find(user => user.uid == uid);
					let msg = `Uid: ${uid}`;
					const userName = await usersData.getName(uid);

					if (!dataWarnOfUser || dataWarnOfUser.list.length == 0)
						msg += `\n  Name: ${userName}\n  ${getLang("noData")}`;
					else {
						msg += `\nName: ${userName}`
							+ `\nWarn list:` + dataWarnOfUser.list.reduce((acc, warn) => {
								const { dateTime, reason } = warn;
								return acc + `\n  - Reason: ${reason}\n    Time: ${dateTime}`;
							}, "");
					}
					return msg;
				}))).filter(msg => msg).join("\n\n");
				message.reply(msg);
				break;
			}
			case "unban": {
				if (role < 1)
					return message.reply(getLang("noPermission"));
				let uidUnban;
				if (Object.keys(event.mentions).length)
					uidUnban = Object.keys(event.mentions)[0];
				else if (event.messageReply?.senderID)
					uidUnban = event.messageReply.senderID;
				else if (args.slice(1).length)
					uidUnban = args.slice(1);
				else
					uidUnban = senderID;

				if (!uidUnban || isNaN(uidUnban))
					return message.reply(getLang("invalidUid2"));

				const index = warnList.findIndex(user => user.uid == uidUnban && user.list.length >= 3);
				if (index === -1)
					return message.reply(getLang("notBanned", uidUnban));

				warnList.splice(index, 1);
				await threadsData.set(threadID, warnList, "data.warn");
				const userName = await usersData.getName(uidUnban);
				message.reply(getLang("unbanSuccess", uidUnban, userName));
				break;
			}
			case "unwarn": {
				if (role < 1)
					return message.reply(getLang("noPermission2"));
				let uid, num;
				if (Object.keys(event.mentions)[0]) {
					uid = Object.keys(event.mentions)[0];
					num = args[args.length - 1];
				}
				else if (event.messageReply?.senderID) {
					uid = event.messageReply.senderID;
					num = args[1];
				}
				else {
					uid = args[1];
					num = parseInt(args[2]) - 1;
				}

				if (isNaN(uid))
					return message.reply(getLang("invalidUid3"));

				const dataWarnOfUser = warnList.find(u => u.uid == uid);
				if (!dataWarnOfUser?.list.length)
					return message.reply(getLang("noData2", uid));

				if (isNaN(num))
					num = dataWarnOfUser.list.length - 1;

				const userName = await usersData.getName(uid);
				if (num > dataWarnOfUser.list.length)
					return message.reply(getLang("notEnoughWarn", userName, dataWarnOfUser.list.length));

				dataWarnOfUser.list.splice(parseInt(num), 1);
				if (!dataWarnOfUser.list.length)
					warnList.splice(warnList.findIndex(u => u.uid == uid), 1);
				await threadsData.set(threadID, warnList, "data.warn");
				message.reply(getLang("unwarnSuccess", num + 1, uid, userName));
				break;
			}
			case "reset": {
				if (role < 1)
					return message.reply(getLang("noPermission3"));
				await threadsData.set(threadID, [], "data.warn");
				message.reply(getLang("resetWarnSuccess"));
				break;
			}
			default: {
				if (role < 1)
					return message.reply(getLang("noPermission4"));
				let reason, uid;
				if (event.messageReply) {
					uid = event.messageReply.senderID;
					reason = args.join(" ").trim();
				}
				else if (Object.keys(event.mentions)[0]) {
					uid = Object.keys(event.mentions)[0];
					reason = args.join(" ").replace(event.mentions[uid], "").trim();
				}
				else {
					return message.reply(getLang("invalidUid4"));
				}
				if (!reason)
					reason = "No reason";
				const dataWarnOfUser = warnList.find(item => item.uid == uid);
				const dateTime = getTime("DD/MM/YYYY hh:mm:ss");
				if (!dataWarnOfUser)
					warnList.push({
						uid,
						list: [{ reason, dateTime, warnBy: senderID }]
					});
				else
					dataWarnOfUser.list.push({ reason, dateTime, warnBy: senderID });

				await threadsData.set(threadID, warnList, "data.warn");

				const times = dataWarnOfUser?.list.length ?? 1;

				const userName = await usersData.getName(uid);
				if (times >= 3) {
					message.reply(getLang("warnSuccess", userName, times, uid, reason, dateTime, prefix), () => {
						api.removeUserFromGroup(uid, threadID, async (err) => {
							if (err) {
								const members = await threadsData.get(event.threadID, "members");
								if (members.find(item => item.userID == uid)?.inGroup) // check if user is still in group
									return message.reply(getLang("userNotInGroup", userName));
								else
									return message.reply(getLang("noPermission5"), (e, info) => {
										const { onEvent } = global.GoatBot;
										onEvent.push({
											messageID: info.messageID,
											onStart: async ({ event }) => {
												if (event.logMessageType === "log:thread-admins" && event.logMessageData.ADMIN_EVENT == "add_admin") {
													const { TARGET_ID } = event.logMessageData;
													if (TARGET_ID == api.getCurrentUserID()) {
														const warnList = await threadsData.get(event.threadID, "data.warn", []);
														if ((warnList.find(user => user.uid == uid)?.list.length ?? 0) <= 3)
															global.GoatBot.onEvent = onEvent.filter(item => item.messageID != info.messageID);
														else
															api.removeUserFromGroup(uid, event.threadID, () => global.GoatBot.onEvent = onEvent.filter(item => item.messageID != info.messageID));
													}
												}
											}
										});
									});
							}
						});
					});
				}
				else
					message.reply(getLang("warnSuccess2", userName, times, uid, reason, dateTime, 3 - (times)));
			}
		}
	},

	onEvent: async ({ event, threadsData, usersData, message, api, getLang }) => {
		const { logMessageType, logMessageData } = event;
		if (logMessageType === "log:subscribe") {
			return async () => {
				const { data, adminIDs } = await threadsData.get(event.threadID);
				const warnList = data.warn || [];
				if (!warnList.length)
					return;
				const { addedParticipants } = logMessageData;
				const hasBanned = [];

				for (const user of addedParticipants) {
					const { userFbId: uid } = user;
					const dataWarnOfUser = warnList.find(item => item.uid == uid);
					if (!dataWarnOfUser)
						continue;
					const { list } = dataWarnOfUser;
					if (list.length >= 3) {
						const userName = await usersData.getName(uid);
						hasBanned.push({
							uid,
							name: userName
						});
					}
				}

				if (hasBanned.length) {
					await message.send(getLang("hasBanned", hasBanned.map(item => `  - ${item.name} (uid: ${item.uid})`).join("\n")));
					if (!adminIDs.includes(api.getCurrentUserID()))
						message.reply(getLang("noPermission5"), (e, info) => {
							const { onEvent } = global.GoatBot;
							onEvent.push({
								messageID: info.messageID,
								onStart: async ({ event }) => {
									if (
										event.logMessageType === "log:thread-admins"
										&& event.logMessageData.ADMIN_EVENT == "add_admin"
										&& event.logMessageData.TARGET_ID == api.getCurrentUserID()
									) {
										const threadData = await threadsData.get(event.threadID);
										const warnList = threadData.data.warn;
										const members = threadData.members;
										removeUsers(hasBanned, warnList, api, event, message, getLang, members);
										global.GoatBot.onEvent = onEvent.filter(item => item.messageID != info.messageID);
									}
								}
							});
						});
					else {
						const members = await threadsData.get(event.threadID, "members");
						removeUsers(hasBanned, warnList, api, event, message, getLang, members);
					}
				}
			};
		}
	}
};

async function removeUsers(hasBanned, warnList, api, event, message, getLang, members) {
	const failed = [];
	for (const user of hasBanned) {
		if (members.find(item => item.userID == user.uid)?.inGroup) { // check if user is still in group
			try {
				if (warnList.find(item => item.uid == user.uid)?.list.length ?? 0 >= 3)
					await api.removeUserFromGroup(user.uid, event.threadID);
			}
			catch (e) {
				failed.push({
					uid: user.uid,
					name: user.name
				});
			}
		}
	}
	if (failed.length)
		message.reply(getLang("failedKick", failed.map(item => `  - ${item.name} (uid: ${item.uid})`).join("\n")));
}
