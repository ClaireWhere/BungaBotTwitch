module.exports = {
    data: {
        name: 'donate',
        description: `sends the Voices for Palestine donation link`,
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        client.say(channel, `Support the Voices for Palestine campaign! https://donate.tiltify.com/a933558c-bad2-4194-a246-d8c3743075cb`);
    }
};