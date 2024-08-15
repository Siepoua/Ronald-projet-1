const { GoatBotApis } = global.utils;

module.exports = {
	config: {
		name: "texttoimage",
		aliases: ["midjourney", "openjourney", "text2image"],
		version: "1.3",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			uid: "Tạo ảnh từ văn bản của bạn",
			en: "Create image from your text"
		},
		category: "info",
		guide: {
			vi: "   {pn} <prompt>: tạo ảnh từ văn bản của bạn"
				+ "\n    Ví dụ: {pn} mdjrny-v4 create a gta style house, gta, 4k, hyper detailed, cinematic, realistic, unreal engine, cinematic lighting, bright lights"
				+ "\n    Example: {pn} mdjrny-v4 create a gta style house, gta, 4k, hyper detailed, cinematic, realistic, unreal engine, cinematic lighting, bright lights"
		}
	},

	langs: {
		vi: {
			syntaxError: "⚠️ Vui lòng nhập prompt",
			error: "❗ Đã có lỗi xảy ra, vui lòng thử lại sau:\n%1",
			serverError: "❗ Server đang quá tải, vui lòng thử lại sau",
			missingGoatApiKey: "❗ Chưa cài đặt apikey cho GoatBot, vui lòng truy cập goatbot.tk để lấy apikey và cài đặt vào file configCommands.json > envGlobal.goatbotApikey và lưu lại"
		},
		en: {
			syntaxError: "⚠️ 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙡'𝙞𝙣𝙫𝙞𝙩𝙚",
			error: "❗ 𝙐𝙣𝙚 𝙚𝙧𝙧𝙚𝙪𝙧 𝙨'𝙚𝙨𝙩 𝙥𝙧𝙤𝙙𝙪𝙞𝙩𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻, 𝙫𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙧é𝙚𝙨𝙨𝙖𝙮𝙚𝙧 𝙥𝙡𝙪𝙨 𝙩𝙖𝙧𝙙 👻:\n%1",
			serverError: "❗ 𝙇𝙚 𝙨𝙚𝙧𝙫𝙚𝙪𝙧 𝙚𝙨𝙩 𝙨𝙪𝙧𝙘𝙝𝙖𝙧𝙜é, 𝙫𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙧é𝙚𝙨𝙨𝙖𝙮𝙚𝙧 𝙥𝙡𝙪𝙨 𝙩𝙖𝙧𝙙 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			missingGoatApiKey: "❗𝙑𝙤𝙪𝙨 𝙣'𝙖𝙫𝙚𝙯 𝙥𝙖𝙨 𝙙é𝙛𝙞𝙣𝙞 𝙙𝙚 𝙘𝙡é 𝘼𝙋𝙄 𝙥𝙤𝙪𝙧 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻. 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙫𝙞𝙨𝙞𝙩𝙚𝙧 𝙜𝙤𝙖𝙩𝙗𝙤𝙩.𝙩𝙠 𝙥𝙤𝙪𝙧 𝙤𝙗𝙩𝙚𝙣𝙞𝙧 𝙡𝙖 𝙘𝙡é 𝘼𝙋𝙄 𝙚𝙩 𝙡𝙖 𝙙é𝙛𝙞𝙣𝙞𝙧 𝙨𝙪𝙧 𝙘𝙤𝙣𝙛𝙞𝙜𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙨.𝙟𝙨𝙤𝙣 > 𝙚𝙣𝙫𝙂𝙡𝙤𝙗𝙖𝙡.𝙜𝙤𝙖𝙩𝙗𝙤𝙩𝘼𝙥𝙞𝙠𝙚𝙮 𝙚𝙩 𝙚𝙣𝙧𝙚𝙜𝙞𝙨𝙩𝙧𝙚𝙧 👻"
		}
	},

	onStart: async function ({ message, args, getLang, envGlobal }) {
		const goatBotApi = new GoatBotApis(envGlobal.goatbotApikey);
		if (!goatBotApi.isSetApiKey())
			return message.reply(getLang("missingGoatApiKey"));
		const prompt = args.join(" ");
		if (!prompt)
			return message.reply(getLang("syntaxError"));

		try {
			const { data: imageStream } = await goatBotApi.api({
				url: "/image/mdjrny",
				method: "GET",
				params: {
					prompt,
					style_id: 28,
					aspect_ratio: "1:1"
				},
				responseType: "stream"
			});

			imageStream.path = "image.jpg";

			return message.reply({
				attachment: imageStream
			});
		}
		catch (err) {
			return message.reply(getLang("error", err.data?.message || err.message));
		}
	}
};
