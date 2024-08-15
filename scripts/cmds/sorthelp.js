module.exports = {
	config: {
		name: "sorthelp",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Sắp xếp danh sách help",
			en: "Sort help list"
		},
		category: "image",
		guide: {
			en: "{pn} [name | category]"
		}
	},

	langs: {
		vi: {
			savedName: "Đã lưu cài đặt sắp xếp danh sách help theo thứ tự chữ cái",
			savedCategory: "Đã lưu cài đặt sắp xếp danh sách help theo thứ tự thể loại"
		},
		en: {
			savedName: "𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚: 👻 𝙇𝙞𝙨𝙩𝙚 𝙙'𝙖𝙞𝙙𝙚 𝙖𝙪 𝙩𝙧𝙞 𝙚𝙣𝙧𝙚𝙜𝙞𝙨𝙩𝙧é𝙚 𝙥𝙖𝙧 𝙣𝙤𝙢 👻",
			savedCategory: "𝙇𝙞𝙨𝙩𝙚 𝙙'𝙖𝙞𝙙𝙚 𝙖𝙪 𝙩𝙧𝙞 𝙚𝙣𝙧𝙚𝙜𝙞𝙨𝙩𝙧é𝙚 𝙥𝙖𝙧 𝙘𝙖𝙩é𝙜𝙤𝙧𝙞𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻"
		}
	},

	onStart: async function ({ message, event, args, threadsData, getLang }) {
		if (args[0] == "name") {
			await threadsData.set(event.threadID, "name", "settings.sortHelp");
			message.reply(getLang("savedName"));
		}
		else if (args[0] == "category") {
			threadsData.set(event.threadID, "category", "settings.sortHelp");
			message.reply(getLang("savedCategory"));
		}
		else
			message.SyntaxError();
	}
};
