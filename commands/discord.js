module.exports = {
    data: {
        name: 'discord',
        description: 'sends discord information',
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        client.say(channel, `Join The Official AAAAurora_ Discord Server! https://discord.gg/FQxZMCUAch`);
    }
}