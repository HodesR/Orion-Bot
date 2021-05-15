const Discord = require ('discord.js')
const axios = require('axios')

module.exports = {
    run: async (client, message, args) => { 
        const url = "https://some-random-api.ml/img/panda";
        const facts = "https://some-random-api.ml/facts/panda"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

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

            .setColor(`#ff0000`)
            .setImage(image.link)
            .setFooter(message.client.user.username, message.client.user.avatarURL())

      )
    },
    name: 'panda',
    guildOnly: true
}