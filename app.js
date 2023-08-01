require('dotenv').config();

const tmi = require('tmi.js');
const fs = require('node:fs');
const CommandCollection = require('./classes/CommandCollection.js');

const client = new tmi.Client({
    options: {
        debug: true,
        messageLogLevel: "info"
    },
    connection: {
        reconnect: true,
        secure: true
    },
    identity: {
        username: `${process.env.TWITCH_USERNAME}`,
        password: `oauth:${process.env.TWITCH_OAUTH}`
    },
    channels: [`${process.env.TWITCH_CHANNEL}`]
});

client.connect().catch(console.error);


// Command Initialization
var commands = new CommandCollection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    try {
        commands.set(command.data.name, command);
        console.log(`initialized command ${command.data.name}`);
    } catch (error) {
        console.error(`ERROR: could not initialize command from file: ${file} (${error})`);
    }
}

// Command Execution
client.on('message', (channel, tags, message, self) => {
    if (self || !message.startsWith('!')) return;
    
    const args = message.slice(1).split(' ');
    const command_str = args.shift().toLowerCase();

    const command = commands.get(command_str);
    if (!command) return;

    try {
        command.execute(client, channel, tags, args);
    } catch (error) {
        console.error(`ERROR: Could not execute command ${command_str} (${error})`);
    }
});

