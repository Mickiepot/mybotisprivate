module.exports = async (bot,message,args,argsF) => {
    message.channel.send({
        embeds: [{
            color: bot.color,
            title: `**:white_check_mark: Идёт сильный порыв ветра 3м/c.**`,
            image: {
                url: 'https://www.b17.ru/foto/article/287429.jpg',
            },
        }]
    })
};
module.exports.names = ["ветер", "veter"];