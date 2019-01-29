// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response = What was actually fone

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const statusEl = document.querySelector('#status');
let game1 = new Hangman('Car Parts', 2);

// puzzleEl.textContent = game1.puzzle;
// guessesEl.textContent = game1.statusMessage;


window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();

});

const render = () => {
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game1.statusMessage;    
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// });

// //console.log('Do something else');


// // Making HTTP request

// getCountry("MX").then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getLocation().then((data) => {
//     console.log(`You are currently in ${data.city}, ${data.region} ${data.country}!`);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// getCurrentCountry().then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })

// getLocation().then((data) => {
//     return getCountry(data.country);
// }).then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// })
// fetch(`http://puzzle.mead.io/puzzle`, {}).then((response) => {
//     if (response.status === 200) {
//         return response.json();
//     } else {
//         throw new Error('Unable to fetch the puzzle');
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((error) => {
//     console.log(error);
// })





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

