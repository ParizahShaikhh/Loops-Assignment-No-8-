// Assignment No-2:
// ***Guessing Game (Using while loop )***
// Objective: Create a simple number guessing game where the user tries to guess a randomly generated number between 1 and a specified maximum value using a predefined set of guesses.
// Steps to Follow:
// 1. Set a maximum value: Create a variable to store the maximum value for the number guessing game.
// 2. Generate a random number: Use Math.random() and Math.floor() to generate a random number between 1 and the maximum value. Log this value to the console for development purposes.
// 3. Track the guess status: Create a variable to track whether the user's guess is correct. Set it to false initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5. Iterate over guesses: Use a while loop to iterate over the predefined guesses until the correct guess is made.

// 6. Check the user's guess: Inside the loop, check if the current guess matches the random number. Provide feedback if the guess is too high or too low.


// Answer:
// Set a maximum value
let maxValue = 100;

// Generate a random number
let randomNumber = Math.floor(Math.random() * maxValue) + 1;

console.log(`Random number (for development purpose): ${randomNumber}`);

// Track the guess status
let guessStatus = false;

// Simulate user guesses
let guesses = [45, 23, 89, 100, 56, 78, 33, 77, 65, 12];

// Iterate over guesses
let index = 0;
while (guessStatus && index < guesses.length) {
    let currentGuess = guesses[index];

    // Check the user's guess
    if (currentGuess === randomNumber) {
        console.log(`Correct! The number was ${randomNumber}.`);
        guessStatus = true;
    } else if (currentGuess < randomNumber) {
        console.log(`Guess ${currentGuess} is too low.`);
    } else {
        console.log(`Guess ${currentGuess} is too high.`);
    }
    // Move to the next guess
    index++;
}

if (!guessStatus) {
    console.log(`Sorry, none of the guesses were correct. The number was ${randomNumber}.`);
}
