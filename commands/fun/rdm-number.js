const Discord = require('discord.js')

module.exports = {
    run: (client, message, args) => {
        message.delete();
        random = Math.floor(Math.random() * 101) + 1;
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setTitle(`Nombre Random: **${random}**`)
        .setColor("#ff0000")
        .setFooter(message.client.user.username, message.client.user.avatarURL())
)
    },
    name: 'rdm-number'
    
}