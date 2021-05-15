const Discord = require('discord.js'),
    moment = require('moment')
 
module.exports = {
    run: async(client, message, args) => {
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
            .addField('Name', message.guild.name, true)
            .addField('Région', message.guild.region, true)
            .addField('Member', `${message.guild.memberCount} membres\n${message.guild.members.cache.filter(member => !member.user.bot).size} humains\n${message.guild.members.cache.filter(member => member.user.bot).size} bots`, true)
            .addField('Channel', `${message.guild.channels.cache.size} salons\n${message.guild.channels.cache.filter(channel => channel.type === 'text').size} salons textuels\n${message.guild.channels.cache.filter(channel => channel.type === 'voice').size} salons vocaux\n${message.guild.channels.cache.filter(channel => channel.type === 'category').size} catégories`, true)
            .addField('Emojis', `${message.guild.emojis.cache.size} emojis\n${message.guild.emojis.cache.filter(emoji => !emoji.animated).size} emojis statiques\n${message.guild.emojis.cache.filter(emoji => emoji.animated).size} emojis animés`, true)
            .addField('Rôles', message.guild.roles.cache.size, true)
            .addField('Founder', message.guild.owner, true)
            .addField('Date of creation', moment(message.guild.createdAt).format('[Le] DD/MM/YYYY [à] HH:mm:ss'), true)
            .addField('Nitro boost', `Tier : ${message.guild.premiumTier}\nNombre de boosts : ${message.guild.premiumSubscriptionCount}`, true)
            .setFooter(`ID : ${message.guild.id}`)
            .setThumbnail(message.guild.iconURL())
            .setImage(message.guild.bannerURL()))
    },
    name: 'server-info',
    guildOnly: true,
    help: {
        description: 'Donne toutes les infos du serveur.',
        syntax: ' '
    }
    
}