module.exports = async (bot,message,args,argsF) => {
    message.channel.send({
        embeds: [{
            color: bot.color,
            title: `**:white_check_mark: Ясная и теплая погода.**`,
            image: {
                url: 'https://avatars.dzeninfra.ru/get-zen_doc/96780/pub_62f9fbcfa991ef0af5cfe60b_62f9fbde110b126813a4e1e0/scale_1200',
            },
        }]
    })
};
module.exports.names = ["тепло", "yasno"];