const Discord = require ('discord.js')

module.exports = {
    run: async (client, message, args) => { 
        let user =  message.guild.members.cache.get(args[0]) || message.member;
        if (!message.member.hasPermission('MANAGE_MESSAGES')) 
        return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
 
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#ff0000')

        )
        if (!message.guild.me.hasPermission('MANAGE_MESSAGES'))         return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
 
        .setTitle('J\'ai pas les autorisation *MANAGE_MESSAGES* <:no:739179898110869514>.')
        .setColor('#ff0000')

        )
        let text = args.join(" ");
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))

            .setDescription(text)
            .setColor("#ff0000")
            .setFooter(message.client.user.username, message.client.user.avatarURL()) )
            message.delete();

                
    },
    name: 'embeds',
    guildOnly: true

}