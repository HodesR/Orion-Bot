const Discord = require ('discord.js')
module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) 
        return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
 
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        
        
        const member = message.mentions.members.first()

        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setTitle('Veuillez mentionner le membre à bannir.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )

        if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setTitle('Vous ne pouvez pas bannir le propriétaire du serveur.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas Bannir ce membre.')
        
        if (!member.bannable) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))

        .setTitle('Le bot ne peut pas bannir ce membre.')
        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setTitle(`<a:moderation> ${member.user.tag} a été banni !`) 
        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())
        )
    },
    name: 'ban',
    guildOnly: true
}