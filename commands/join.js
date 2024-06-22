module.exports = {
    data: {
        name: 'bungajoin',
        description: `sends !join`,
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        client.say(channel, `!join`);
    }
};