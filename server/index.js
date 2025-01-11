require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient, twitterBearer , T} = require("./twitterClient.js")
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const { TwitterApi } = require("twitter-api-v2");
const CALLBACK_URL = "http://localhost:3000"

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })

const bearer = new TwitterApi({clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET});

    

// const tweet = async () => {
//   try {
//     await twitterClient.v2.tweet("Hello world! Testing @the_first_elder again");
//   } catch (e) {
//     console.log(e)
//   }
// }

// tweet();

async function listenForTweets() {
    try {
        const rules = await twitterBearer.v2.sampleStream();
        console.log("Existing rules:", rules.data || []);
        
    } catch (error) {
        console.log(error)
    }

    // 29887497
    //   console.log("Listening for tweets...");
    //   for await (const { data } of stream) {
    //     console.log("data is ", data);
    //     const tweetText = data.text.toLowerCase();
    //     const tweetId = data.id;
    //     const userId = data.author_id;

    //     console.log(`Tweet received: ${tweetText}`);

    //     await twitterClient.v2.reply(
    //         `🎉 Hello ${userId}\n Its nice to have you here 🌹`,
    //         tweetId
    //       );

    //   }
}

listenForTweets().catch(console.error)