const Discord = require ('discord.js')

const parseDuration = require('parse-duration'),
    humanizeDuration = require('humanize-duration')
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
        .setTitle('Vous ne pouvez pas bannir le propriétaire du serveur.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) 
        return message.channel.send(new Discord.MessageEmbed()

        .setTitle('Vous ne pouvez pas ban ce membre.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        
        if (!member.bannable) return message.channel.send(new Discord.MessageEmbed()

        .setTitle('Le bot ne peut pas bannir ce membre.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        const duration = parseDuration(args[1])
        if (!duration) return message.channel.send(new Discord.MessageEmbed()
        
        .setTitle('Veuillez indiquer une durée valide.')
        .setColor('#00d9ff')
        .setFooter(message.client.user.username, message.client.user.avatarURL())
        
        )

        const reason = args.slice(2).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`${member.user.tag} a été banni pendant ${humanizeDuration(duration, {language: 'fr'})} !`) 
        .setColor('#ff0000'))
        .setFooter(message.client.user.username, message.client.user.avatarURL())
        setTimeout(() => {
            message.guild.members.unban(member)
            message.channel.send(new Discord.MessageEmbed()
            .setTitle(`${member.user.tag} a été débanni.`)
            .setColor('#ff0000')
            .setFooter(message.client.user.username, message.client.user.avatarURL())
            )
        }, duration)
    },

    name: 'tempban',
    guildOnly: true
}