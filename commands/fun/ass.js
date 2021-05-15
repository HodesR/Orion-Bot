const Discord = require ('discord.js')
const fetch = require('node-fetch')

module.exports = {
    run: async(client, message, args) => { 
        if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed()
        .setTitle("Ce salon n'est pas __**NSFW**__ <:nsfw:768073097395044382> !") )

        const data = await fetch("http://api.obutts.ru/butts/0/1/random").then(res => res.json());

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))

            .setColor("RANDOM")
            .setImage(`http://media.obutts.ru/${data[0].preview}`)
            .setFooter(message.client.user.username, message.client.user.avatarURL())
 )
    },
    name: 'ass',
    guildOnly: true
}