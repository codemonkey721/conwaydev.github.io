const fs = require('fs');
const puppeteer = require('puppeteer');

function writeFiles(tweets) {
    tweets.forEach(async tweet => {
        const tweetTime = tweet.timestamp.split(' - ');
        await fs.writeFile(`_tweets/${tweet.id}.md`, `---
id: ${tweet.id}
permalink: ${tweet.permalink}
likes: ${tweet.likes}
retweets: ${tweet.retweets}
date: ${new Date( tweetTime[1] ).toISOString()}
---

${tweet.text}`, () => console.log('nice'));
    });
}

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(`https://twitter.com/conwaydev`);

        const tweets = await page.evaluate(() => {
            let elements = Array.from(document.querySelectorAll('.js-stream-tweet'));

            let ret = [];

            for (let i = 0; i < elements.length; i += 1) {
                if (elements[i].getAttribute('data-screen-name') === 'conwaydev') {
                    let tweet = {};

                    tweet.text = elements[i].querySelector('.tweet-text').textContent;
                    tweet.timestamp = elements[i].querySelector('.tweet-timestamp').getAttribute('title');
                    tweet.id = elements[i].getAttribute('data-tweet-id');
                    tweet.permalink = elements[i].getAttribute('data-permalink-path');

                    let actions = elements[i].querySelectorAll('.ProfileTweet-actionCountForPresentation');

                    for (let j = 0; j < actions.length; j += 1) {
                        tweet.retweets = actions[1].innerHTML ? actions[1].innerHTML : 0;
                        tweet.likes = actions[3].innerHTML ? actions[3].innerHTML : 0;
                    }

                    ret.push(tweet);
                }
            }

            return ret;
        });

        await writeFiles(tweets);

        await browser.close();
    } catch(err) {
        console.log(err);
    }
})();