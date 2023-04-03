module.exports = async (bot, message) => {
    if(!message.guild) return
    if(message.author.bot) return;
    if(bot.family.get(message.author.id) == null){
        bot.family.set(message.author.id, {
            username: message.member.user.username,
            parents:[],
            children:[],
            pair: 0
            }
        )
    }
    const prefix = "!"
    const {content, author, guild} = message;
    if(!bot.Memory.guilds.get(guild.id)) return;
    if(content.slice(0, prefix.length) !== prefix) return;


    const
        messageArray = content.split(' '),
        command = messageArray[0].replace(prefix, ""),
        args = messageArray.slice(1),
        messageArrayFull = content.split(' '),
        argsF = messageArrayFull.slice(1),
        commandRun = bot.commands.get(command);

    if(commandRun) commandRun(bot,message,args,argsF)
        //.then(any => console.log(any))
        .catch(err => console.error(err));
        
};