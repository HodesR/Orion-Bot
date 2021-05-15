  
const Discord = require ('discord.js')

module.exports = {
    run: async (client, message, args) => { 
        message.delete();
        const question = args.join(" ");
        let user =  message.guild.members.cache.get(args[0]) || message.member;
        if (!message.member.permissions.has("MANAGE_MESSAGES"))
        return message.channel.send(new Discord.MessageEmbed()
        .setTitle('Vous n\'avez pas la permission d\'utiliser cette commande.')

        .setColor(`#ff0000`)

         )
		const voteEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL({
            dynamic: true
        }))
		.setTitle("Sondage 📈")
        .setDescription(question)
        .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
        .setColor("#ff0000")
        .setFooter(message.client.user.username, message.client.user.avatarURL())

		message.channel.send({embed: voteEmbed}).then(embedMessage => {
				embedMessage.react('📗').then(() => embedMessage.react('📕'))
		});
	
      
    },
    name: 'sondage',
    guildOnly: true
}