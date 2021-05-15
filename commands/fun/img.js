const Discord = require ('discord.js')

module.exports = {
    run: async (client, message, args) => { 

        let text = args.join(" ");
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setFooter(message.guild.name + message.author.username)
            .setImage(text)
            .setColor("#ff0000")
             )
            message.delete();

                
    },
    name: 'img',
    guildOnly: true

}