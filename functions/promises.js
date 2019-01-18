// Callback
const getDataCallback = (callback) => {
    setTimeout(() => {
        callback(undefined, 'This is the data');
    }, 2000);
}

getDataCallback((error, data) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(data);
    }
})


// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is the promise data');
        reject('This is my promise error');
    }, 2000);
});

myPromise.then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})

//Given a number n, print n-th Fibonacci Number.
const fibonacci = (number) => {
    if (number <= 1) {
        return number;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}

console.log(fibonacci(12));