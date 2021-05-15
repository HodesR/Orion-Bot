const Discord = require ('discord.js')
const fetch = require("node-fetch");

module.exports = {
    run: async (client, message, args) => { 
        let user =  message.guild.members.cache.get(args[0]) || message.member;
        const text = args.join(" ");

		function reverseString(text)	{
			var splitString = text.split("");
			var reverseArray = splitString.reverse();
			var joinArray = reverseArray.join("");

            return         message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({
                dynamic: true
            }))
            .setTitle(joinArray)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setImage("https://media.giphy.com/media/TqkuOoKtmYI80/giphy.gif")
            .setFooter(message.client.user.username, message.client.user.avatarURL())
            );
		}
        reverseString(text);
        
    },
    name: 'reversetext',
    guildOnly: true
}