const Discord = require('discord.js')
config = require('../../config.json');
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'réglement',
    guildOnly: true,
    help: {
    description: 'Affiche le réglement du serveur',
    syntax: '<@role>'
 
},
    run: async(client, message, args) => {

        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Vous n\'avez pas la permission d\'utiliser cette commande !**')
        message.channel.send(new MessageEmbed()
        .setTitle('**Le réglement :**')
        .setColor('#FF0000')
        .addField("Voici le réglement discord (TOS) à respecter : " ,'https://discord.com/terms')
        .setURL("https://discord.com/privacy")
        .setThumbnail("https://cdn.discordapp.com/attachments/833677726002315346/833691758432354344/Naruto_Pictures_Memes_and_Gifs_-_Sasuke_Uchiha_gifs.gif")
        .setFooter(message.client.user.username, message.client.user.avatarURL({ dynamic: true }))
        
        )}
}
