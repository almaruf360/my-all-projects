const lyrics = 'tumi bondhu  kala pakhi ami jeno kii. boshonto kale re bondhu bolte pari ni. shada shada kala kala. rong jomese shada kala (2)';

const parts =lyrics.split(' ');
const sentences=lyrics.split('.');
const chars=lyrics.split('');


// console.log(parts, sentences, chars)

// slice

const partial = lyrics.slice(5,15);

console.log(partial)