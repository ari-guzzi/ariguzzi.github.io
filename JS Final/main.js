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
  
  

  // have stick figure's arm follow cursor
  document.addEventListener("DOMContentLoaded", function() {
    const rightArm = document.querySelector('.right-arm');
    const stickFigure = document.getElementById('stick-figure');
  
    document.addEventListener('mousemove', function(event) {
      const stickFigureRect = stickFigure.getBoundingClientRect();
      const armRect = rightArm.getBoundingClientRect();
      const stickFigureX = stickFigureRect.left + stickFigureRect.width / 2;
      const stickFigureY = stickFigureRect.top + stickFigureRect.height / 2;
      const mouseX = event.clientX - stickFigureX;
      const mouseY = event.clientY - stickFigureY;
  
      const radians = Math.atan2(mouseY, mouseX);
      const angle = radians * (180 / Math.PI);
  
      if (mouseX >= 0) {
        rightArm.style.transform = `rotate(${angle}deg)`;
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
  
  
  
  