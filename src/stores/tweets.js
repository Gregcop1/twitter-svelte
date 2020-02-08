import { writable } from "svelte/store";

const createTweets = () => {
  const {subscribe, update} = writable([]);

  return {
    subscribe,
    add: (user, tweet) => update(t => [
      {
        author: user,
        date: new Date().getTime(),
        message: tweet,
        shares: {
          answer: 0,
          like: 0,
          retweet: 0,
        }
      },
      ...t,
    ])
  }
};

export const tweets = createTweets();
