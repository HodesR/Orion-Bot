const Discord = require('discord.js')

module.exports = {
    name: 'clear',
    guildOnly: true,
    help: {
        description: "Clear les messages !",
        syntax: '<Nombre de message>'
    },

    async run(message, args) {
        message.delete();
        if(!args[0]) return message.reply("**Entre le nombre de messages que tu veux clear !**");
        if(isNaN(args[0])) return message.reply("**Entre un vrai numéro !**");

        if(args[0] > 100) return message.reply("**Tu ne peux pas clear plus de 100 messages !**");
        if(args[0] < 1) return message.reply("**Tu dois clear au moins un message !**");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });

    }
}