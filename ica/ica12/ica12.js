//step 1
const newQuoteButton = document.querySelector('#js-new-quote');
//step 4
const apiUrl = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

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
        console.log('Random Christmas Trivia:', data);
        console.log('Quote:', data.question);
        displayQuote(data.question);
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

//step 8
  window.addEventListener('load', getQuote);


