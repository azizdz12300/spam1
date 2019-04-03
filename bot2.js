const Discord = require('discord.js');
const other = new Discord.Client();

other.on('ready', () => {
  console.log(`Logged in as ${other.user.tag}!`);
});

other.on('ready', async () => {
      let ReBeL = ["**تحذير يبن القحبة يا كيلوا**"]
  setInterval(() => {
other.channels.get("559721071398617102").send(`${ReBeL[Math.floor(Math.random() *ReBeL.length)]}`);//لا تنسى تحط أيدي الروم
},300);
});

other.login("NTYyMzYzOTM4ODYwMzAyMzQ13242s04QuvtueLnIiRE4")
