module.exports = {
    data: {
        name: 'roblox',
        description: `sends AAAAurora_'s Roblox username in chat`,
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        client.say(channel, `AAAAurora_'s Roblox username is Yahoo22334455667788`);
    }
}