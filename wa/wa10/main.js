//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//2. RAW TEXT STRINGS
const storyText = "It was 94 fahrenheit outside, so :insertx: decided to go for a ride in an airplane. When they got to :inserty:, they laughed and cried as they saw where the plane landed, then they :insertz:. Bob recorded the event and posted it on YouTube — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = ["Willy the Goblin","Big Daddy","Father Christmas"]

const insertY = ["the soup kitchen","Disneyland","the White House"]

const insertZ = ["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]


//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);

  let yItem = randomValueFromArray(insertY);

  let zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem).replace(":inserty:", yItem).replace(":insertz:", zItem).replace(":insertx:", xItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 / 14) + ' stone'; 
    const temperature =  Math.round((94 - 32) * 5/9) + ' centigrade';
    
    newStory = newStory.replace('94 fahrenheit', temperature).replace('300 pounds', weight);
}

  story.textContent = newStory;
  story.style.visibility = 'visible';

  

}