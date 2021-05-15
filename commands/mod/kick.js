const Discord = require ('discord.js')

module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) 
        
        return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setDescription('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        const member = message.mentions.members.first()

        if (!member) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setDescription('Veuillez mentionner le membre à exclure.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )

        if (member.id === message.guild.ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))

        .setDescription('Vous ne pouvez pas exclure le propriétaire du serveur.')

        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) 
        return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setDescription('Le bot ne peut pas exclure ce membre !')
        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        if (!member.kickable) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))

        .setDescription('Le bot ne peut pas exclure ce membre.')
        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        )
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.kick(reason)
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        
        .setDescription(`<a:kick:768081756380987422> ${member.user.tag} a été exclu !`) 
        .setColor('#ff0000')
        .setFooter(embed.footer) )
    },
    name: 'kick',
    guildOnly: true
}