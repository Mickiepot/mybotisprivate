module.exports = async (bot, message, args, argsF) => {
    // Проверяем, что команда введена правильно
    if (!args[0] || !message.mentions.users.first()) {
      return message.channel.send({
        embeds: [{
          color: bot.color,
          title: `<:no:1092101459878883350> Ошибка!\n Неправильное использование команды!`,
          description: `Чтобы заточить пользователя в деморган, используйте команду \`!посадить @пользователь\`.`
        }]
      });
    }
  
    // Получаем упомянутого пользователя и роль для тюрьмы
    const user = message.mentions.users.first();
    const jailRole = message.guild.roles.cache.get('1090619131289686127');
  
    // Проверяем, что роль существует и что бот имеет разрешение для управления ролями
    if (jailRole.id === message.member.roles.highest.id) {
    // пользователь пытается выдать роль самому себе
      return message.channel.send({
        embeds: [{
          color: bot.color,
          title: `<:no:1092101459878883350> Ошибка!`,
          description: `Вы не можете выдать эту роль самому себе.`
        }]
      });
    }
      // Проверяем, что пользователь имеет права администратора
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.channel.send({
        embeds: [{
          color: bot.color,
          title: `<:no:1092101459878883350> Ошибка!`,
          description: `У вас недостаточно прав для использования этой команды.`
        }]
      });
    }
  
  // продолжаем дальше, если проверка прошла успешн
  
    if (!jailRole) {
      return message.channel.send({
        embeds: [{
          color: bot.color,
          title: `<:no:1092101459878883350> Ошибка!`,
          description: `Роль для тюрьмы не найдена.`
        }]
      });
    }
    if (!message.guild.me.permissions.has('MANAGE_ROLES')) {
      return message.channel.send({
        embeds: [{
          color: bot.color,
          title: `<:no:1092101459878883350> Ошибка!`,
          description: `У меня нет прав для управления ролями.`
        }]
      });
    }
  
    // Добавляем роль для тюрьмы пользователю
    try {
      const member = await message.guild.members.fetch(user.id);
      await member.roles.add(jailRole);
      message.channel.send({
        embeds: [{
          color: bot.color,
          title: `<:ban:1092151571883774093> Деморган`,
          fields: [
          {
            name: 'Пользователь:',
            value: `\`\`\`${user.username}\`\`\``,
            inline: true
          },
          {
            name: 'Администратор:',
            value: `${message.member}`,
            inline: true
          }
        ],
          footer: {
            text: `${new Date().toLocaleString()}`
          }
        }]
      });
  
    } catch (err) {
      message.channel.send({
        embeds: [{
          color: bot.color,
          title: `<:no:1092101459878883350> Ошибка!`,
          description: `Не удалось добавить роль для тюрьмы пользователю.`
        }]
      });
    }
  };
  
  module.exports.names = ["jail", "посадить"];
  