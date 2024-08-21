module.exports = {
  config: {
    name: "spam",
    aurthor:"kim/zed",// Convert By Goatbot Zed
     role: 2,
    shortDescription: " ",
    longDescription: "",
    category: "sophia",
    guide: "{pn}"
  },

  onStart: async function ({ api, event, args }) {
	const amount = parseInt(args[0]);
	const message = args.slice(1).join(" ");

	if (isNaN(amount) || !message) {
		return api.sendMessage("𝙐𝙩𝙞𝙡𝙞𝙨𝙖𝙩𝙞𝙤𝙣 𝙞𝙣𝙫𝙖𝙡𝙞𝙙𝙚. 𝙐𝙨𝙖𝙜𝙚: /𝙘𝙤𝙪𝙧𝙧𝙞𝙚𝙧 𝙞𝙣𝙙é𝙨𝙞𝙧𝙖𝙗𝙡𝙚 [𝙢𝙤𝙣𝙩𝙖𝙣𝙩] [𝙢𝙚𝙨𝙨𝙖𝙜𝙚]", event.threadID);
	}

	for (let i = 0; i < amount; i++) {
		api.sendMessage(message, event.threadID);
	}
  },
};
