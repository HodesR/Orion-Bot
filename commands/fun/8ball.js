const Discord = require('discord.js'),
    replies = ['Oui', 'Non', 'Peut être', 'Evidemment']
 
module.exports = {
    run: (client, message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
            .setTitle(question)
            .setDescription(replies[Math.floor(Math.random() * replies.length)]))
            .setFooter(message.client.user.username, message.client.user.avatarURL())
            
    },
    name: '8ball',
    guildOnly: true,
    help: {
        description: 'Je répond a vos questions au pif.',
        syntax: '[question]'
    }
}
