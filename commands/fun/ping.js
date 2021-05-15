module.exports = {
    name: 'ping',
    guildOnly: true,
    help: {
        description: 'Donne ta latence.',
        syntax: ' '
    },
    run(client, message, args) {
        message.channel.send(`🏓 | Ta latence : **${Date.now() - message.createdTimestamp}ms.**`);
    },
};