module.exports = async (bot,message,args,argsF) => {
    if(message.author.id !== "216623303882833920" && message.author.id !== "964552023276146770" ) return;
    bot.Memory.save()
    message.author.reply({
        embeds:[{
            color:bot.color,
            title: "Сохранил"
        }]
    })
};
module.exports.names = ["save"];
