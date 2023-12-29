document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
    const balloons = document.getElementById('balloons');
    const balloonCount = 10; // Adjust the number of balloons
    
    const radius = 180; // Adjust the radius of the circle
    const angleIncrement = (Math.PI * 2) / balloonCount;
    const balloonSize = 50; // Adjust the size of the balloon
    
    function createBalloon(number) {
      const balloon = document.createElement('div');
      balloon.classList.add('balloon');
      
      const balloonText = document.createElement('span');
      balloonText.classList.add('balloon-text');
      balloonText.textContent = number; // Set the number text
      
      balloon.appendChild(balloonText);
      balloons.appendChild(balloon);
      
      return balloon;
    }
  
    const windowHeight = window.innerHeight; // Get the window height
    const centerY = windowHeight * 0.3; // Set the balloons to be at 30% of the window height
  
    
    // Create balloons in a full circle layout centered upwards
    for (let i = 0; i < balloonCount; i++) {
        const balloon = createBalloon(i); // Pass the number to createBalloon function
        const angle = i * angleIncrement;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
      
      balloon.style.left = `${x + (container.offsetWidth / 2) - (balloonSize / 2)}px`;
      balloon.style.top = `${y + centerY - (balloonSize / 2)}px`;
    }
  });
  
 //spin balloons
  
  

  // have weapon follow cursor
  document.addEventListener("DOMContentLoaded", function() {
    const rightArm = document.querySelector('.right-arm');
    const weapon = document.querySelector('.weapon');
    const stickFigure = document.getElementById('stick-figure');
  
    document.addEventListener('mousemove', function(event) {
      const stickFigureRect = stickFigure.getBoundingClientRect();
      const armRect = rightArm.getBoundingClientRect();
      const weaponRect = weapon.getBoundingClientRect();
      const stickFigureX = stickFigureRect.left + stickFigureRect.width / 2;
      const stickFigureY = stickFigureRect.top + stickFigureRect.height / 2;
      const mouseX = event.clientX - stickFigureX;
      const mouseY = event.clientY - stickFigureY;
  
      const radians = Math.atan2(mouseY, mouseX);
      const angle = radians * (180 / Math.PI);
  
      if (mouseX >= 0) {
        //rightArm.style.transform = `rotate(${angle}deg)`;
        weapon.style.transform = `rotate(${angle}deg)`;
      }
    });
  });
  
  
  
  
  // lines

  document.addEventListener("DOMContentLoaded", function() {
    const numberLinesContainer = document.querySelector('.number-lines');
    const stickFigure = document.getElementById('stick-figure');
  
    // Create 10 number lines at the bottom of the screen
    for (let i = 0; i < 10; i++) {
      const numberLine = document.createElement('div');
      numberLine.classList.add('number-line');
      numberLinesContainer.appendChild(numberLine);
    }
  
    // Position the number lines near the stick figure
    const stickFigureRect = stickFigure.getBoundingClientRect();
    const stickFigureCenterY = stickFigureRect.top + stickFigureRect.height;
  
    numberLinesContainer.style.top = `${stickFigureCenterY}px`;
  });
  

  // change cursor to target
  const cursorContainer = document.querySelector('.cursor-container');
  const verticalLine = document.querySelector('.vertical-line');
  const horizontalLine = document.querySelector('.horizontal-line');
  
  function moveCursor(e) {
    const mouseY = e.clientY;
    const mouseX = e.clientX;
  
    cursorContainer.style.left = `${mouseX}px`;
    cursorContainer.style.top = `${mouseY}px`;
    
    // Update the lines' positions relative to the circle
    verticalLine.style.transform = `translate(-50%, -50%)`;
    horizontalLine.style.transform = `translate(-50%, -50%)`;
  }
  
  window.addEventListener('mousemove', moveCursor);

  //SHOOTING

  function shootBall(e) {
    
    const weapon = document.querySelector('.weapon');

    const mouseX = e.clientX;
    const mouseY = e.clientY;
  
    const ball = document.createElement('div');
    ball.classList.add('ball');
    document.body.appendChild(ball);
  
    const ballDistanceX = mouseX - weapon.getBoundingClientRect().left;
    const ballDistanceY = mouseY - weapon.getBoundingClientRect().top;
    const angle = Math.atan2(ballDistanceY, ballDistanceX);
    const speed = 5; // Adjust the speed
  
    let ballX = weapon.getBoundingClientRect().left;
    let ballY = weapon.getBoundingClientRect().top;
  
    const animateBall = setInterval(() => {
      ballX += Math.cos(angle) * speed;
      ballY += Math.sin(angle) * speed;
  
      ball.style.left = `${ballX}px`;
      ball.style.top = `${ballY}px`;
  
      // Check if the ball is close to the target position to stop the animation
      if (Math.abs(ballX - mouseX) < speed && Math.abs(ballY - mouseY) < speed) {
        clearInterval(animateBall);
        ball.remove();
      }
    }, 10);

    const balloons = document.querySelectorAll('.balloon');
  
    const checkCollision = setInterval(() => {
      balloons.forEach(balloon => {
        if (isColliding(ball, balloon)) {
          const number = balloon.textContent;
          displayNumberAtBottom(number);
          clearInterval(checkCollision);
          ball.remove();
        }
      });
    }, 10);
  }

  function isColliding(ball, balloon) {
    const ballRect = ball.getBoundingClientRect();
    const balloonRect = balloon.getBoundingClientRect();
  
    return !(
      ballRect.right < balloonRect.left ||
      ballRect.left > balloonRect.right ||
      ballRect.bottom < balloonRect.top ||
      ballRect.top > balloonRect.bottom
    );
  }
  
 // MAKE THE NUMBERS APPEAR AT THE BOTTOM

