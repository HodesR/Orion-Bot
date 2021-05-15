const Discord = require('discord.js')
const colors = require('../../colors.json')
const client = require('../../index')
const db = require('quick.db')
const config = require('../../config.json')

module.exports = {
    name: 'wl',
    guildOnly: true, 
    help: {
        description: 'Whitelist des utilisateurs.',
        syntaxe: ' <@utilisateur>'
    },

    run: async(client, message, args) => {
        if (message.author.id === config.owner) {
            let User = await message.mentions.members.first() || message.guild.members.cache.get(args[0])
            
            let noUser = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setDescription('Id un utilisateur valide !')
                .addField("Usage:", '`wl <utilisateur> `')
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            if (!User) return message.channel.send(noUser)

            let checkingBlacklisted = db.fetch(`blacklisted_${User.id}`)

            if(!checkingBlacklisted === true){
                let alreadyBlacklisted = new Discord.MessageEmbed()
                .setDescription('Cette utilisateur n\'est pas bl !')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setFooter(message.client.user.username, message.client.user.avatarURL())

            return message.channel.send(alreadyBlacklisted)
            }

            db.delete(`blacklisted_${User.id}`)
            let blacklistedEmbed = new Discord.MessageEmbed()
                .setDescription('J\'ai wl **' + User + '**')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(blacklistedEmbed)
            
            
        } else {
            let cannotUse = new Discord.MessageEmbed()
                .setDescription('Tu ne peux pas utiliser cette commande [ elle n\'est disponible que pour les **OWNER** ].')
                .setAuthor(message.author.username, message.author.avatarURL({
                    dynamic: true
                }))
                .setColor(colors.red)
                .setFooter(message.client.user.username, message.client.user.avatarURL())
            message.channel.send(cannotUse)
        }
    }
}