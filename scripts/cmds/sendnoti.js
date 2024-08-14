const { getStreamsFromAttachment, getTime } = global.utils;

module.exports = {
	config: {
		name: "sendnoti",
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Tạo và gửi thông báo đến các nhóm do bạn quản lý",
			en: "Create and send notification to groups that you manage"
		},
		category: "box chat",
		guide: {
			vi: "   {pn} create <groupName>: Tạo một group noti (notification) mới với tên gọi <groupName>"
				+ "\n   Ví dụ:\n    {pn} create TEAM1"
				+ "\n\n   {pn} add <groupName>: thêm box chat hiện tại vào group noti <groupName> (bạn phải là quản trị viên của box chat này)"
				+ "\n   Ví dụ:\n    {pn} add TEAM1"
				+ "\n\n   {pn} list: hiển thị danh sách các group noti bạn đang quản lý"
				+ "\n\n   {pn} info <groupName>: xem thông tin của group noti <groupName>"
				+ "\n\n   {pn} delete: xóa box chat hiện tại khỏi group noti <groupName> (bạn phải là người tạo group noti này)"
				+ "\n   Ví dụ:\n    {pn} delete TEAM1"
				+ "\n\n   {pn} send <groupName> | <message>: gửi thông báo tới tất cả các nhóm trong group noti <groupName> (bạn phải là quản trị viên của những box đó)"
				+ "\n   Ví dụ:\n    {pn} remove TEAM1"
				+ "\n\n   {pn} remove <groupName>: xóa group noti <groupName> (bạn phải là người tạo group noti <groupName>)"
				+ "\n   Ví dụ:\n    {pn} remove TEAM1",
			en: "   {pn} create <groupName>: Create a new notification group with name <groupName>"
				+ "\n   Example:\n    {pn} create TEAM1"
				+ "\n\n   {pn} add <groupName>: add current box chat to notification group <groupName> (you must be admin of this box chat)"
				+ "\n   Example:\n    {pn} add TEAM1"
				+ "\n\n   {pn} list: show list of notification groups you are managing"
				+ "\n\n   {pn} info <groupName>: view info of notification group <groupName>"
				+ "\n\n   {pn} delete: remove current box chat from notification group <groupName> (you must be creator of this group)"
				+ "\n   Example:\n    {pn} delete TEAM1"
				+ "\n\n   {pn} send <groupName> | <message>: send notification to all groups in notification group <groupName> (you must be admin of those groups)"
				+ "\n   Example:\n    {pn} remove TEAM1"
				+ "\n\n   {pn} remove <groupName>: remove notification group <groupName> (you must be creator of notification group <groupName>)"
				+ "\n   Example:\n    {pn} remove TEAM1"
		}
	},

	langs: {
		vi: {
			missingGroupName: "Vui lòng nhập tên groupNoti",
			groupNameExists: "Group send noti mang tên %1 đã được tạo trước đó bởi bạn rồi, vui lòng chọn tên khác",
			createdGroup: "Đã tạo group send noti thành công:\n- Name: %1\n- ID: %2",
			missingGroupNameToAdd: "Vui lòng nhập tên groupNoti bạn muốn thêm nhóm chat này vào",
			groupNameNotExists: "Hiện tại bạn chưa tạo/quản lý group noti nào mang tên: %1",
			notAdmin: "Bạn không phải là quản trị viên của nhóm chat này",
			added: "Đã thêm nhóm chat hiện tại vào group noti: %1",
			missingGroupNameToDelete: "Vui lòng nhập tên groupNoti bạn muốn xóa nhóm chat này khỏi danh sách",
			notInGroup: "Hiện tại nhóm chat này chưa có trong group noti %1",
			emptyList: "Hiện tại bạn chưa tạo/quản lý group noti nào",
			showList: "Danh sách các group noti bạn đang quản lý:\nHiển thị theo định dạng:\n<Tên groupNoti> - <Số lượng nhóm chat trong groupNoti>\n%1",
			deleted: "Đã xóa nhóm chat hiện tại khỏi group noti: %1",
			failed: "Đã xảy ra lỗi khi gửi thông báo đến %1 nhóm chat: \n%2",
			missingGroupNameToRemove: "Vui lòng nhập tên groupNoti bạn muốn xóa bỏ",
			removed: "Đã xóa bỏ group noti: %1",
			missingGroupNameToSend: "Vui lòng nhập tên groupNoti bạn muốn gủi tin nhắn",
			groupIsEmpty: "Hiện tại group noti \"%1\" chưa có nhóm chat nào trong danh sách",
			sending: "Đang gửi thông báo đến %1 nhóm chat",
			success: "Đã gửi thông báo đến %1 nhóm chat trong group noti \"%2\" thành công",
			notAdminOfGroup: "Bạn không phải là quản trị viên của nhóm này",
			missingGroupNameToView: "Vui lòng nhập tên groupNoti bạn muốn xem thông tin",
			groupInfo: "- Group Name: %1\n- ID: %2\n- Ngày tạo: %3\n%4 ",
			groupInfoHasGroup: "- Gồm các nhóm chat: \n%1",
			noGroup: "Hiện tại bạn chưa tạo/quản lý group noti nào"
		},
		en: {
			missingGroupName: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢 𝙦𝙪𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙫𝙖𝙨 𝙢𝙚𝙩𝙩𝙧𝙚 𝙙𝙖𝙣𝙨 𝙜𝙧𝙤𝙪𝙥𝙚𝙉𝙤𝙩𝙞 👻",
			groupNameExists: "𝙑𝙤𝙪𝙨 𝙖𝙫𝙚𝙯 𝙙é𝙟à 𝙘𝙧éé 𝙪𝙣 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙧𝙩𝙖𝙣𝙩 𝙡𝙚 𝙣𝙤𝙢 %1. 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙘𝙝𝙤𝙞𝙨𝙞𝙧 𝙪𝙣 𝙖𝙪𝙩𝙧𝙚 𝙣𝙤𝙢 👻.",
			createdGroup: "𝙂𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻  𝙘𝙧éé 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 👻:\n- 𝙉𝙤𝙢: %1\n- 𝙄𝘿: %2",
			missingGroupNameToAdd: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚𝙉𝙤𝙩𝙞 𝙖𝙪𝙦𝙪𝙚𝙡 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙖𝙟𝙤𝙪𝙩𝙚𝙧 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			groupNameNotExists: "𝙑𝙤𝙪𝙨 𝙣'𝙖𝙫𝙚𝙯 𝙘𝙧éé/𝙜é𝙧é 𝙖𝙪𝙘𝙪𝙣 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙧𝙩𝙖𝙣𝙩 𝙘𝙚 𝙣𝙤𝙢 👻: %1",
			notAdmin: "𝙑𝙤𝙪𝙨 𝙣'ê𝙩𝙚𝙨 𝙥𝙖𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝙙𝙚 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 👻",
			added: "𝘼𝙟𝙤𝙪𝙩 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙖𝙘𝙩𝙪𝙚𝙡 𝙖𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣: %1",
			missingGroupNameToDelete: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚𝙉𝙤𝙩𝙞 𝙙𝙖𝙣𝙨 𝙡𝙚𝙦𝙪𝙚𝙡 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚𝙧 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙙𝙚 𝙡𝙖 𝙡𝙞𝙨𝙩𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚👻,
			notInGroup: "𝙇𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙖𝙘𝙩𝙪𝙚𝙡 𝙣'𝙚𝙨𝙩 𝙥𝙖𝙨 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚  👻 %1",
			emptyList: "𝙑𝙤𝙪𝙨 𝙣'𝙖𝙫𝙚𝙯 𝙘𝙧éé/𝙜é𝙧é 𝙖𝙪𝙘𝙪𝙣 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			showList: "𝙇𝙞𝙨𝙩𝙚 𝙙𝙚𝙨 𝙜𝙧𝙤𝙪𝙥𝙚𝙨 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙜é𝙧𝙚𝙯 👻:\n𝘼𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙖𝙪 𝙛𝙤𝙧𝙢𝙖𝙩 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻:\n<𝙉𝙤𝙢 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻> - <𝙉𝙤𝙢𝙗𝙧𝙚 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚𝙨 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚>\n%1",
			deleted: "𝙎𝙪𝙥𝙥𝙧𝙚𝙨𝙨𝙞𝙤𝙣 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣 𝙖𝙘𝙩𝙪𝙚𝙡 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: %1",
			failed: "É𝙘𝙝𝙚𝙘 𝙙𝙚 𝙡'𝙚𝙣𝙫𝙤𝙞 𝙙𝙚 𝙡𝙖 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖𝙪𝙭 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 %1 👻: \n%2",
			missingGroupNameToRemove: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚𝙉𝙤𝙩𝙞 𝙦𝙪𝙚 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙦𝙪𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙨𝙪𝙥𝙥𝙧𝙞𝙢𝙚 𝙥𝙤𝙪𝙧 𝙫𝙤𝙪𝙨",
			removed: "𝙂𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙨𝙪𝙥𝙥𝙧𝙞𝙢é 👻: %1",
			missingGroupNameToSend: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚𝙉𝙤𝙩𝙞 𝙖𝙪𝙦𝙪𝙚𝙡 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙚𝙣𝙫𝙤𝙮𝙚𝙧 𝙪𝙣 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 👻",
			groupIsEmpty: "𝙇𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 « %1 » 𝙚𝙨𝙩 𝙫𝙞𝙙𝙚 👻",
			sending: "𝙀𝙣𝙫𝙤𝙞 𝙙'𝙪𝙣𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻  𝙖𝙪𝙭 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 %1 👻",
			success: "𝙇𝙖 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻. 𝙖 é𝙩é 𝙚𝙣𝙫𝙤𝙮é𝙚 𝙖𝙫𝙚𝙘 𝙨𝙪𝙘𝙘è𝙨 𝙖𝙪𝙭 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 %1 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 « %2 »",
			notAdminOfGroup: "𝙑𝙤𝙪𝙨 𝙣'ê𝙩𝙚𝙨 𝙥𝙖𝙨 𝙖𝙙𝙢𝙞𝙣𝙞𝙨𝙩𝙧𝙖𝙩𝙚𝙪𝙧 𝙙𝙚 𝙘𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻",
			missingGroupNameToView: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡𝙚 𝙣𝙤𝙢 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚𝙉𝙤𝙩𝙞 𝙙𝙤𝙣𝙩 𝙫𝙤𝙪𝙨 𝙨𝙤𝙪𝙝𝙖𝙞𝙩𝙚𝙯 𝙖𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙡𝙚𝙨 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙩𝙞𝙤𝙣𝙨 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			groupInfo: "- 𝙉𝙤𝙢 𝙙𝙪 𝙜𝙧𝙤𝙪𝙥𝙚 👻: %1\n - 𝙄𝘿: %2\n - 𝘾𝙧éé à: %3\n%4 ",
			groupInfoHasGroup: "- 𝘼 𝙙𝙚𝙨 𝙙𝙞𝙨𝙘𝙪𝙨𝙨𝙞𝙤𝙣𝙨 𝙙𝙚 𝙜𝙧𝙤𝙪𝙥𝙚 👻: \n%1",
			noGroup: "𝙑𝙤𝙪𝙨 𝙣'𝙖𝙫𝙚𝙯 𝙘𝙧éé/𝙜é𝙧é 𝙖𝙪𝙘𝙪𝙣 𝙜𝙧𝙤𝙪𝙥𝙚 𝙙𝙚 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙩𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻"
		}
	},

	onStart: async function ({ message, event, args, usersData, threadsData, api, getLang, role }) {
		const { threadID, senderID } = event;
		const groupsSendNotiData = await usersData.get(senderID, 'data.groupsSendNoti', []);

		switch (args[0]) {
			case "create": {
				const groupName = args.slice(1).join(' ');
				const groupID = Date.now();
				if (!groupName)
					return message.reply(getLang('missingGroupName'));

				const groupsSendNotiData = await usersData.get(senderID, 'data.groupsSendNoti', []);
				if (groupsSendNotiData.some(item => item.groupName === groupName))
					return message.reply(getLang('groupNameExists', groupName));

				groupsSendNotiData.push({
					groupName,
					groupID,
					threadIDs: []
				});
				await usersData.set(senderID, groupsSendNotiData, 'data.groupsSendNoti');
				message.reply(getLang('createdGroup', groupName, groupID));
				break;
			}
			case "add": {
				const groupName = args.slice(1).join(' ');
				if (!groupName)
					return message.reply(getLang('missingGroupNameToAdd'));
				const getGroup = (groupsSendNotiData || []).find(item => item.groupName == groupName);

				if (!getGroup)
					return message.reply(getLang('groupNameNotExists', groupName));

				if (role < 1)
					return message.reply(getLang('notAdmin'));

				getGroup.threadIDs.push(threadID);
				await usersData.set(senderID, groupsSendNotiData, 'data.groupsSendNoti');

				message.reply(getLang('added', groupName));
				break;
			}
			case "list": {
				if (!groupsSendNotiData.length)
					return message.reply(getLang('noGroup'));

				const msg = groupsSendNotiData.reduce((acc, item) => {
					acc += `+ ${item.groupName} - ${item.threadIDs.length}\n`;
					return acc;
				}, '');

				message.reply(getLang('showList', msg));
				break;
			}
			case "delete": {
				const groupName = args.slice(1).join(' ');
				if (!groupName)
					return message.reply(getLang('missingGroupNameToDelete'));

				const getGroup = (groupsSendNotiData || []).find(item => item.groupName == groupName);
				if (!getGroup)
					return message.reply(getLang('groupNameNotExists', groupName));

				const findIndexThread = getGroup.threadIDs.findIndex(item => item == threadID);
				if (findIndexThread == -1)
					return message.reply(getLang('notInGroup', groupName));

				getGroup.threadIDs.splice(findIndexThread, 1);
				await usersData.set(senderID, groupsSendNotiData, 'data.groupsSendNoti');

				message.reply(getLang('deleted', groupName));
				break;
			}
			case "remove":
			case "-r": {
				const groupName = args.slice(1).join(' ');
				if (!groupName)
					return message.reply(getLang('missingGroupNameToRemove'));
				const findIndex = (groupsSendNotiData.threadIDs || []).findIndex(item => item.groupName == groupName);

				if (findIndex == -1)
					return message.reply(getLang('groupNameNotExists', groupName));

				groupsSendNotiData.splice(findIndex, 1);
				await usersData.set(senderID, groupsSendNotiData, 'data.groupsSendNoti');

				message.reply(getLang('removed', groupName));
				break;
			}
			case "send": {
				const groupName = args.slice(1).join(' ').split('|')[0].trim();
				if (!groupName)
					return message.reply(getLang('missingGroupNameToSend'));

				const getGroup = (groupsSendNotiData || []).find(item => item.groupName == groupName);
				if (!getGroup)
					return message.reply(getLang('groupNameNotExists', groupName));
				if (getGroup.threadIDs.length == 0)
					return message.reply(getLang('groupIsEmpty', groupName));

				const messageSend = args.slice(2).join(' ').split('|').slice(1).join(' ').trim();
				const formSend = {
					body: messageSend
				};

				if (event.attachments.length || event.attachments.messageReply?.attachments.length)
					formSend.attachment = await getStreamsFromAttachment([...event.attachments, ...(event.messageReply?.attachments || [])].filter(item => ["photo", 'png', "animated_image", "video", "audio"].includes(item.type)));

				const success = [];
				const failed = [];
				const pendings = [];

				const { threadIDs } = getGroup;
				const msgSend = message.reply(getLang('sending', groupName, threadIDs.length));
				for (const tid of threadIDs) {
					await new Promise((r) => setTimeout(r, 1000));
					pendings.push(
						new Promise(async (resolve, reject) => {
							const { adminIDs, threadName } = await threadsData.get(tid);
							if (!adminIDs.includes(senderID))
								return reject({
									error: 'PERMISSION_DENIED',
									threadID: tid,
									threadName
								});
							api.sendMessage(formSend, tid, (err) => {
								if (err)
									reject({
										...err,
										threadID: tid,
										threadName
									});
								resolve({
									threadID: tid,
									threadName
								});
							});
						})
					);
				}

				for (const item of pendings) {
					try {
						await item;
						success.push({
							threadID: item.threadID,
							threadName: item.threadName
						});
					}
					catch (err) {
						failed.push({
							threadID: item.threadID,
							threadName: item.threadName,
							error: item.error
						});
					}
				}
				api.unsendMessage((await msgSend).messageID);
				let msg = "";
				if (success.length)
					msg += `${getLang('success', success.length, groupName)}\n`;
				if (failed.length)
					msg += getLang('failed', failed.length,
						failed.map(item => `\n- id: ${item.threadID}`
							+ `\n- Name: ${item.threadName}`
							+ `\n- Error: ${item.error == 'PERMISSION_DENIED' ?
								getLang('notAdminOfGroup') :
								''}`
						).join('\n')
					);
				message.reply(msg);

				break;
			}
			case "info": {
				const groupName = args.slice(1).join(' ');
				if (!groupName)
					return message.reply(getLang('missingGroupNameToView'));

				const getGroup = (groupsSendNotiData || []).find(item => item.groupName == groupName);
				if (!getGroup)
					return message.reply(getLang('groupNameNotExists', groupName));
				const { threadIDs } = getGroup;

				const allThreadData = await threadsData.getAll();

				const msg = threadIDs.reduce((acc, tid) => {
					const threadData = allThreadData.find(i => i.threadID == tid) || {};
					acc += ` + ID: ${tid}\n + Name: ${threadData.threadName || 'null'}\n\n`;
					return acc;
				}, '');

				message.reply(getLang('groupInfo', groupName, getGroup.groupID, getTime(getGroup.groupID, 'DD/MM/YYYY HH:mm:ss'), msg ? getLang('groupInfoHasGroup', msg) : getLang('groupIsEmpty', groupName)));
				break;
			}
			default: {
				return message.SyntaxError();
			}
		}
	}
};
