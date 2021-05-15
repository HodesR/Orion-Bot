const Discord = require('discord.js')
const colors = require('../../colors.json')
const client = require('../../index.js')
const db = require('quick.db')

module.exports = {
    name: 'snipe',
    guildOnly: true,
   run: async(client, message, args) => {
        let msg = await db.get(`msg_${message.channel.id}`)
        if (!msg) {
            return message.channel.send(`There Nothing to snipe`)
        }
        let author = await db.get(`author_${message.channel.id}`)
        let icon = message.guild.iconURL()
        let embed = new Discord.MessageEmbed()
            .setAuthor(message.client.users.cache.get(author).tag, message.client.users.cache.get(author).displayAvatarURL({ dynamic: true}))
            .setDescription(msg)
            .setFooter(message.client.user.username, message.client.user.displayAvatarURL())
            .setColor("#ff0000")
        message.channel.send(embed)

    }
}