module.exports = {
    data: {
        name: 'bunga-join',
        description: `sends !join`,
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        client.say(channel, `!join`);
    }
};