module.exports = {
    data: {
        name: 'tip',
        description: `sends AAAAurora_'s Streamlabs tip link`,
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        client.say(channel, `Any support is appreciated! https://streamlabs.com/aaaaurora_/tip`);
    }
};