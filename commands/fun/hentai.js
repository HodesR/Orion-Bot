const Discord = require ('discord.js')
const superagent = require('superagent');

module.exports = {
    run: async (client, message, args) => { 
        if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setDescription("Ce salon n'est pas __**NSFW**__ <:nsfw:768073097395044382> !")
        .setFooter(message.client.user.username, message.client.user.avatarURL()) )

        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/Random_hentai_gif");
        message.channel.send(new Discord.MessageEmbed()

            .setColor("#ff0000")
            .setImage(body.url)
            .setFooter(message.client.user.username, message.client.user.avatarURL())
 )
    },
    name: 'hentai',
    guildOnly: true
}