other.login("")
const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["الوووووووووووووووووووو افصح الطريق في بوتت سبام يجمع كردت طيط طيط لولو رح ولعها كردت"]
  setInterval(() => {
other.channels.get("591701938635276300").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NDE5NDM2NTg4ODg4NzUyMTMw.XQ1GAg.bN3VVLQAQQeiJUtYlcpF7pBNH2E")
