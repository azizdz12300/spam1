const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["**تراه نحذير من عند اولفر  يبن القحبة لانك تضلم في ناس يبن شرموطة**"]
  setInterval(() => {
other.channels.get("559721071398617102").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NTYzMDg1ODEwMDAyNTU4OTk4.XKUODQ.KMSW_XTM_wsSx6UWhcqvqJAhxjE")
