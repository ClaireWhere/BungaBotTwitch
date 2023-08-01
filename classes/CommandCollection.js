class CommandCollection {
    constructor() {
        this.commands = [];
    }

    set(command_name, command) {
        this.commands.push({
            command_name: command_name,
            command: command
        });
    }
    get(command_str) {
        const command = this.commands.find(element => element.command_name === command_str);
        if (command === undefined) return undefined;
        return command.command;
    }
}

module.exports = CommandCollection;