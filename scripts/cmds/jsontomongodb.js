const fs = require("fs-extra");

module.exports = {
	config: {
		name: "jsontomongodb",
		aliases: ["jsontomongo"],
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 2,
		description: {
			vi: "Đồng bộ dữ liệu từ json sang mongodb",
			en: "Synchronize data from json to mongodb"
		},
		category: "owner",
		guide: {
			vi: "   {pn} <thread | user | dashboard | global | all>: Sẽ đồng bộ dữ liệu từ data json được lưu trong thư mục database/data sang mongodb\n\n   Lưu ý: Nếu dữ liệu đã tồn tại trong mongodb thì sẽ được cập nhật lại",
			en: "   {pn} <thread | user | dashboard | global | all>: Will synchronize data from json data stored in the database/data folder to mongodb\n\n   Note: If the data already exists in mongodb, it will be updated"
		}
	},

	langs: {
		vi: {
			invalidDatabase: "❌ Vui lòng chuyển database sang mongodb trong config sau đó khởi động lại bot để sử dụng lệnh này",
			missingFile: "❌ Bạn chưa sao chép dữ liệu file %1 vào thư mục database/data",
			formatInvalid: "❌ Định dạng dữ liệu không hợp lệ",
			error: "❌ Đã có lỗi xảy ra:\n%1: %2",
			successThread: "✅ Đã đồng bộ dữ liệu nhóm từ json sang mongodb thành công!",
			successUser: "✅ Đã đồng bộ dữ liệu người dùng từ json sang mongodb thành công!",
			successDashboard: "✅ Đã đồng bộ dữ liệu dashboard từ json sang mongodb thành công!",
			successGlobal: "✅ Đã đồng bộ dữ liệu global từ json sang mongodb thành công!"
		},
		en: {
			invalidDatabase: "❌ 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙘𝙝𝙖𝙣𝙜𝙚𝙧 𝙡𝙖 𝙗𝙖𝙨𝙚 𝙙𝙚 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙫𝙚𝙧𝙨 𝙢𝙤𝙣𝙜𝙤𝙙𝙗 𝙙𝙖𝙣𝙨 𝙡𝙖 𝙘𝙤𝙣𝙛𝙞𝙜𝙪𝙧𝙖𝙩𝙞𝙤𝙣, 𝙥𝙪𝙞𝙨 𝙧𝙚𝙙é𝙢𝙖𝙧𝙧𝙚𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙪𝙧 𝙪𝙩𝙞𝙡𝙞𝙨𝙚𝙧 𝙘𝙚𝙩𝙩𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			missingFile: "❌ 𝙑𝙤𝙪𝙨 𝙣'𝙖𝙫𝙚𝙯 𝙥𝙖𝙨 𝙘𝙤𝙥𝙞é 𝙡𝙚 𝙛𝙞𝙘𝙝𝙞𝙚𝙧 𝙙𝙚 𝙙𝙤𝙣𝙣é𝙚𝙨 %1 𝙙𝙖𝙣𝙨 𝙡𝙚 𝙙𝙤𝙨𝙨𝙞𝙚𝙧 𝙙𝙖𝙩𝙖𝙗𝙖𝙨𝙚/𝙙𝙖𝙩𝙖 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			formatInvalid: "❌ 𝙇𝙚 𝙛𝙤𝙧𝙢𝙖𝙩 𝙙𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙣'𝙚𝙨𝙩 𝙥𝙖𝙨 𝙫𝙖𝙡𝙞𝙙𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			error: "❌ 𝙐𝙣𝙚 𝙚𝙧𝙧𝙚𝙪𝙧 𝙨'𝙚𝙨𝙩 𝙥𝙧𝙤𝙙𝙪𝙞𝙩𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻:\n%1: %2",
			successThread: "✅ 𝙎𝙮𝙣𝙘𝙝𝙧𝙤𝙣𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙧é𝙪𝙨𝙨𝙞𝙚 𝙙𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙𝙚 𝙩𝙝𝙧𝙚𝙖𝙙 𝙙𝙚 𝙟𝙨𝙤𝙣 𝙫𝙚𝙧𝙨 𝙢𝙤𝙣𝙜𝙤𝙙𝙗! 👻",
			successUser: "✅ 𝙎𝙮𝙣𝙘𝙝𝙧𝙤𝙣𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙧é𝙪𝙨𝙨𝙞𝙚 𝙙𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙪𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙚𝙪𝙧 𝙙𝙚 𝙟𝙨𝙤𝙣 𝙫𝙚𝙧𝙨 𝙢𝙤𝙣𝙜𝙤𝙙𝙗👻!",
			successDashboard: "✅ 𝙎𝙮𝙣𝙘𝙝𝙧𝙤𝙣𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙧é𝙪𝙨𝙨𝙞𝙚 𝙙𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙙𝙪 𝙩𝙖𝙗𝙡𝙚𝙖𝙪 𝙙𝙚 𝙗𝙤𝙧𝙙 𝙙𝙚 𝙟𝙨𝙤𝙣 𝙫𝙚𝙧𝙨 𝙢𝙤𝙣𝙜𝙤𝙙𝙗! 👻",
			successGlobal: "✅ 𝙎𝙮𝙣𝙘𝙝𝙧𝙤𝙣𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙧é𝙪𝙨𝙨𝙞𝙚 𝙙𝙚𝙨 𝙙𝙤𝙣𝙣é𝙚𝙨 𝙜𝙡𝙤𝙗𝙖𝙡𝙚𝙨 𝙙𝙚 𝙟𝙨𝙤𝙣 𝙫𝙚𝙧𝙨 𝙢𝙤𝙣𝙜𝙤𝙙𝙗 👻!"
		}
	},

	onStart: async function ({ args, message, threadModel, userModel, dashBoardModel, globalModel, getLang }) {
		if (global.GoatBot.config.database.type !== "mongodb")
			return message.reply(getLang("invalidDatabase"));

		switch (args[0]) {
			case "thread": {
				return syncThreadData(message, threadModel, getLang);
			}
			case "user": {
				return syncUserData(message, userModel, getLang);
			}
			case "dashboard": {
				return syncDashBoardData(message, dashBoardModel, getLang);
			}
			case "global": {
				return syncGlobalData(message, globalModel, getLang);
			}
			case "all": {
				await syncThreadData(message, threadModel, getLang);
				await syncUserData(message, userModel, getLang);
				await syncDashBoardData(message, dashBoardModel, getLang);
				await syncGlobalData(message, globalModel, getLang);
				return;
			}
			default:
				return message.SyntaxError();
		}
	}
};

