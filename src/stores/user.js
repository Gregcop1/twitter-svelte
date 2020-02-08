import {writable} from "svelte/store";

const createUser = () => {
  const {subscribe, update} = writable({
    name: 'Grégory Copin',
    email: 'gregcop1@gmail.com',
    account: '@gregcop1',
    tweetCount: 500 + Math.ceil(Math.random() * 200),
    subscriber: Math.ceil(Math.random() * 200),
    subscription: Math.ceil(Math.random() * 200)
  });

  return {
    subscribe,
    addTweet: () => update(t => ({
      ...t,
      tweetCount: t.tweetCount + 1,
    })),
  }
};

export const user = createUser();
