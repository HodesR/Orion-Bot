const Discord = require('discord.js')
const colors = require('../../colors.json')
const client = require('../../index.js')
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
    name: 'bl',
    guildOnly: true,
    run: async(client, message, args) => {
        if (message.author.id === config.owner) {
            let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0])
            let noUser = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setDescription('Id un utilisateur valide.')
                .addField("Usage:", '`bl <utilisateur> `')
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            if (!User) return message.channel.send(noUser)

            let checkingBlacklisted = db.fetch(`blacklisted_${User.id}`)

            db.set(`blacklisted_${User.id}`, true)
            let blacklistedEmbed = new Discord.MessageEmbed()
                .setDescription('J\'ai bl **' + User + '**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            message.channel.send(blacklistedEmbed)
            if(checkingBlacklisted === true){
                let alreadyBlacklisted = new Discord.MessageEmbed()
                .setDescription('Cette utilisateur est déja bl !')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            return message.channel.send(alreadyBlacklisted)
            }
            
        } else {
            let cannotUse = new Discord.MessageEmbed()
                .setDescription('Seule le **OWNER** du bot arrivera a executer cette commande. ')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(cannotUse)
        }
    }
}