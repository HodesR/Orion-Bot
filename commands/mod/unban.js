  
const Discord = require ('discord.js')

module.exports = {
    run: async (client, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) 
        
        return message.channel.send(new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
        .setDescription('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor('#ff0000')

        )
        const member = args[0];

        if (!member) {
             return message.channel.send(new Discord.MessageEmbed()
             .setDescription(`Veuillez saisir un identifiant !`) 
             )
        }

        try {
            message.guild.fetchBans().then(bans => {
                message.guild.members.unban(member)
            })
            await message.channel.send(new Discord.MessageEmbed()
            .setDescription(`${member} est unban !`)
            )
        } catch (e) {
            return message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setTitle(`Une erreur s'est produite !`)
            .addField("D.m le dev")
            .setImage("https://thumbs.gfycat.com/ActualThoughtfulDwarfmongoose-size_restricted.gif")
            .setFooter(message.client.user.username, message.client.user.avatarURL()) )
        }

    },
    name: 'unban',
    guildOnly: true
}