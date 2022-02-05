// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Ready!');
    const guildList = client.guilds.cache.map(guild => guild.name)
    console.log(`Bot go online in ${guildList.length}`)
    console.log(guildList.join('\n'))
}); 

client.on('message', message => {
	console.log(message.content);
    message.reply('Hello World!');
});

// Login to Discord with your client's token
client.login(token);
