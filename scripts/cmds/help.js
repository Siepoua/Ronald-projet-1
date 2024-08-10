const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 👻 | 𝘾𝙃𝙍𝙄𝙎𝙏𝙀𝙇𝙇𝙀 ]"; // changing this wont change the goatbot V2 of list cmd it is just a decoyy

module.exports = {
  config: {
    name: "help",
    version: "1.17",
    author: "NTKhang", // original author Kshitiz 
    countDown: 10,
    role: 0,
    shortDescription: {
      en: "View command usage and list all commands directly",
    },
    longDescription: {
      en: "View command usage and list all commands directly",
    },
    category: "info",
    guide: {
      en: "{pn} / help cmdName ",
    },
    priority: 1,
  },

  onStart: async function ({ message, args, event, threadsData, role }) {
    const { threadID } = event;
    const threadData = await threadsData.get(threadID);
    const prefix = getPrefix(threadID);

    if (args.length === 0) {
      const categories = {};
      let msg = "";

      msg += `╔═══════════╗\n     ✰𝘾𝙃𝙍𝙄𝙎𝙏𝙀𝙇𝙇𝙀✰\n╚═══════════╝`; // replace with your name 

      for (const [name, value] of commands) {
        if (value.config.role > 1 && role < value.config.role) continue;

        const category = value.config.category || "Uncategorized";
        categories[category] = categories[category] || { commands: [] };
        categories[category].commands.push(name);
      }

      Object.keys(categories).forEach((category) => {
        if (category !== "info") {
          msg += `\n╭─────────\n│ 『  ${category.toUpperCase()}  』`;

          const names = categories[category].commands.sort();
          for (let i = 0; i < names.length; i += 3) {
            const cmds = names.slice(i, i + 3).map((item) => `👻${item}`);
            msg += `\n│ ${cmds.join(" ".repeat(Math.max(1, 10 - cmds.join("").length)))}`;
          }

          msg += `\n╰────────ꔪ`;
        }
      });

      const totalCommands = commands.size;
      msg += `\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁𝗹𝘆, 𝘁𝗵𝗲 𝗯𝗼𝘁 𝗵𝗮𝘀 ${totalCommands} 𝘾𝙤𝙢𝙢𝙖𝙣𝙙𝙚𝙨 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻 𝙥𝙤𝙪𝙫𝙖𝙣𝙩 ê𝙩𝙧𝙚 𝙪𝙩𝙞𝙡𝙞𝙨é𝙚𝙨\n`;
      msg += `𝗧𝘆𝗽𝗲 ${prefix} 𝙖𝙞𝙙𝙚𝙯 𝙘𝙢𝙙𝙣𝙖𝙢𝙚 à 𝙖𝙛𝙛𝙞𝙘𝙝𝙚𝙧 𝙡𝙚𝙨 𝙙é𝙩𝙖𝙞𝙡𝙨 𝙙𝙚 𝙘𝙚𝙩𝙩𝙚 𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙚 𝙙𝙚 𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 👻.\n`;
      msg += `👻 | 𝘾𝙃𝙍𝙄𝙎𝙏𝙀𝙇𝙇𝙀`; // its not decoy so change it if you want 

      await message.reply(msg);
    } else {
      const commandName = args[0].toLowerCase();
      const command = commands.get(commandName) || commands.get(aliases.get(commandName));

      if (!command) {
        await message.reply(`Command "${commandName}" not found.`);
      } else {
        const configCommand = command.config;
        const roleText = roleTextToString(configCommand.role);
        const author = configCommand.author || "Unknown";

        const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

        const guideBody = configCommand.guide?.en || "No guide available.";
        const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

        const response = `╭── 𝙉𝙊𝙈 ────⭓
  │ ${configCommand.name}
  ├── 𝙄𝙉𝙁𝙊 👻
  │ 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐭𝐢𝐨𝐧: ${longDescription}
  │ 𝐀𝐮𝐭𝐫𝐞𝐬 𝐧𝐨𝐦𝐬: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"}
  │ 𝐀𝐮𝐭𝐫𝐞𝐬 𝐧𝐨𝐦𝐬 𝐝𝐚𝐧𝐬 𝐯𝐨𝐭𝐫𝐞 𝐠𝐫𝐨𝐮𝐩𝐞 : 𝐍'𝐨𝐧𝐭 𝐩𝐚𝐬
  │ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧: ${configCommand.version || "1.0"}
  │ 𝐑ô𝐥𝐞: ${roleText}
  │ 𝐓𝐞𝐦𝐩𝐬 𝐩𝐚𝐫 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞 𝐝𝐞 𝐂𝐡𝐫𝐢𝐬𝐭𝐞𝐥𝐥𝐞: ${configCommand.countDown || 1}s
  │ 𝐀𝐮𝐭𝐞𝐮𝐫: ${author}
  ├── 𝙐𝙨𝙖𝙜𝙚 👻
  │ ${usage}
  ├── 𝙍𝙚𝙢𝙖𝙧𝙦𝙪𝙚𝙨 👻
  │ 𝐋𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐮 à 𝐥'𝐢𝐧𝐭é𝐫𝐢𝐞𝐮𝐫 𝐝𝐞 <𝐗𝐗𝐗𝐗𝐗> 𝐩𝐞𝐮𝐭 ê𝐭𝐫𝐞 𝐦𝐨𝐝𝐢𝐟𝐢é
  │ 𝐋𝐞 𝐜𝐨𝐧𝐭𝐞𝐧𝐮 à 𝐥'𝐢𝐧𝐭é𝐫𝐢𝐞𝐮𝐫 𝐝𝐞 [𝐚|𝐛|𝐜] 𝐞𝐬𝐭 𝐚 𝐨𝐮 𝐛 𝐨𝐮 𝐜
  ╰━━━━━━━❖`;

        await message.reply(response);
      }
    }
  },
};

function roleTextToString(roleText) {
  switch (roleText) {
    case 0:
      return "0 (All users)";
    case 1:
      return "1 (Group administrators)";
    case 2:
      return "2 (Admin bot)";
    default:
      return "Unknown role";
  }
	      }
