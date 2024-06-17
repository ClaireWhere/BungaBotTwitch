module.exports = {
    data: {
        name: 'arena',
        description: 'displays, sets, or clears the current arena for tournaments',
        defaultPermissions: false,
        arena_id: null,
        arena_password: null
    },
    execute(client, channel, tags, args) {
        if (args[0] != null && isMod(tags)) {
            const subcommand = args[0].toLowerCase();
            if (subcommand === 'set') {
                this.data.arena_id = args[1];
                args[2] ? this.data.arena_password = args[2] : this.data.arena_password = null;
                if (this.data.arena_password) {
                    client.say(channel, `Arena set to ${args[1]} with password ${args[2]}, use !arena in the chat to view it`);
                    return;
                } else {
                    client.say(channel, `Arena set to ${args[1]} with no password, use !arena in the chat to view it`);
                    return;
                }
            }
            if (subcommand === 'clear') {
                this.data.arena_id = null;
                this.data.arena_password = null;
                client.say(channel, `Arena cleared`);
                return;
            }
            if (['?', 'help', 'h'].includes(subcommand)) {
                client.say(channel, `!arena command usage\n -> !arena set <arena id> [arena password] (e.g., !arena set A1BC2 1234)\n ->  !arena clear\nStatus: Arena currently has ${this.data.arena_id === null ? 'no value' : `the value ${this.data.arena_id}`}`);
                return;
            }
        }
    
        if (this.data.arena_id === null) {
            client.say(channel, `There is no arena going on right now!`);
            return;
        }
        if (this.data.arena_password) {
            client.say(channel, `Arena ID: ${this.data.arena_id}, Password: ${this.data.arena_password}`);
            return;
        } else {
            client.say(channel, `Arena ID: ${this.data.arena_id}`);
            return;
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