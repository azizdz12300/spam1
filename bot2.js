const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhانا بوت جمع كردت لول ناسسسس كردات "]
  setInterval(() => {
other.channels.get("591701938635276300").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NTYyMzYzOTM4ODYwMzAyMzQ1.XQ0oeA.PLR4Q1h7kOe9IL959JCGs2khIGg")
