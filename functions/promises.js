// Callback
const getDataCallback = (number, callback) => {
    setTimeout(() => {
        if (typeof number === 'number') {
            callback(undefined, number * 2);
        } else {
            callback('Number must be provided');   
        }
    }, 2000);
}

// callback hell
getDataCallback(2, (error, data) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        getDataCallback(data, (error, data) => {
            if (error) {
                console.log('error');
            } else {
                console.log(data);
            }
        })
    }
})


// Promise
const getDataPromise = (num) => new Promise((resolve, reject) => {
        setTimeout(() => {
            typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
        }, 2000);
});

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(data);
    }, (error) => {
        console.log(error);
    });
}, (error) => {
    console.log(error);
});

//promise chaining
getDataPromise(10).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})

//Given a number n, print n-th Fibonacci Number.
// const fibonacci = (number) => {
//     if (number <= 1) {
//         return number;
//     } else {
//         return fibonacci(number - 1) + fibonacci(number - 2);
//     }
// }

// console.log(fibonacci(12));