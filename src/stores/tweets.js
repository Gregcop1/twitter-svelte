import { derived, writable } from "svelte/store";
import tweetsHelper from "../helpers/tweets";
import {user} from "./user";

const createTweets = () => {
  const {subscribe, update} = writable(tweetsHelper.generateTweets(30));

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

export const currentUserTweets = derived([user, tweets], ([$u, $t]) => {
  return $t.filter(item => item.author.account === $u.account);
});
