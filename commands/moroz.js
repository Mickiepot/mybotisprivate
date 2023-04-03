module.exports = async (bot,message,args,argsF) => {
    message.channel.send({
        embeds: [{
            color: bot.color,
            title: `**:white_check_mark: Морозно.**`,
            image: {
                url: 'https://celes.club/uploads/posts/2021-12/thumbs/1640829598_2-celes-club-p-zimnyaya-metel-priroda-krasivo-foto-4.jpg',
            },
        }]
    })
};
module.exports.names = ["мороз", "moroz"];