async function syncThreadData(message, threadModel, getLang) {
	let oldThreadsData;
	const pathThreadData = `${process.cwd()}/database/data/threadsData.json`;
	if (!fs.existsSync(pathThreadData))
		return message.reply(getLang("missingFile", pathThreadData.split("/").pop()));

	try {
		oldThreadsData = require(pathThreadData);
		delete require.cache[require.resolve(pathThreadData)];
	}
	catch (err) {
		return message.reply(getLang("formatInvalid"));
	}

	try {
		const bulkOperations = [];

		for (const thread of oldThreadsData) {
			const threadIndex = global.db.allThreadData.findIndex(item => item.threadID == thread.threadID);
			if (threadIndex === -1) {
				bulkOperations.push({
					insertOne: {
						document: thread
					}
				});
			}
			else {
				bulkOperations.push({
					updateOne: {
						filter: { threadID: thread.threadID },
						update: thread
					}
				});
			}
		}

		if (bulkOperations.length > 0) {
			await threadModel.bulkWrite(bulkOperations);
			global.db.allThreadData = await threadModel.find({}).lean();
		}

		return message.reply(getLang("successThread"));
	}
	catch (err) {
		return message.reply(getLang("error", err.name, err.message));
	}
}

async function syncUserData(message, userModel, getLang) {
	let oldUsersData;
	const pathUsersData = `${process.cwd()}/database/data/usersData.json`;
	if (!fs.existsSync(pathUsersData))
		return message.reply(getLang("missingFile", pathUsersData.split("/").pop()));

	try {
		oldUsersData = require(pathUsersData);
		delete require.cache[require.resolve(pathUsersData)];
	}
	catch (err) {
		return message.reply(getLang("formatInvalid"));
	}

	try {
		const bulkOperations = [];

		for (const user of oldUsersData) {
			const userIndex = global.db.allUserData.findIndex(item => item.userID == user.userID);
			if (userIndex === -1) {
				bulkOperations.push({
					insertOne: {
						document: user
					}
				});
			}
			else {
				bulkOperations.push({
					updateOne: {
						filter: { userID: user.userID },
						update: user
					}
				});
			}
		}

		if (bulkOperations.length > 0) {
			await userModel.bulkWrite(bulkOperations);
			global.db.allUserData = await userModel.find({}).lean();
		}

		return message.reply(getLang("successUser"));
	}
	catch (err) {
		return message.reply(getLang("error", err.name, err.message));
	}
}

