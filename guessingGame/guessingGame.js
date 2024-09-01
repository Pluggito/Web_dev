const inputBox = document.getElementById("InputBox");
const guessButton = document.getElementById("GuessButton");
const result = document.getElementById("Result");




const randomNumber = Math.floor(Math.random() * 100) + 10;
let attempts = 0;

function playGame(){
    // Get the user's guess from the input field
    const guess = parseInt(inputBox.value);

    attempts++;

    const attemptsElement = document.getElementById("attempts");
    // Check if the guess is correct,too high or too low
    if (guess === randomNumber){
        result.textContent = `Congratulations! You guessed the correct number ${randomNumber}.`;
        result.style.color = "Green"
        inputBox.disabled = true;
    }

    else if (guess > randomNumber){
        result.textContent = `Too High! Try again.`
    }

    else if (guess < randomNumber){
        result.textContent = `Too Low! Try again.`
    }
    else {
        result.textContent = 'Invalid input! Please enter a number.'
        result.style.color = "Red"
    }

    attemptsElement.textContent = `Attempts: ${attempts}.`
}