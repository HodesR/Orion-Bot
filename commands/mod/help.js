const Discord = require('discord.js');
module.exports = {
    run: async(client, message, args) => {
        let embed = new Discord.MessageEmbed() 
            .setTitle('<a:812347665304125471:841655035791802438> **Liste des commandes** <a:812347665304125471:841655035791802438>')
            .addField("<:adm1:840186867080888320> ┋ __Owner__ ", "`wl`, `bl`")

            .addField("<:mod77:840186890165944332> ┋ __Modération__", "`ban`, `kick`, `tempban`,`clear`, `unban`, `mute`, `unmute`, `tempmute`, `slowmode`, `réglement`")

            .addField("<a:823538178622488616:840201003248255027> ┋ __Divertissement__", "`anonymous`, `fbi`, `poutine`, `trump`, `macron`, `cheh`, `meme`, `coinflip`, `issou`, `covid`, `8ball`, `nitro`, `panda`, `koala`, `fox`, `cat`, `dog`")

            .addField(" ┋ __NSFW__", "`hentai`, `boobs`, `hentai2`, `waifu`, `ass`, `wallpaper`")

            .addField("<:816750102881370203:840196254675107879> ┋ __Général__", "`help`, `invite`, `embed`,  `img`,  `ui`, `serv-info`, `sondage`, `about`,`ascii`, `reversetext`, `pic`, `fortnite`, `rdm-number`")

            .setThumbnail("https://images-ext-2.discordapp.net/external/O6jtAPBG6KpwR-rwj8JdtNpsDW90FD3Pt60HxQjWC_4/https/media.discordapp.net/attachments/833810455419682826/839130930693537832/MOSHED-2021-5-3-14-26-1.gif")
            .setFooter(message.client.username, message.client.user.avatarURL({ dynamic: true}))
            .setColor("#ff0000")
            .setTimestamp()
            message.channel.send(embed)
         
    },
    name: 'help'
    
}