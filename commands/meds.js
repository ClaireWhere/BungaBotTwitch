module.exports = {
    data: {
        name: 'meds',
        description: `take your meds!`,
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        client.say(channel, `take your meds or get Bunga Blasted™`);
    }
}