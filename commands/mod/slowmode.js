const Discord = require('discord.js')

module.exports = {
    run: async(client, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.channel.send(new Discord.MessageEmbed()
            .setDescription('Vous n\'avez pas la permission d\'utiliser cette commande.')

            .setColor('#ff0000')
            .setFooter(message.client.user.username, message.client.user.avatarURL())
 )
        };
    
        if (!args[0])
          return message.channel.send(new Discord.MessageEmbed()
          .setDescription('Veuillez indiquer une durée valide.')
          .setColor('#ff0000')
          .setFooter(message.client.user.username, message.client.user.avatarURL())
 );
        if (isNaN(args[0])) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
          dynamic: true
      }))
        .setDescription('Ce n\'est pas un nombre valide !')
        .setColor('#ff0000')
        .setFooter(message.client.user.username, message.client.user.avatarURL())
 );
    
        message.channel.setRateLimitPerUser(args[0]);
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`Le mode lent de ce canal est réglé sur **${args[0]}**`)
        .setFooter(message.client.user.username, message.client.user.avatarURL())

        );
      },
    name: 'slowmode',
    guildOnly: true
    
}