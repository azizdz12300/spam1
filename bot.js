const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["** تراه نحذير من عند اولفر  يبن القحبة لانك ضالم كثير ناس يبن شرموطةياكيلوا ياعهرا**"]
  setInterval(() => {
other.channels.get("591701938114920489").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NDE5NDM2NTg4ODg4NzUyMTMw.XQ0m6A.jiQ_laDp0qGCH5uk09HcDn4-igY")
