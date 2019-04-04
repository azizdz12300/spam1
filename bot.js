const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["** تراه نحذير من عند اولفر  يبن القحبة لانك ضالم كثير ناس يبن شرموطةياكيلوا ياعهرا**"]
  setInterval(() => {
other.channels.get("559721071398617102").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NTYzMDk1NjE5MzYzNjY3OTc5.XKUWYA.jx3hpBlff4uj1xjB9KovSjqIKYc")
