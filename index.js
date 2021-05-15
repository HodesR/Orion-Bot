{ 
const db = require('quick.db');
const Discord = require('discord.js');
    client = new Discord.Client({
        partials: ['MESSAGE', 'REACTION'],
        fetchAllMembers: true
    }),
    config = require('./config.json'),
    { readdirSync } = require('fs'),
    fs = require('fs'),
    humanizeDuration = require('humanize-duration'),
    cooldown = new Set()
const { MessageEmbed } = require ('discord.js');

client.login(config.token);

client.commands = new Discord.Collection();

client.aliases = new Discord.Collection();

client.db = require('./db.json');
}
{
    
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});
    
client.on('ready', () => {
    console.log(`${client.user.tag} bot connecté`)
    client.user.setStatus('Online')
    const statuses = [
        () => `${client.guilds.cache.size} serveurs`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} utilisateurs`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
});


client.on('message', message => {
 
    const args = message.content.trim().split(/ +/g)
    const commandName = args.shift().toLowerCase()
    if (!commandName.startsWith(config.prefix)) return
    const command = client.commands.get(commandName.slice(config.prefix.length))
    if (!command) return
    if (command.guildOnly && !message.guild) return message.channel.send('Cette commande ne peut être utilisée que dans un serveur.')
    command.run(client, message, args)
});

client.on('channelCreate', channel => {
    if (!channel.guild) return
    const muteRole = channel.guild.roles.cache.find(role => role.name === 'Muted')
    if (!muteRole) return
    channel.createOverwrite(muteRole, {
        SEND_MESSAGES: false,
        CONNECT: false,
        ADD_REACTIONS: false
    });
});

client.on('webhookUpdate', async (channel) => {
    channel.guild.fetchAuditLogs({limit: 1, type: "WEBHOOK_CREATE"}).then(data => {
        const value = data.entries.first();
        if (value && value.executor) {
            const member = channel.guild.members.cache.get(value.executor.id);
            if (member)
                member.kick().catch(reason => console.error(reason.message)).then(() => console.log(`${member.user.tag} kicked because of webhook created !`));
        }
    }).catch(err => console.error(err.message))
    channel.fetchWebhooks().then(webs => webs.each(w => w.delete().catch(reason => console.error(reason.message)).then(() => console.log('Webhook deleted successfully')))).catch(error => console.error(error.message))

});

client.on('message', async message => {
    if (!message.content.startsWith(config.PREFIX)) return;


    const args = message.content.slice(config.PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    let checkingBlacklistedMembers = db.fetch(`blacklisted_${message.author.id}`)
    if (checkingBlacklistedMembers === null) {
        checkingBlacklistedMembers === false
    }


    let blacklistedEmbed = new Discord.MessageEmbed()
        .setTitle("TU A ETE BLACKLIST")
        .setColor(colors.red)
        .setDescription("Vous avez été mis sur la blackliste de mes commandes. Si vous souhaitez faire appel, veuillez DM <@"+ config.DMtoUnbanID +"> pour plus d\'info.")
        .setFooter(`${client.user.username}`, client.user.avatarURL())

    if (checkingBlacklistedMembers === true) return message.channel.send(blacklistedEmbed)

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;
    try {
        command.execute(message, args, client);
        console.log(chalk.greenBright('[COMMAND]'), `${message.author.tag} used the command ` + commandName)
    } catch (error) {
        console.log(error);
        message.reply('une erreur s\'est produite lors de la tentative d\'exécution de cette commande! ```\n' + error + "\n```");
    }
})

client.on('ready', () => {
    const statuses = [
        () => `.gg/slide`,
        () => `${config.prefix}help `,
        () => `${client.guilds.cache.size} Serveurs`,
        () => `${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)} Utilisateurs`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
});
const Discord = require('discord.js');
client.on('guildMemberAdd', member => {
    let embed1 = new Discord.MessageEmbed()
    .setTitle("Bienvenue a toi 💗 !")
    .setFooter(`Nous sommes désormais ${member.guild.memberCount} membres 📈®`)
    .setAuthor(`${member.user.username} `, member.user.displayAvatarURL())
    .setColor("#ff0000")
    .setImage("https://images-ext-2.discordapp.net/external/O6jtAPBG6KpwR-rwj8JdtNpsDW90FD3Pt60HxQjWC_4/https/media.discordapp.net/attachments/833810455419682826/839130930693537832/MOSHED-2021-5-3-14-26-1.gif")
    member.send(embed1);
});
}
const Discord = require('discord.js');
client.on('guildMemberAdd', member => {
    let embed2 = new Discord.MessageEmbed()
    .setTitle("Bienvenue a toi !")
    .setFooter(`Nous sommes désormais ${member.guild.memberCount} membres 📈®`)
    .setAuthor(`${member.user.username} \n Merci d'avoir rejoint le serveur.`, member.user.displayAvatarURL())
    .setColor("#ff0000")
    .setThumbnail("https://images-ext-2.discordapp.net/external/O6jtAPBG6KpwR-rwj8JdtNpsDW90FD3Pt60HxQjWC_4/https/media.discordapp.net/attachments/833810455419682826/839130930693537832/MOSHED-2021-5-3-14-26-1.gif")

    member.guild.channels.cache.get("CHANNEL ID").send(embed2)

});


client.on("guildMemberRemove", member => {
    let embed = new Discord.MessageEmbed()
    .setTitle("Aurevoir !")
    .setFooter(`Nous sommes désormais ${member.guild.memberCount} membres 📉®`)
    .setAuthor(`${member.user.username} \n Un utilisateur nous a quitté.`, member.user.displayAvatarURL())
    .setColor("#ff0000")
    .setThumbnail("https://images-ext-2.discordapp.net/external/O6jtAPBG6KpwR-rwj8JdtNpsDW90FD3Pt60HxQjWC_4/https/media.discordapp.net/attachments/833810455419682826/839130930693537832/MOSHED-2021-5-3-14-26-1.gif")

    member.guild.channels.cache.get("CHANNEL ID").send(embed)
});