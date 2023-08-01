module.exports = {
    data: {
        name: 'arena',
        description: 'sets up a Smash arena',
        defaultPermissions: false,
        arena_id: null
    },
    
    execute(client, channel, tags, args) {
        if (args[0] != null && isMod(tags)) {
            const subcommand = args[0].toLowerCase();
            if (subcommand === 'set') {
                this.data.arena_id = args[1];
                client.say(channel, `Arena set to ${args[1]}, use !arena in the chat to view it`);
                return;
            }
            if (subcommand === 'clear') {
                this.data.arena_id = null;
                client.say(channel, `Arena cleared`);
                return;
            }
            if (['?', 'help', 'h'].includes(subcommand)) {
                client.say(channel, `!arena command usage -> !arena set [arena id]  |  !arena clear  |  arena currently has ${this.data.arena_id === null ? 'no value' : `the value ${this.data.arena_id}`}`);
                return;
            }
        }
        
        if (this.data.arena_id === null) {
            client.say(channel, `There is no arena going on right now!`);
            return;
        }
        client.say(channel, `Arena ID: ${this.data.arena_id}`);
        return;
    }
}

function isMod(tags) {
    try {
        if (tags.badges.broadcaster || tags.badges.moderator) return true;
    } catch (error) {
        return false;
    }
    return false;
}