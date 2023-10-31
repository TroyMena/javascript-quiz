var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      {choice: "Strings", correct: false},
      {choice: "Strings", correct: false},
      {choice: "Strings", correct: false},
      {choice: "Strings", correct: false}
    ]
  }
]

// The setTimer function starts and stops the timer and triggers winGame() and loseGame()
function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
        // Tests if win condition is met
        if (isWin && timerCount > 0) {
          // Clears interval and stops timer
          clearInterval(timer);
          winGame();
        }
      }
      // Tests if time has run out
      if (timerCount === 0) {
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  function startGame() {
    isWin = false;
    timerCount = 75;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    startTimer()
  }

  // add event listener to the start quiz button
  