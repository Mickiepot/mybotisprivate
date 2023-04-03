module.exports = async (bot)=>{
    console.log(bot.user.username + ' Запустился!')

    bot.user.setPresence({ activities: [{ name: 'Приватный бот для Арабии' }], status: 'idle' });

	setInterval(() => {
        bot.user.setPresence({
            activities:[{
                //syncId: '31e6f8c1ff05433c',
                name: 'for gridnev',
                type: 2
            }]
        })
    }, 1000*60*60)
}



