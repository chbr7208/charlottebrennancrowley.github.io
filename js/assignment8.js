// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertx = [
    "Danny Phantom",
    "Martha Stewart",
    "Ralphie"
]

const inserty = [
    "the Golden Gate Bridge",
    "the kitchen in the Royal Palace",
    "the Ralphie Corral"
]

const insertz = [
    "became a ghost and flew into the nearest person",
   "ran to the nearest water and poured it all over themselves",
    "dropped to the ground and began to cry"
]


// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);
let newStory; 

let xItem;
let yItem;
let zItem;

function result() {

    newStory = storyText; 

    xItem = randomValueFromArray(insertx);
    yItem = randomValueFromArray(inserty);
    zItem = randomValueFromArray(insertz);

    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem);

    
  if(customName.value !== '') {
    const name = customName.value;

    newStory = newStory.replace("Bob",name);

  }

  if(document.getElementById("uk").checked) {
    let stones = 0.0714286;
    const weight = Math.round(300*stones) + "Stone";
    const temperature =  Math.round((94-32)*5/9) + "Centigrade";

    newStory = newStory.replace("94 fahrenheit",temperature);
    newStory = newStory.replace("300 pounds", weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}