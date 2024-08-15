const axios = require('axios');
const defaultEmojiTranslate = "🌐";

module.exports = {
	config: {
		name: "translate",
		aliases: ["trans"],
		version: "1.5",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "Dịch văn bản sang ngôn ngữ mong muốn",
			en: "Translate text to the desired language"
		},
		category: "utility",
		guide: {
			vi: "   {pn} <văn bản>: Dịch văn bản sang ngôn ngữ của box chat bạn hoặc ngôn ngữ mặc định của bot"
				+ "\n   {pn} <văn bản> -> <ISO 639-1>: Dịch văn bản sang ngôn ngữ mong muốn"
				+ "\n   hoặc có thể phản hồi 1 tin nhắn để dịch nội dung của tin nhắn đó"
				+ "\n   Ví dụ:"
				+ "\n    {pn} hello -> vi"
				+ "\n   {pn} -r [on | off]: Bật hoặc tắt chế độ tự động dịch tin nhắn khi có người thả cảm xúc vào tin nhắn"
				+ "\n   {pn} -r set <emoji>: Đặt emoji để dịch tin nhắn trong nhóm chat của bạn",
			en: "   {pn} <text>: Translate text to the language of your chat box or the default language of the bot"
				+ "\n   {pn} <text> -> <ISO 639-1>: Translate text to the desired language"
				+ "\n   or you can reply a message to translate the content of that message"
				+ "\n   Example:"
				+ "\n    {pn} hello -> vi"
				+ "\n   {pn} -r [on | off]: Turn on or off the automatic translation mode when someone reacts to the message"
				+ "\n   {pn} -r set <emoji>: Set the emoji to translate the message in your chat group"
		}
	},

	langs: {
		vi: {
			translateTo: "🌐 Dịch từ %1 sang %2",
			invalidArgument: "❌ Sai cú pháp, vui lòng chọn on hoặc off",
			turnOnTransWhenReaction: `✅ Đã bật tính năng dịch tin nhắn khi thả cảm xúc, thử thả cảm xúc \"${defaultEmojiTranslate}\" vào tin nhắn bắt kỳ để dịch nó (không hỗ trợ tin nhắn của bot)\n Chỉ có thể dịch được những tin nhắn sau khi bật tính năng này`,
			turnOffTransWhenReaction: "✅ Đã tắt tính năng dịch tin nhắn khi thả cảm xúc",
			inputEmoji: "🌀 Hãy thả cảm xúc vào tin nhắn này để đặt emoji đó làm emoji dịch tin nhắn",
			emojiSet: "✅ Đã đặt emoji dịch tin nhắn là %1"

		},
		en: {
			translateTo: "👻 𝙏𝙧𝙖𝙙𝙪𝙞𝙧𝙚 𝙙𝙚 %1 à 👻 %2",
			invalidArgument: "❌ 𝘼𝙧𝙜𝙪𝙢𝙚𝙣𝙩 𝙞𝙣𝙫𝙖𝙡𝙞𝙙𝙚, 𝙫𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙘𝙝𝙤𝙞𝙨𝙞𝙧 𝙖𝙘𝙩𝙞𝙫é 𝙤𝙪 𝙙é𝙨𝙖𝙘𝙩𝙞𝙫é 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			turnOnTransWhenReaction: `✅ 𝘼𝙘𝙩𝙞𝙫𝙚𝙧 𝙡𝙖 𝙩𝙧𝙖𝙙𝙪𝙘𝙩𝙞𝙤𝙣 𝙙𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡𝙖 𝙧é𝙖𝙘𝙩𝙞𝙤𝙣, 𝙚𝙨𝙨𝙖𝙮𝙚𝙧 𝙙𝙚 𝙧é𝙖𝙜𝙞𝙧 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 \"${defaultEmojiTranslate}\" à 𝙣'𝙞𝙢𝙥𝙤𝙧𝙩𝙚 𝙦𝙪𝙚𝙡 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙥𝙤𝙪𝙧 𝙡𝙚 𝙩𝙧𝙖𝙙𝙪𝙞𝙧𝙚 (𝙣𝙚 𝙥𝙧𝙚𝙣𝙙 𝙥𝙖𝙨 𝙚𝙣 𝙘𝙝𝙖𝙧𝙜𝙚 𝙡𝙚𝙨 𝙢𝙚𝙨𝙨𝙖𝙜𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻)\n 𝙏𝙧𝙖𝙙𝙪𝙞𝙧𝙚 𝙡𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙪𝙣𝙞𝙦𝙪𝙚𝙢𝙚𝙣𝙩 𝙖𝙥𝙧è𝙨 𝙖𝙫𝙤𝙞𝙧 𝙖𝙘𝙩𝙞𝙫é 𝙘𝙚𝙩𝙩𝙚 𝙛𝙤𝙣𝙘𝙩𝙞𝙤𝙣𝙣𝙖𝙡𝙞𝙩é 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻`,
			turnOffTransWhenReaction: "✅ 𝘿é𝙨𝙖𝙘𝙩𝙞𝙫𝙚𝙧 𝙡𝙖 𝙩𝙧𝙖𝙙𝙪𝙘𝙩𝙞𝙤𝙣 𝙙𝙪 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙡𝙤𝙧𝙨 𝙙𝙚 𝙡𝙖 𝙧é𝙖𝙘𝙩𝙞𝙤𝙣 👻",
			inputEmoji: "🌀 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 : 𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙧é𝙖𝙜𝙞𝙧 à 𝙘𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙥𝙤𝙪𝙧 𝙙é𝙛𝙞𝙣𝙞𝙧 𝙘𝙚𝙩 𝙚𝙢𝙤𝙟𝙞 𝙘𝙤𝙢𝙢𝙚 𝙚𝙢𝙤𝙟𝙞 𝙥𝙤𝙪𝙧 𝙩𝙧𝙖𝙙𝙪𝙞𝙧𝙚 𝙡𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚",
			emojiSet: "✅ 𝙇'é𝙢𝙤𝙟𝙞 𝙥𝙤𝙪𝙧 𝙩𝙧𝙖𝙙𝙪𝙞𝙧𝙚 𝙡𝙚 𝙢𝙚𝙨𝙨𝙖𝙜𝙚 𝙚𝙨𝙩 𝙙é𝙛𝙞𝙣𝙞 𝙨𝙪𝙧 👻 %1"
		}
	},

	onStart: async function ({ message, event, args, threadsData, getLang, commandName }) {
		if (["-r", "-react", "-reaction"].includes(args[0])) {
			if (args[1] == "set") {
				return message.reply(getLang("inputEmoji"), (err, info) =>
					global.GoatBot.onReaction.set(info.messageID, {
						type: "setEmoji",
						commandName,
						messageID: info.messageID,
						authorID: event.senderID
					})
				);
			}
			const isEnable = args[1] == "on" ? true : args[1] == "off" ? false : null;
			if (isEnable == null)
				return message.reply(getLang("invalidArgument"));
			await threadsData.set(event.threadID, isEnable, "data.translate.autoTranslateWhenReaction");
			return message.reply(isEnable ? getLang("turnOnTransWhenReaction") : getLang("turnOffTransWhenReaction"));
		}
		const { body = "" } = event;
		let content;
		let langCodeTrans;
		const langOfThread = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;

		if (event.messageReply) {
			content = event.messageReply.body;
			let lastIndexSeparator = body.lastIndexOf("->");
			if (lastIndexSeparator == -1)
				lastIndexSeparator = body.lastIndexOf("=>");

			if (lastIndexSeparator != -1 && (body.length - lastIndexSeparator == 4 || body.length - lastIndexSeparator == 5))
				langCodeTrans = body.slice(lastIndexSeparator + 2);
			else if ((args[0] || "").match(/\w{2,3}/))
				langCodeTrans = args[0].match(/\w{2,3}/)[0];
			else
				langCodeTrans = langOfThread;
		}
		else {
			content = event.body;
			let lastIndexSeparator = content.lastIndexOf("->");
			if (lastIndexSeparator == -1)
				lastIndexSeparator = content.lastIndexOf("=>");

			if (lastIndexSeparator != -1 && (content.length - lastIndexSeparator == 4 || content.length - lastIndexSeparator == 5)) {
				langCodeTrans = content.slice(lastIndexSeparator + 2);
				content = content.slice(content.indexOf(args[0]), lastIndexSeparator);
			}
			else
				langCodeTrans = langOfThread;
		}

		if (!content)
			return message.SyntaxError();
		translateAndSendMessage(content, langCodeTrans, message, getLang);
	},

	onChat: async ({ event, threadsData }) => {
		if (!await threadsData.get(event.threadID, "data.translate.autoTranslateWhenReaction"))
			return;
		global.GoatBot.onReaction.set(event.messageID, {
			commandName: 'translate',
			messageID: event.messageID,
			body: event.body,
			type: "translate"
		});
	},

	onReaction: async ({ message, Reaction, event, threadsData, getLang }) => {
		switch (Reaction.type) {
			case "setEmoji": {
				if (event.userID != Reaction.authorID)
					return;
				const emoji = event.reaction;
				if (!emoji)
					return;
				await threadsData.set(event.threadID, emoji, "data.translate.emojiTranslate");
				return message.reply(getLang("emojiSet", emoji), () => message.unsend(Reaction.messageID));
			}
			case "translate": {
				const emojiTrans = await threadsData.get(event.threadID, "data.translate.emojiTranslate") || "🌐";
				if (event.reaction == emojiTrans) {
					const langCodeTrans = await threadsData.get(event.threadID, "data.lang") || global.GoatBot.config.language;
					const content = Reaction.body;
					Reaction.delete();
					translateAndSendMessage(content, langCodeTrans, message, getLang);
				}
			}
		}
	}
};

async function translate(text, langCode) {
	const res = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${langCode}&dt=t&q=${encodeURIComponent(text)}`);
	return {
		text: res.data[0].map(item => item[0]).join(''),
		lang: res.data[2]
	};
}

async function translateAndSendMessage(content, langCodeTrans, message, getLang) {
	const { text, lang } = await translate(content.trim(), langCodeTrans.trim());
	return message.reply(`${text}\n\n${getLang("translateTo", lang, langCodeTrans)}`);
}
