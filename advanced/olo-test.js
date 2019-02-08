
const fetch = require("node-fetch");

fetch(`http://files.olo.com/pizzas.json`, {}).then((response) => {
    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch data');
    }
}).then((data) => {
    const toppings = data.map((item) => item.toppings
    ).reduce((a,b) => a.concat(b), 
    []).reduce((tally, value) =>  Object.assign(tally, { [value]: (tally[value] || 0) + 1})
        //tally[value] = tally[value] ? tally[value] + 1 : 1;
        //return tally;
    , {});
    
    console.log(toppings);

    const sorted = Object.values(toppings).sort((a,b) => {
        return a < b ? 1 : a > b ? -1 : 0;
    })

    console.log(sorted);

}).catch((error) => {
    console.log(error);
})

// const uniqueCount =  ["a", "b", "c", "d", "d", "e", "a", "b", "c", "f", "g", "h", "h", "h", "e", "a"];
// const distribution = uniqueCount.reduce((acum,cur) => Object.assign(acum,{[cur]: (acum[cur] | 0)+1}),{});
// console.log(JSON.stringify(distribution,null,2));

// const getData = async () => {
//     const response = await fetch(`//files.olo.com/pizzas.json`);

//     if (response.status === 200) {
//         const data = await response.json();
//         return data;
//     } else {
//         throw new Error('Unable to fetch data');
//     }
// }

// console.log(getData());

