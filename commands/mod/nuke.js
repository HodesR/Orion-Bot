const Discord = require('discord.js')

module.exports = {
    name: 'nuke',
    run: (client, message, args) => {
        if (!message.member.hasPermission('ADMINISTRATOR')) {
            message.channel.send('missing permissions')
        }

        message.channel.clone().then(channel => {
            channel.setPosition(message.channel.position)
            let embed = new Discord.MessageEmbed()
            .setTitle('Nuked')
            .setImage('https://media0.giphy.com/media/oe33xf3B50fsc/200.gif')
            .setFooter('>Skbot')
            .setThumbnail('https://cdn.discordapp.com/attachments/832253142301147178/833676977432952912/Sans_titre_1.png')
            message.channel.send(embed)
        })
        message.channel.delete()
        
    },
};
