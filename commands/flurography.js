module.exports = async (bot,message,args,argsF) => {
    message.channel.send({
        embeds: [{
            color: bot.color,
            title: `**:white_check_mark: Флюрография.**`,
            image: {
                url: 'https://static.tildacdn.com/tild6334-3930-4532-b836-353738663838/ls_tgdoyf4q.jpg',
            },
        }]
    })
};
module.exports.names = ["флюрография", "flurography"];