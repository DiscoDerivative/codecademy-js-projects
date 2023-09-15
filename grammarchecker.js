let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
var count = 0;
storyWords.forEach((storyWords, word) => {
count++;
})

let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

storyWords = storyWords.filter(word => {
  if(word !== unnecessaryWord){
    return unnecessaryWord;
  }
})

storyWords = storyWords.map(word => {
  if(word === misspelledWord){
    return "beautiful";
  }
  else{
    return word;
  }
})

const badWordIndex = storyWords.findIndex((word) => word === badWord); //bad word is in index 78

storyWords[78] = 'really'; //changing freaking to really

const lengthCheck = storyWords.every(word => {
  word.length <= 10;
}) //variable that checks every element in storyWords to see if it's less than 10 characters

const findLargeWord = storyWords.filter(word => {
  if(word.length > 10){
    console.log(word);
  }
})

const indexOfLargeWord = storyWords.findIndex(word => {
 return word === "breathtaking";
})
console.log(indexOfLargeWord);

storyWords[111] = "stunning";

console.log(storyWords.join(' '))

