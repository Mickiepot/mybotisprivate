module.exports = async (bot,message,args,argsF) => {
    message.channel.send({
        embeds: [{
            color: bot.color,           
            title: `Доступные вещи:`,
description:` ◦ С вами всегда будет присутствовать инвентарь, в котором возможно будет находится:\n
:bread: **Еда** » макароны, соль, сахар, тушёнка, чай, грибы, помидоры, огурцы, алкоголь и прочее.. (конретно уточняйте с Членом Команды, который принимает Вашу анкету).
:shirt: **Одежда** » рабочая (повседневная), военная, полевая... (конретно уточняйте с Членом Команды, который принимает Вашу анкету).
:dagger: **Оружие** » Пистолеты, пистолеты-пулеметы, штурмовые винтовки/карабины, снайперские винтовки, дробовики, пулеметы, арбалеты/гранатометы/луки и т.п (конретно уточняйте с Членом Команды, который принимает Вашу анкету), нелетальное оружие, гранаты и др. взрывчатые предметы, комплектующие для оружия / патроны
:briefcase: **ППН (Предметы Первой Необходимости)** » древесина, порох, спички, сигареты, посуда полевая, фонарь, карта, медицинская аптечка, инструменты по дереву, металлу, тонким работам, кувалда, топор, молоток, пила и т.п. (конкретно уточняйте с Членом Команды, который принимает Вашу анкету).`,
image: {
    url: 'https://cdn.discordapp.com/attachments/1090619195655467098/1092157929882394754/invent.jpg',
},
}]
})
};
module.exports.names = ["invent", "inv", "инвентарь", "инвент"];