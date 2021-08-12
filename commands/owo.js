const { Command } = require('yuuko');
module.exports = new Command('owo', (msg, args, context) => {
  msg.channel.createMessage('0w0');
});