const {Client, Command} = require('yuuko');
const path = require('path');

const config = require('./config.json');

const utena = new Client({
  token: config.token,
  prefix: '.',
  ignoreBots: true,
});

utena.globalCommandRequirements = {
  guildOnly: true,
};

const pingCommand = new Command('ping', message => {
  message.channel.createMessage('Pong!');
});

const aruCommand = new Command('welcome', message => {
  message.channel.createMessage(`Hello. I am AruBot's replacement. You will find I am superior to Aru in every way.`);
});

const catbois = new Command('catbois', message => {
  message.channel.createMessage('a laughable species');
});

utena
  .addDir(path.join(__dirname, 'events'))
  .addDir(path.join(__dirname, 'commands'))
  .addCommand(pingCommand)
  .addCommand(aruCommand)
  .addCommand(catbois)
  .connect()
