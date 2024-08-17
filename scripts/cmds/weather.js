const axios = require("axios");
const moment = require("moment-timezone");
const Canvas = require("canvas");
const fs = require("fs-extra");

Canvas.registerFont(
	__dirname + "/assets/font/BeVietnamPro-SemiBold.ttf", {
	family: "BeVietnamPro-SemiBold"
});
Canvas.registerFont(
	__dirname + "/assets/font/BeVietnamPro-Regular.ttf", {
	family: "BeVietnamPro-Regular"
});

function convertFtoC(F) {
	return Math.floor((F - 32) / 1.8);
}
function formatHours(hours) {
	return moment(hours).tz("Asia/Ho_Chi_Minh").format("HH[h]mm[p]");
}

module.exports = {
	config: {
		name: "weather",
		version: "1.2",
		author: "NTKhang",
		countDown: 5,
		role: 0,
		description: {
			vi: "xem dự báo thời tiết hiện tại và 5 ngày sau",
			en: "view the current and next 5 days weather forecast"
		},
		category: "other",
		guide: {
			vi: "{pn} <địa điểm>",
			en: "{pn} <location>"
		},
		envGlobal: {
			weatherApiKey: "d7e795ae6a0d44aaa8abb1a0a7ac19e4"
		}
	},

	langs: {
		vi: {
			syntaxError: "Vui lòng nhập địa điểm",
			notFound: "Không thể tìm thấy địa điểm: %1",
			error: "Đã xảy ra lỗi: %1",
			today: "Thời tiết hôm nay: %1\n%2\n🌡 Nhiệt độ thấp nhất - cao nhất %3°C - %4°C\n🌡 Nhiệt độ cảm nhận được %5°C - %6°C\n🌅 Mặt trời mọc %7\n🌄 Mặt trời lặn %8\n🌃 Mặt trăng mọc %9\n🏙️ Mặt trăng lặn %10\n🌞 Ban ngày: %11\n🌙 Ban đêm: %12"
		},
		en: {
			syntaxError: "𝙑𝙚𝙪𝙞𝙡𝙡𝙚𝙯 𝙨𝙖𝙞𝙨𝙞𝙧 𝙪𝙣 𝙡𝙞𝙚𝙪 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻",
			notFound: "𝙀𝙢𝙥𝙡𝙖𝙘𝙚𝙢𝙚𝙣𝙩 𝙣𝙤𝙣 𝙩𝙧𝙤𝙪𝙫é 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: %1",
			error: "𝙐𝙣𝙚 𝙚𝙧𝙧𝙚𝙪𝙧 𝙨'𝙚𝙨𝙩 𝙥𝙧𝙤𝙙𝙪𝙞𝙩𝙚 𝙘𝙝𝙚𝙯 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻: %1",
			today: "𝙈é𝙩é𝙤 𝙙'𝙖𝙪𝙟𝙤𝙪𝙧𝙙'𝙝𝙪𝙞 👻: %1\n%2\n🌡 𝙏𝙚𝙢𝙥é𝙧𝙖𝙩𝙪𝙧𝙚 𝙗𝙖𝙨𝙨𝙚 - 𝙝𝙖𝙪𝙩𝙚 👻 %3°C - %4°C\n🌡 𝙊𝙣 𝙙𝙞𝙧𝙖𝙞𝙩 𝙦𝙪𝙚 %5°C - %6°C\n🌅 𝙇𝙚𝙫𝙚𝙧 𝙙𝙪 𝙨𝙤𝙡𝙚𝙞𝙡 %7\n🌄 𝘾𝙤𝙪𝙘𝙝𝙚𝙧 𝙙𝙚 𝙨𝙤𝙡𝙚𝙞𝙡 %8\n🌃 𝙇𝙚𝙫𝙚𝙧 𝙙𝙚 𝙡𝙪𝙣𝙚 %9\n🏙️ 𝘾𝙤𝙪𝙘𝙝𝙚𝙧 𝙙𝙚 𝙡𝙪𝙣𝙚 %10\n🌞 𝙅𝙤𝙪𝙧: %11\n🌙 𝙉𝙪𝙞𝙩: %12"
		}
	},

	onStart: async function ({ args, message, envGlobal, getLang }) {
		const apikey = envGlobal.weatherApiKey;

		const area = args.join(" ");
		if (!area)
			return message.reply(getLang("syntaxError"));
		let areaKey, dataWeather, areaName;

		try {
			const response = (await axios.get(`https://api.accuweather.com/locations/v1/cities/search.json?q=${encodeURIComponent(area)}&apikey=${apikey}&language=vi-vn`)).data;
			if (response.length == 0)
				return message.reply(getLang("notFound", area));
			const data = response[0];
			areaKey = data.Key;
			areaName = data.LocalizedName;
		}
		catch (err) {
			return message.reply(getLang("error", err.response.data.Message));
		}

		try {
			dataWeather = (await axios.get(`http://api.accuweather.com/forecasts/v1/daily/10day/${areaKey}?apikey=${apikey}&details=true&language=vi`)).data;
		}
		catch (err) {
			return message.reply(`❌ Đã xảy ra lỗi: ${err.response.data.Message}`);
		}

		const dataWeatherDaily = dataWeather.DailyForecasts;
		const dataWeatherToday = dataWeatherDaily[0];
		const msg = getLang("today", areaName, dataWeather.Headline.Text, convertFtoC(dataWeatherToday.Temperature.Minimum.Value), convertFtoC(dataWeatherToday.Temperature.Maximum.Value), convertFtoC(dataWeatherToday.RealFeelTemperature.Minimum.Value), convertFtoC(dataWeatherToday.RealFeelTemperature.Maximum.Value), formatHours(dataWeatherToday.Sun.Rise), formatHours(dataWeatherToday.Sun.Set), formatHours(dataWeatherToday.Moon.Rise), formatHours(dataWeatherToday.Moon.Set), dataWeatherToday.Day.LongPhrase, dataWeatherToday.Night.LongPhrase);

		const bg = await Canvas.loadImage(__dirname + "/assets/image/bgWeather.jpg");
		const { width, height } = bg;
		const canvas = Canvas.createCanvas(width, height);
		const ctx = canvas.getContext("2d");
		ctx.drawImage(bg, 0, 0, width, height);
		let X = 100;
		ctx.fillStyle = "#ffffff";
		const data = dataWeather.DailyForecasts.slice(0, 7);
		for (const item of data) {
			const icon = await Canvas.loadImage("http://vortex.accuweather.com/adc2010/images/slate/icons/" + item.Day.Icon + ".svg");
			ctx.drawImage(icon, X, 210, 80, 80);

			ctx.font = "30px BeVietnamPro-SemiBold";
			const maxC = `${convertFtoC(item.Temperature.Maximum.Value)}°C `;
			ctx.fillText(maxC, X, 366);

			ctx.font = "30px BeVietnamPro-Regular";
			const minC = String(`${convertFtoC(item.Temperature.Minimum.Value)}°C`);
			const day = moment(item.Date).format("DD");
			ctx.fillText(minC, X, 445);
			ctx.fillText(day, X + 20, 140);

			X += 135;
		}

		const pathSaveImg = `${__dirname}/tmp/weather_${areaKey}.jpg`;
		fs.writeFileSync(pathSaveImg, canvas.toBuffer());

		return message.reply({
			body: msg,
			attachment: fs.createReadStream(pathSaveImg)
		}, () => fs.unlinkSync(pathSaveImg));

	}
};
