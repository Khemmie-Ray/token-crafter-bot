const { TwitterApi } = require("twitter-api-v2");
const Twit = require('twit')

const T = new Twit({
    consumer_key:  process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token:process.env.ACCESS_TOKEN,
    access_token_secret:process.env.ACCESS_SECRET,
  })

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_SECRET,
});

const bearer = new TwitterApi(process.env.BEARER_TOKEN);

const twitterClient = client.readWrite;
const twitterBearer = bearer.readOnly;

module.exports = { twitterClient, twitterBearer, T };