module.exports = async (bot,message,args,argsF) => {
    const member = message.mentions.members.first();
    message.channel.send(`<@&1090619041569321124>, ${member.user.username} плохо!`);
    message.channel.send({
        embeds: [{
            color: bot.color,
            title: " Он нуждается в ** медицинской помощи **",
            image: {
                url: 'https://images-ext-1.discordapp.net/external/siurJwozBdMuGn9j360i4wu_VthDotnu52VCqcikD7A/https/kartinkin.net/pics/uploads/posts/2022-09/1662734163_56-kartinkin-net-p-tatu-skoraya-pomoshch-krasivo-60.jpg?width=713&height=473',
            },
        }]
    })
};
module.exports.names = ["112"];