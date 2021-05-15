const Discord = require ('discord.js')
const fetch = require("node-fetch");

module.exports = {
    run: async (client, message, args) => { 
        
      const input = args.join(" ");
      if (input.length > 10) return message.channel.send("10 caractères maximum.");
      const text = encodeURI(input);

      fetch(`http://artii.herokuapp.com/make?text=${text}`)
        .then(result => result.text()).then(body => {
            if(!body) return message.channel.send(new Discord.MessageEmbed()
            .setAuthor(message.author.username, message.author.avatarURL({
              dynamic: true
          }))
            .setTitle("Désolé, je n'ai pas pu obtenir l'art ascii. Réessayez plus tard.")
            .setDescription("```$ascii (text)```")
            .setColor("#ff0000")
            .setFooter(message.client.user.username, message.client.user.avatarURL())

            
            );

            message.channel.send(`\`\`\`${body}\`\`\``);
        }).catch(error => {
      console.log(error.stack);
      return message.channel.send(new Discord.MessageEmbed()
      .setAuthor(message.author.username, message.author.avatarURL({
        dynamic: true
    }))
      .setTitle("Désolé, je n'ai pas pu obtenir l'image. Réessayez plus tard.")
      .setDescription("```$ascii (text)```")
      .setColor("#ff0000")
      .setFooter(message.client.user.username, message.client.user.avatarURL())

      );
    });
    },
    name: 'ascii',
    guildOnly: true
}