const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, "GUILDS", "GUILD_MESSAGES", "DIRECT_MESSAGES"] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module
	client.commands.set(command.data.name, command);
}

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.on('messageCreate', message => {

	const messageOwner = message.author;
	const messageContent = message.content;

	// DEBUG
	// console.log(`${messageOwner.username} said: ${messageContent}`);

	// 350054304536854529 is __danger
	// 357709372778086402 is TheBobberBob
	if (messageOwner.id == '357709372778086402') {
		message.reply('https://imgur.com/TYbUnz9');
	}

	else if (messageOwner.id == '350054304536854529' && messageContent == 'test') {
		message.reply('Test successful!');
	}

	else if (messageContent == 'dylan') {
		message.reply('https://imgur.com/TYbUnz9');
	}
});

// Login to Discord with your client's token
client.login(token);
