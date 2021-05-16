const Discord = require('discord.js')
module.exports = {
    run: (client, message, args) => {
    message.channel.send(new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({
        dynamic: true
    }))
        .setTitle("Informations sur " + `>Orion' de la charité `)
        .addField('**Développeur :**', `Hodés#0007`, true)
        .addField("**📂 Version de discord.js :**", `v12.2.0`, true)
        .addField("**Lien d'invitation :**", "[**Cliquez ici**](https://discord.com/api/oauth2/authorize?client_id=832945533583753255&permissions=8&scope=bot)", true)

        .setFooter(message.client.user.username, message.client.user.avatarURL())
        .setColor("#ff0000")
        .setTimestamp()
        )
    },
    name: 'about'
    
}