function displayNumberAtBottom(number) {
  const bottomContainer = document.querySelector('.bottom-container');
  const numberDisplay = document.createElement('div');
  numberDisplay.textContent = number;
  numberDisplay.classList.add('number-display');
  
  bottomContainer.appendChild(numberDisplay);
}
 
  document.addEventListener('click', function(e) {
    shootBall(e);
  });
  
 
  // Function to clear all displayed numbers
function clearAllNumbers() {
  numbersArray = [];
  const bottomContainer = document.querySelector('.bottom-container');
  bottomContainer.innerHTML = ''; // Remove all content inside bottom container
}


// Event listener for the clear button
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearAllNumbers);



//CREATE A POPUP WINDOW FOR SUBMITTING OR GOING BACK


function showModal() {

  const modal = document.querySelector('.modal');
  const numbersList = document.querySelector('.numbers-list');

  // Fetch numbers from getNumbers() function
  const numbers = getNumbers();

  numbers.forEach(number => {
    const p = document.createElement('p');
    p.textContent = number;
    numbersList.appendChild(p);
  });
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.style.display = 'flex';
}


function hideModal() {
  const modalContainer = document.querySelector('.modal-container');
  modalContainer.style.display = 'none';
  clearAllNumbers();
}

function clearNumbersInModal() {
  const numbersList = document.querySelector('.numbers-list');
  numbersList.innerHTML = ''; // Clear numbers in the modal
}
function closeModal() {
  // Logic to hide or close the modal
  const modal = document.querySelector('.modal-container');
  modal.style.display = 'none'; // For example, hiding the modal
}


document.querySelector('.go-back-button').addEventListener('click', function() {
  clearNumbersInModal();
  closeModal(); // Assuming closeModal is a function to hide the modal
});

function getNumbers() {
  const bottomContainer = document.querySelector('.bottom-container');
  const numberElements = bottomContainer.querySelectorAll('.number-display');
  
  // Extract text content from each element and map to an array
  const numbersArray = Array.from(numberElements).map(element => element.textContent);
  
  return numbersArray;
}



function submitNumbers() {
  const numbers = getNumbers();
  console.log('Numbers submitted:', numbers);
}



const checkButton = document.querySelector('.check');
checkButton.addEventListener('click', showModal);

const goBackButton = document.querySelector('.go-back-button');
goBackButton.addEventListener('click', hideModal);

const submitButton = document.querySelector('.submit-button');
submitButton.addEventListener('click', submitNumbers);


  
  
  