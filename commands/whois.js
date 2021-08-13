const { Command } = require('yuuko');
const moment = require('moment');
module.exports = new Command(['whois', 'member'], async (msg, args, context) => {
  if (!args[0]) {
    return msg.channel.createMessage(`Sorry ${msg.author.mention}. Please specify a particular member.`);
  }
  const user = msg.mentions[0];
  const guild = msg.channel.guild;
  const member = await guild.members.get(user.id);

  msg.channel.createMessage({
    embed: {
      title: `User information for ${user.username}#${user.discriminator}`,
      thumbnail: {
        url: user.avatarURL,
      },
      color: 0x008000,
      fields: [
        {
          name: 'Account created at:',
          value: `${moment.utc(user.createdAt).toLocaleString()}`,
          inline: false,
        },
        {
          name: 'User ID:',
          value: `\`${user.id}\``,
          inline: false,
        },
        {
          name: 'Roles',
          value: '<@&' + member.roles.map( r => `${r}`).join('>, <@&') + '>',
          inline: false,
        },
        {
          name: 'Joined server at:',
          value: `${moment.utc(member.joinedAt).toLocaleString()}`,
          inline: false
        }
      ]
    }
  })
})