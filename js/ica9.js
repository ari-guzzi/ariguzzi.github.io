$(document).ready(function() {
    var magic8Ball = {};
    magic8Ball.answerList = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ];
    $("#answer").hide();
    

    magic8Ball.askQuestion = function() {
        $("#answer").fadeIn(4000);
        var randomIndex = Math.floor(Math.random() * this.answerList.length);
        var answer = this.answerList[randomIndex];
        $("#answer").text(answer);
        
        setTimeout(function() {
            $("#answer").fadeOut(2000); 
        }, 2000);
    };

    var onClick = function() {
        magic8Ball.askQuestion();
    };
    var button = document.getElementById("questionButton");
   
    function startVibration() {
        var elementsToVibrate = document.querySelectorAll('.ball, .inside, .triangle, .answer');
            
        elementsToVibrate.forEach(function(element) {
            element.classList.add('shake');
                
            setTimeout(function() {
                element.classList.remove('shake');
            }, 500);
        });
    }
    
    $("#questionButton").click(function() {
        magic8Ball.askQuestion();
        startVibration();
    });
});
  
  

  
  