const { data: _data, execute: _execute } = require('./switch.js');

module.exports = {
    data: {
        name: 'fc',
        description: _data.description,
        defaultPermissions: _data.defaultPermissions,
    },
    execute(client, channel, tags, args) {
        _execute(client, channel, tags, args);
    }
};