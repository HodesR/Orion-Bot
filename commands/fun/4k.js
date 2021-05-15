const Discord = require('discord.js');
MessageEmbed = require("discord.js");
var superagent = require("superagent");
module.exports = {
    run: (client, message, args) => {
        
        if(!message.channel.nsfw) return message.channel.send('**Vous n\'avez pas la permission d\'envoyez des images ou autres NSFW !**');
        var lo = new Discord.MessageEmbed()
        .setDescription(`**Merci de patienté.**`)
        .setTimestamp()
        message.channel.send(lo).then(m => {
            superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setDescription(`Image 4K`)
            .setTimestamp()
            .setImage(response.body.message)
            .setFooter(message.client.user.username, message.client.user.avatarURL())
            m.edit(embed_nsfw)
            })
        })
    },
    name: '4k',
    guilOnly: true,
    help: {
        description: 'Cette commande permet de renvoyer une image 4k',
        syntax: ' ' 
    }
}