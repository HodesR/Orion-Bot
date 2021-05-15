const Discord = require ('discord.js')

module.exports = {
    run: async (client, message, args) => { 
        message.delete();
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
            .setTitle(` __**${user.user.username}**__`)
            .setColor(`ff0000`)
            .setImage(user.user.displayAvatarURL({ size: 4096, dynamic : true}))
            .setFooter(message.client.user.username, message.client.user.avatarURL())


 )
                
    },
    name: 'pic',

}
