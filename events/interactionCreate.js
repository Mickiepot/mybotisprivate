const { Permissions } = require('discord.js');
module.exports = async (bot, interaction) => {
    if(bot.family.get(interaction.member.id) == null){
        bot.family.set(interaction.member.id, {
                username: interaction.member.user.username,
                parents:[],
                children:[],
                pair: 0
            }
        )
    }
};