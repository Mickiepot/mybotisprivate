module.exports = async (bot,message,args,argsF) => {
    message.channel.send({
        embeds: [{
            color: bot.color,
            title: `**:white_check_mark: Уровень глюкозы в крови 3.3.**`,
            image: {
                url: 'https://blog.zdorovekrasota.ru/wp-content/uploads/2019/04/chto-snizhaet-saxar-v-krovi.jpg',
            },
        }]
    })
};
module.exports.names = ["сахар", "suger"];