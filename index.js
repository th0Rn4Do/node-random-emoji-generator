//Import
import emoji from 'node-emoji';

/* 2 ways to do it, global or local in the function */

const randomEmoji = emoji.random();
// console.log(randomEmoji.emoji);

const emojiName = process.argv[2];

const foundEmoji = emoji.find(emojiName);

if (!emojiName) {
  // Comment
  console.log(randomEmoji.emoji);
} else if (foundEmoji) {
  //Comment
  console.log(foundEmoji.emoji);
} else {
  //Comment
  console.log('Invalid emoji name');
}
