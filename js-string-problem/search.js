const lyrics = 'tumi bondhu  kala pakhi ami jeno kii, boshonto kale re bondhu bolte pari ni. shada shada kala kala, rong jomese shada kala (2)';

// const doesExists = lyrics.includes('pakhi');
const searchString = 'Pakhi';
const searchStringLcase = searchString.toLowerCase (); 
const lyricsLowercase = lyrics.toLowerCase();
const doesExists=lyricsLowercase.includes(searchStringLcase);
console.log(doesExists)