const Discord = require ('discord.js')
const axios = require('axios')

module.exports = {
    run: async (client, message, args) => { 
        const url = 'https://some-random-api.ml/meme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setTitle(`Une erreur s'est produite !`)
            .addField("__**Serveur Support :**__", "[**Cliquez ici**](https://discord.gg/bmMhtjb)")
            .setImage("https://thumbs.gfycat.com/ActualThoughtfulDwarfmongoose-size_restricted.gif")
            .setFooter(message.client.user.username, message.client.user.avatarURL()) )
        }

        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
            .setTitle(`Même aléatoire : `)
            .setDescription(data.caption)
            .setColor('#ff0000')
            .setImage(data.image)   
            .setFooter(message.client.user.username, message.client.user.avatarURL())


      )
    },
    name: 'meme',
    guildOnly: true
}