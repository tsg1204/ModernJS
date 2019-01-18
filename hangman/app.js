// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response = What was actually fone

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const statusEl = document.querySelector('#status');
const game1 = new Hangman('Car Parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;

});

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
    
});

//console.log('Do something else');


// Making HTTP request

getCountry("MX", (error, country) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(country);
    }
})






// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.protorype --> null

//Array: myArray --> Array.prototype --> Object.prototype --> null

// Function: myFunc --> Function.protorype --> Object.prototype --> null

// String: myString --> String.prototype --> Object.prototype --> null

//Number: myNumber --> Number.prototype --> Object.prototype --> null

// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = 'Computer';

// console.log(product);

// const otherProduct = new String('Phone');
// console.log(otherProduct);