async function syncDashBoardData(message, dashBoardModel, getLang) {
	let oldDashBoardData;
	const pathDashBoardData = `${process.cwd()}/database/data/dashBoardData.json`;
	if (!fs.existsSync(pathDashBoardData))
		return message.reply(getLang("missingFile", pathDashBoardData.split("/").pop()));

	try {
		oldDashBoardData = require(pathDashBoardData);
		delete require.cache[require.resolve(pathDashBoardData)];
	}
	catch (err) {
		return message.reply(getLang("formatInvalid"));
	}

	try {
		const bulkOperations = [];

		for (const dashboard of oldDashBoardData) {
			const dashboardIndex = global.db.allDashBoardData.findIndex(item => item.email == dashboard.email);
			if (dashboardIndex === -1) {
				bulkOperations.push({
					insertOne: {
						document: dashboard
					}
				});
			}
			else {
				bulkOperations.push({
					updateOne: {
						filter: { email: dashboard.email },
						update: dashboard
					}
				});
			}
		}

		if (bulkOperations.length > 0) {
			await dashBoardModel.bulkWrite(bulkOperations);
			global.db.allDashBoardData = await dashBoardModel.find({}).lean();
		}

		return message.reply(getLang("successDashboard"));
	}
	catch (err) {
		return message.reply(getLang("error", err.name, err.message));
	}
}

async function syncGlobalData(message, globalModel, getLang) {
	let oldGlobalData;
	const pathGlobalData = `${process.cwd()}/database/data/globalData.json`;
	if (!fs.existsSync(pathGlobalData))
		return message.reply(getLang("missingFile", pathGlobalData.split("/").pop()));

	try {
		oldGlobalData = require(pathGlobalData);
		delete require.cache[require.resolve(pathGlobalData)];
	}
	catch (err) {
		return message.reply(getLang("formatInvalid"));
	}

	try {
		const bulkOperations = [];

		for (const global_ of oldGlobalData) {
			const globalIndex = global.db.allGlobalData.findIndex(item => item.key == global_.key);
			if (globalIndex === -1) {
				bulkOperations.push({
					insertOne: {
						document: global_
					}
				});
			}
			else {
				bulkOperations.push({
					updateOne: {
						filter: { key: global_.key },
						update: global_
					}
				});
			}
		}

		if (bulkOperations.length > 0) {
			await globalModel.bulkWrite(bulkOperations);
			global.db.allGlobalData = await globalModel.find({}).lean();
		}

		return message.reply(getLang("successGlobal"));
	}
	catch (err) {
		return message.reply(getLang("error", err.name, err.message));
	}
}
