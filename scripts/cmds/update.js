const axios = require("axios");
const fs = require("fs-extra");
const execSync = require("child_process").execSync;
const dirBootLogTemp = `${__dirname}/tmp/rebootUpdated.txt`;

module.exports = {
	config: {
		name: "update",
		version: "1.5",
		author: "Chat GPT, NTKhang",
		role: 2,
		description: {
			en: "Check for and install updates for the chatbot.",
			vi: "Kiểm tra và cài đặt phiên bản mới nhất của chatbot trên GitHub."
		},
		category: "owner",
		guide: {
			en: "   {pn}",
			vi: "   {pn}"
		}
	},

	langs: {
		vi: {
			noUpdates: "✅ | Bạn đang sử dụng phiên bản mới nhất của GoatBot V2 (v%1).",
			updatePrompt: "💫 | Bạn đang sử dụng phiên bản %1. Hiện tại đã có phiên bản %2. Bạn có muốn cập nhật chatbot lên phiên bản mới nhất không?"
				+ "\n\n⬆️ | Các tệp sau sẽ được cập nhật:"
				+ "\n%3%4"
				+ "\n\nℹ️ | Xem chi tiết tại https://github.com/ntkhang03/Goat-Bot-V2/commits/main"
				+ "\n💡 | Thả cảm xúc bất kỳ vào tin nhắn này để xác nhận",
			fileWillDelete: "\n🗑️ | Các tệp/thư mục sau sẽ bị xóa:\n%1",
			andMore: " ...và %1 tệp khác",
			updateConfirmed: "🚀 | Đã xác nhận, đang cập nhật...",
			updateComplete: "✅ | Cập nhật thành công, bạn có muốn khởi động lại chatbot ngay bây giờ không (phản hồi tin nhắn với nội dung \"yes\" hoặc \"y\" để xác nhận).",
			updateTooFast: "⭕ Vì bản cập nhật gần nhất được thực phát hành cách đây %1 phút %2 giây nên không thể cập nhật. Vui lòng thử lại sau %3 phút %4 giây nữa để cập nhật không bị lỗi.",
			botWillRestart: "🔄 | Bot sẽ khởi động lại ngay!"
		},
		en: {
			noUpdates: "✅ | 𝙑𝙤𝙪𝙨 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙯 𝙡𝙖 𝙙𝙚𝙧𝙣𝙞è𝙧𝙚 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 V2 (v%1).",
			updatePrompt: "💫 | 𝙑𝙤𝙪𝙨 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙯 𝙡𝙖 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 %1. 𝙄𝙡 𝙚𝙭𝙞𝙨𝙩𝙚 𝙪𝙣𝙚 𝙣𝙤𝙪𝙫𝙚𝙡𝙡𝙚 𝙫𝙚𝙧𝙨𝙞𝙤𝙣 %2. 𝙑𝙤𝙪𝙡𝙚𝙯-𝙫𝙤𝙪𝙨 𝙢𝙚𝙩𝙩𝙧𝙚 à 𝙟𝙤𝙪𝙧 𝙡𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙫𝙚𝙧𝙨 𝙡𝙖 𝙙𝙚𝙧𝙣𝙞è𝙧𝙚 𝙫𝙚𝙧𝙨𝙞𝙤𝙣?"
				+ "\n\n⬆️ | 𝙇𝙚𝙨 𝙛𝙞𝙘𝙝𝙞𝙚𝙧𝙨 𝙨𝙪𝙞𝙫𝙖𝙣𝙩𝙨 𝙨𝙚𝙧𝙤𝙣𝙩 𝙢𝙞𝙨 à 𝙟𝙤𝙪𝙧 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻:"
				+ "\n%3%4"
				+ "\n\nℹ️ | 𝙑𝙤𝙞𝙧 𝙡𝙚𝙨 𝙙é𝙩𝙖𝙞𝙡𝙨 𝙨𝙪𝙧 https://github.com/ntkhang03/Goat-Bot-V2/commits/main"
				+ "\n💡 | 𝙍é𝙖𝙜𝙞𝙨𝙨𝙚𝙯 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙥𝙤𝙪𝙧 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙚𝙧 👻.",
			fileWillDelete: "\n🗑️ | 𝙇𝙚𝙨 𝙛𝙞𝙘𝙝𝙞𝙚𝙧𝙨/𝙙𝙤𝙨𝙨𝙞𝙚𝙧𝙨 𝙨𝙪𝙞𝙫𝙖𝙣𝙩𝙨 𝙨𝙚𝙧𝙤𝙣𝙩 𝙨𝙪𝙥𝙥𝙧𝙞𝙢é𝙨 👻:\n%1",
			andMore: " ...𝙚𝙩 %1 𝙖𝙪𝙩𝙧𝙚𝙨 𝙛𝙞𝙘𝙝𝙞𝙚𝙧𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			updateConfirmed: "🚀 | 𝘾𝙤𝙣𝙛𝙞𝙧𝙢é, 𝙢𝙞𝙨𝙚 à 𝙟𝙤𝙪𝙧 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻...",
			updateComplete: "✅ | 𝙈𝙞𝙨𝙚 à 𝙟𝙤𝙪𝙧 𝙩𝙚𝙧𝙢𝙞𝙣é𝙚, 𝙫𝙤𝙪𝙡𝙚𝙯-𝙫𝙤𝙪𝙨 𝙧𝙚𝙙é𝙢𝙖𝙧𝙧𝙚𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙢𝙖𝙞𝙣𝙩𝙚𝙣𝙖𝙣𝙩 (𝙧é𝙥𝙤𝙣𝙙𝙚𝙯 𝙖𝙫𝙚𝙘 « 𝙤𝙪𝙞 » 𝙤𝙪 « 𝙮 » 𝙥𝙤𝙪𝙧 𝙘𝙤𝙣𝙛𝙞𝙧𝙢𝙚𝙧)?",
			updateTooFast: "⭕ É𝙩𝙖𝙣𝙩 𝙙𝙤𝙣𝙣é 𝙦𝙪𝙚 𝙡𝙖 𝙙𝙚𝙧𝙣𝙞è𝙧𝙚 𝙢𝙞𝙨𝙚 à 𝙟𝙤𝙪𝙧 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙖 é𝙩é 𝙥𝙪𝙗𝙡𝙞é𝙚 𝙞𝙡 𝙮 𝙖 %1 𝙢𝙞𝙣𝙪𝙩𝙚𝙨 %2 𝙨𝙚𝙘𝙤𝙣𝙙𝙚𝙨, 𝙫𝙤𝙪𝙨 𝙣𝙚 𝙥𝙤𝙪𝙫𝙚𝙯 𝙥 𝙖. 👻",
			botWillRestart: "🔄 | 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙫𝙖 𝙧𝙚𝙙é𝙢𝙖𝙧𝙧𝙚𝙧 𝙢𝙖𝙞𝙣𝙩𝙚𝙣𝙖𝙣𝙩 👻!"
		}
	},

	onLoad: async function ({ api }) {
		if (fs.existsSync(dirBootLogTemp)) {
			const threadID = fs.readFileSync(dirBootLogTemp, "utf-8");
			fs.removeSync(dirBootLogTemp);
			api.sendMessage("The chatbot has been restarted.", threadID);
		}
	},

	onStart: async function ({ message, getLang, commandName, event }) {
		// Check for updates
		const { data: { version } } = await axios.get("https://raw.githubusercontent.com/ntkhang03/Goat-Bot-V2/main/package.json");
		const { data: versions } = await axios.get("https://raw.githubusercontent.com/ntkhang03/Goat-Bot-V2/main/versions.json");

		const currentVersion = require("../../package.json").version;
		if (compareVersion(version, currentVersion) < 1)
			return message.reply(getLang("noUpdates", currentVersion));

		const newVersions = versions.slice(versions.findIndex(v => v.version == currentVersion) + 1);

		let fileWillUpdate = [...new Set(newVersions.map(v => Object.keys(v.files || {})).flat())]
			.sort()
			.filter(f => f?.length);
		const totalUpdate = fileWillUpdate.length;
		fileWillUpdate = fileWillUpdate
			.slice(0, 10)
			.map(file => ` - ${file}`).join("\n");

		let fileWillDelete = [...new Set(newVersions.map(v => Object.keys(v.deleteFiles || {}).flat()))]
			.sort()
			.filter(f => f?.length);
		const totalDelete = fileWillDelete.length;
		fileWillDelete = fileWillDelete
			.slice(0, 10)
			.map(file => ` - ${file}`).join("\n");

		// Prompt user to update
		message.reply(
			getLang(
				"updatePrompt",
				currentVersion,
				version,
				fileWillUpdate + (totalUpdate > 10 ? "\n" + getLang("andMore", totalUpdate - 10) : ""),
				totalDelete > 0 ? "\n" + getLang(
					"fileWillDelete",
					fileWillDelete + (totalDelete > 10 ? "\n" + getLang("andMore", totalDelete - 10) : "")
				) : ""
			), (err, info) => {
				if (err)
					return console.error(err);

				global.GoatBot.onReaction.set(info.messageID, {
					messageID: info.messageID,
					threadID: info.threadID,
					authorID: event.senderID,
					commandName
				});
			});
	},

	onReaction: async function ({ message, getLang, Reaction, event, commandName }) {
		const { userID } = event;
		if (userID != Reaction.authorID)
			return;

		const { data: lastCommit } = await axios.get('https://api.github.com/repos/ntkhang03/Goat-Bot-V2/commits/main');
		const lastCommitDate = new Date(lastCommit.commit.committer.date);
		// if < 5min then stop update and show message
		if (new Date().getTime() - lastCommitDate.getTime() < 5 * 60 * 1000) {
			const minutes = Math.floor((new Date().getTime() - lastCommitDate.getTime()) / 1000 / 60);
			const seconds = Math.floor((new Date().getTime() - lastCommitDate.getTime()) / 1000 % 60);
			const minutesCooldown = Math.floor((5 * 60 * 1000 - (new Date().getTime() - lastCommitDate.getTime())) / 1000 / 60);
			const secondsCooldown = Math.floor((5 * 60 * 1000 - (new Date().getTime() - lastCommitDate.getTime())) / 1000 % 60);
			return message.reply(getLang("updateTooFast", minutes, seconds, minutesCooldown, secondsCooldown));
		}

		await message.reply(getLang("updateConfirmed"));
		// Update chatbot
		execSync("node update", {
			stdio: "inherit"
		});
		fs.writeFileSync(dirBootLogTemp, event.threadID);

		message.reply(getLang("updateComplete"), (err, info) => {
			if (err)
				return console.error(err);

			global.GoatBot.onReply.set(info.messageID, {
				messageID: info.messageID,
				threadID: info.threadID,
				authorID: event.senderID,
				commandName
			});
		});
	},

	onReply: async function ({ message, getLang, event }) {
		if (['yes', 'y'].includes(event.body?.toLowerCase())) {
			await message.reply(getLang("botWillRestart"));
			process.exit(2);
		}
	}
};

function compareVersion(version1, version2) {
	const v1 = version1.split(".");
	const v2 = version2.split(".");
	for (let i = 0; i < 3; i++) {
		if (parseInt(v1[i]) > parseInt(v2[i]))
			return 1;
		if (parseInt(v1[i]) < parseInt(v2[i]))
			return -1;
	}
	return 0;
}
