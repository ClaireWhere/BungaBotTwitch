module.exports = {
    data: {
        name: 'bungajoin',
        description: 'sends !join',
        defaultPermissions: false
    },
    execute(client, channel, tags, args) {
        if (isMod(tags)) {
            client.say(channel, '!join');
        }
    }
};

function isMod(tags) {
    try {
        if (tags.badges.broadcaster || tags.badges.moderator) return true;
    } catch (error) {
        return false;
    }
    return false;
}