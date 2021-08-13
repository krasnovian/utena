const config = require('./config.json');
const fetch = require('node-fetch');

const twitterIds = config.Twitter.UserIds;

const bearerToken = config.Twitter.token;

const getTweets = async () => {
  let tweets = [];

  let today = new Date();
  let yesterday = new Date(today);

  yesterday.setDate(yesterday.getDate() - 1);

  let params = {
    "max_results": 20,
  }

  const options = {
    headers: {
      "authorization": `Bearer ${bearerToken}`
    }
  }

  console.log('Retrieving tweets...')

  for (const account of twitterIds) {
    let url = `https://api.twitter.com/2/users/${account.id}/tweets?max_results=20`;
    console.log(`url: ${url}`);
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': bearerToken,
      }
    })
      .then(res => console.log('Success: ' + JSON.stringify(res)))
      .catch(e => console.log('Fail: ' + e))

    console.log(JSON.stringify(response));

  }

}

module.exports = getTweets();

getTweets();