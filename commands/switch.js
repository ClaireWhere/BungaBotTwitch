module.exports = {
    data: {
        name: 'switch',
        description: `sends AAAAurora_'s switch friend code`,
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        client.say(channel, `AAAAurora_'s Switch Friend Code: SW-7622-4375-3126`);
    }
}