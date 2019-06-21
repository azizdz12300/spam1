const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', ("NTkxNzM5NDAxMjQ0MjQ2MDE2.XQ1KYg.5T_e6fgSk8mVTauGnFUToEqnBBI") => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["** تراه نحذير من عند اولفر  يبن القحبة لانك ضالم كثير ناس يبن شرموطةياكيلوا ياعهرا**"]
  setInterval(() => {
other.channels.get("591701938635276300").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NTA4MDE1OTM2NzkyNjkwNjkw.XQ0rsw.nmDhXDKZOJk_60vUqh5GZQRQYyg")
