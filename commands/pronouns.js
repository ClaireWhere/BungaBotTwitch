export const data = {
    name: 'pronouns',
    description: `sends AAAAurora_'s pronouns in the chat`,
    defaultPermissions: false
};
export function execute(client, channel, tags, args) {
    client.say(channel, `AAAAurora_'s pronouns are she/her and xe/xer!`);
}