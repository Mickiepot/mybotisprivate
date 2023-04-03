module.exports = async (bot, message)=>{
    //проверки
    if(bot.family.get(`${message.member.id}.pair`) !== 0){
        return message.reply({
            embeds:[{
                color:bot.color,
                title:"<:no:1092101459878883350> Ошибка!\n Вы уже имеет партнера."
            }]
        })
    }
    const futurePair = message.mentions.members.first() ? message.mentions.members.first() : undefined
    if(!futurePair){
        return message.reply({
            embeds:[{
                color:bot.color,
                title: "<:no:1092101459878883350> Ошибка!\n Укажите партнера."
            }]
        })
    }
    if(futurePair.id === message.member.id){
        return message.reply({
            embeds:[{
                color:bot.color,
                title:"<:no:1092101459878883350> Ошибка!\n Укажите партнера."
            }]
        })
    }
    if(futurePair.user.bot){
        if(futurePair.id === bot.application.id){
            return message.reply({
                embeds:[{
                    color:bot.color,
                    title:"<:no:1092101459878883350> Ошибка!\n Укажите партнера."
                }]
            })
        }
        return message.reply({
            embeds:[{
                color: bot.color,
                title:"<:no:1092101459878883350> Ошибка!\n Укажите партнера."
            }]
        })
    }
 // предложение руки и сердца
    const msg = await message.channel.send({
        embeds:[{
            color:bot.color,
            title: "<:love:1092103805702783096> Свадьбы",
            description:`**${message.author} сделал(а) предложение руки и сердца пользователю ${futurePair}. Согласны ли Вы на брак?**`
        }],
        components:[{
            type: 'ACTION_ROW',
            components: [
                {
                    type: 'BUTTON', //Это кнопочка
                    label: ' ', //Это имя кнопочки
                    customId: 'okey', //Это ID кнопочки
                    style: 'SECONDARY', //Стиль кнопочки
                    emoji: "<:yes:1092100659282718743>", //Эмоджи кнопочки
                    disabled: false //Включена ли кнопочка
                },
                {
                    type: 'BUTTON', //Это кнопочка
                    label: ' ', //Это имя кнопочки
                    customId: 'notokey', //Это ID кнопочки
                    style: 'SECONDARY', //Стиль кнопочки
                    emoji: "<:no:1092101459878883350>", //Эмоджи кнопочки
                    disabled: false //Включена ли кнопочка
                }
            ]
        }]
    })
    const collector = await msg.createMessageComponentCollector();

    collector.on('collect', interaction => {
        if(interaction.user.id !== futurePair.id){
            return interaction.reply({
                ephemeral:true,
                embeds:[{
                    color:bot.color,
                    title:"<:no:1092101459878883350> Ошибка!\nПредложение адресовано не тебе"
                }]
            })
        }
        if (interaction.customId === "okey"){
            interaction.reply({
                embeds:[{
                    color:bot.color,
                    title:`<:love:1092103805702783096> Свадьбы`,
                    description:`**${futurePair} принял(а) предложение.**`
                }]
            })
            bot.family.set(`${futurePair.id}.pair`,message.member.id)
            bot.family.set(`${message.member.id}.pair`, futurePair.id)
        }
        if (interaction.customId === "notokey"){
            return interaction.reply({
                embeds:[{
                    color:bot.color,
                    title:`<:love:1092103805702783096> Свадьбы`,
                    description:`**${futurePair} отвергл(а) предложение.**`
                }]
            })
        }

    })
}
module.exports.names = ["marry"]