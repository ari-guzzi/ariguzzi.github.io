//step 1

const newQuoteButton = document.querySelector('#js-new-quote');
//step 4

const apiUrl = 'https://southparkquotes.onrender.com/v1/quotes';

//step 5
function getQuote() {
    //step 3
    //console.log('Getting a new quote...');
    
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
       console.log('Random Southpark Quote:', data);
      displayQuote(data[0].quote);
      displayCharacter(data[0].character);
    })
    .catch(error => {
      console.error('Fetch error:', error);
      alert('Failed to fetch data. Please try again.');
    });
}

// step 2
newQuoteButton.addEventListener('click', getQuote);

//step 6
function displayQuote(quote) {
    const quoteTextElement = document.querySelector('#js-quote-text');
    quoteTextElement.textContent = quote;
  }
  
  function displayCharacter(character) {
    const characterTextElement = document.querySelector('#js-character-text');
    characterTextElement.textContent = character;
  }

  // Character to Image URL mapping
const characterImages = {
    "Cartman": "cartman.png",
    "Stan": "stan.png",
    "Randy": "randy.png",
    "Chef": "chef.png",
    "Kenny": "kenny.png",
    "Matthew McConaughey": "matthewmcConaughey.png",
    "Jimbo": "jimbo.png",
    "Butters": "butters.png",
    "Mr. Garrison": "MrGarrison.png",
    "Mr. Mackey": "Mr._Mackey.png",
    "Kyle": "kyle.png",
  };
  
  const picButton = document.querySelector('#js-pic-button');
  
  picButton.addEventListener('click', function() {
    const characterText = document.querySelector('#js-character-text').textContent;
    const character = characterText.trim(); // Get the character from the displayed text
  
    if (characterImages.hasOwnProperty(character)) {
      const imageUrl = characterImages[character];
      displayImage(imageUrl);
    } else {
      console.log("No image available for this character");
    }
  });
  
  function displayImage(imageUrl) {
    const imageElement = document.querySelector('#js-character-image');
    imageElement.src = imageUrl;
    imageElement.style.display = 'block'; 
  }
  

//step 8
  window.addEventListener('load', getQuote);


