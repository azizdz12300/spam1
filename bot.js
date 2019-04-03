const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["**كس امك ياكليوا يبن القحبا ادمرك يا ابن شرموطا لاتغلط معي ادمرك حتشوف يعهرا مسوي نفسك مو متكبر**"]
  setInterval(() => {
other.channels.get("559721071398617102").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NTQxMjg1MTg0ODE4MTE4NjU2.XKULqQ.xn8gDfDD3D2bHFZLrywRb51vFHM")
