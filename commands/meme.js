const { Command } = require('yuuko');
const got = require('got');

module.exports = new Command('meme', msg => {
  got('https://www.reddit.com/r/memes/random/.json')
    .then(res => {
      const [list] = JSON.parse(res.body);
      const [post] = list.data.children;

      const permalink = post.data.permalink;
      const memeUrl = `https://reddit.com${permalink}`;
      const memeImage = post.data.url;
      const memeTitle = post.data.title;
      const memeUpvotes = post.data.ups;
      const memeNumComments = post.data.num_comments;

      msg.channel.createMessage({
        embed: {
          title: memeTitle,
          url: memeUrl,
          image: {
            url: memeImage
          },
          color: 15105570,
          footer: {
            text: `${memeUpvotes} upvotes and ${memeNumComments} comments`,
          },
        },
      });
    })
    .catch(err => {console.log(err)});
});