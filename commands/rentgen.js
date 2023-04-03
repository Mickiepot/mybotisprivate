module.exports = async (bot,message,args,argsF) => {
    message.channel.send({
        embeds: [{
            color: bot.color,
            title: `**:white_check_mark: Рентген.**`,
            image: {
                url: 'https://sportishka.com/uploads/posts/2021-12/thumbs/1638903854_21-sportishka-com-p-skelet-rentgen-sport-krasivo-foto-24.jpg',
            },
        }]
    })
};
module.exports.names = ["рентген", "rentgen"];