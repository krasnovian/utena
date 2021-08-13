const { Command } = require('yuuko');
const config = require('../config.json');
module.exports = new Command(['roll', 'rolladie', 'rolladice'], (msg, args) => {
  const arg = args.join(' ');
  if (!args.length) {
    msg.channel.createMessage({
      embed: {
        title: `${msg.author.username} rolld a die!`,
        description: `${msg.author.mention} rolled a die and got **${Math.floor(Math.random() * 6) + 1}**`,
        color: 12242021,
        fields: [
        ],
      },
    });
  }
  else {
    try {
      const num = arg.trim().split('d');
      const times = parseInt(num[0]);
      const max = parseInt(num[1]) || 6;
      const nums = [];
      for(let i = 0; i < times; i++) {
        let result = Math.floor(Math.random() * max);
        result = result + 1;
        nums.push(result);
      }
      msg.channel.createMessage({
        embed: {
          title: `${msg.author.username} rolled a ${times} dice!`,
          description: `${msg.author.mention} rolled ${times} dice and got [ **${nums.join(' ')}** ]!`,
          color: 12252021,
        },
      });
    }
    catch(err) {
      console.warn(err);
      msg.channel.createMessage(`${msg.author.mention}, the correct usage would be \`.\` roll <number of dice to roll>d<highest number on the die>\``)
    }
  }
});