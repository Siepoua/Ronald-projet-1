const fs = require('fs');
const moment = require('moment-timezone');
const os = require('os');
const si = require('systeminformation');
const { performance } = require('perf_hooks');

module.exports = {
    config: {
        name: "info",
        version: "1.0",
        author: "Itz Aryan",
        countDown: 5,
        role: 0,
        shortDescription: { vi: "", en: "" },
        longDescription: { vi: "", en: "" },
        category: "owner",
        guide: { en: "" },
        envConfig: {}
    },
    onStart: async function ({ message }) {
        const botName = "𝘾𝙝𝙧𝙞𝙨𝙩𝙚𝙡𝙡𝙚 𝙡𝙚 𝙛𝙖𝙣𝙩ô𝙢𝙚 👻";
        const botPrefix = ".";
        const now = moment().tz('Asia/Jakarta');
        const date = now.format('MMMM Do YYYY');
        const time = now.format('h:mm:ss A');
        const uptime = process.uptime();
        const seconds = Math.floor(uptime % 60);
        const minutes = Math.floor((uptime / 60) % 60);
        const hours = Math.floor((uptime / (60 * 60)) % 24);
        const days = Math.floor(uptime / (60 * 60 * 24));
        const uptimeString = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

        const cpu = os.cpus()[0].model;
        const cores = os.cpus().length;
        const arch = os.arch();
        const platform = os.platform();
        const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2);
        const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2);
        const usedMemory = (totalMemory - freeMemory).toFixed(2);

        // Disk information
        const diskInfo = await si.fsSize();
        const totalDisk = (diskInfo[0].size / (1024 ** 3)).toFixed(2);
        const usedDisk = (diskInfo[0].used / (1024 ** 3)).toFixed(2);
        const freeDisk = (diskInfo[0].available / (1024 ** 3)).toFixed(2);

        // Initialize link with a placeholder or handle properly based on your requirements
        const links = [
            "https://i.imgur.com/uVBM67t.jpeg",
            "https://i.imgur.com/NaxvRNg.jpeg"
        ];
        const link = links[Math.floor(Math.random() * links.length)];

        // Network information
        const networkInterfaces = os.networkInterfaces();
        const primaryInterface = Object.keys(networkInterfaces)[0];
        const ipAddress = networkInterfaces[primaryInterface][0].address;

        // System Load
        const load = os.loadavg();
        const loadString = `1m: ${load[0].toFixed(2)}, 5m: ${load[1].toFixed(2)}, 15m: ${load[2].toFixed(2)}`;

        // Speed (ping)
        const start = performance.now();
        await new Promise(resolve => setTimeout(resolve, 100));
        const end = performance.now();
        const ping = (end - start).toFixed(2);

        // Reply message construction
        message.reply({
            body: `ã€Š ð—•ð—¢ð—§ ð—¢ð—ªð—¡ð—˜ð—¥ ð—œð—¡ð—™ð—¢ ã€‹
\Name: ${botName}
\Bot Prefix: ${botPrefix}
\Date: ${date}
\Time: ${time}
\Uptime: ${uptimeString}
=============== 
ã€Š ð—¦ð—¬ð—¦ð—§ð—˜ð—  ð—œð—¡ð—™ð—¢ ã€‹
\CPU: ${cpu}
\Cores: ${cores}
\Architecture: ${arch}
\Platform: ${platform}
\Total Memory: ${totalMemory} GB
\Used Memory: ${usedMemory} GB
\Free Memory: ${freeMemory} GB
=============== 
ã€Š ð——ð—œð—¦ð—ž ð—œð—¡ð—™ð—¢ ã€‹
\Total Disk: ${totalDisk} GB
\Used Disk: ${usedDisk} GB
\Free Disk: ${freeDisk} GB
=============== 
ã€Š ð—¡ð—˜ð—§ð—ªð—¢ð—¥ð—ž ð—œð—¡ð—™ð—¢ ã€‹
\IP Address: ${ipAddress}
=============== 
ã€Š ð—¦ð—¬ð—¦ð—§ð—˜ð—  ð—Ÿð—¢ð—”ð—— ã€‹
\Load (1m): ${load[0].toFixed(2)}
\Load (5m): ${load[1].toFixed(2)}
\Load (15m): ${load[2].toFixed(2)}
=============== 
ã€Š ð—£ð—˜ð—¥ð—™ð—¢ð—¥ð— ð—”ð—¡ð—–ð—˜ ð—œð—¡ð—™ð—¢ ã€‹
\Ping: ${ping} ms
===============`,
            attachment: await global.utils.getStreamFromURL(link)
        });
    },
    onChat: async function ({ event, message, getLang }) {
        if (event.body && event.body.toLowerCase() === "info") {
            this.onStart({ message });
        }
    }
};
