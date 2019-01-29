const getPuzzle =  async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }


};

// const getPuzzleOLD = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch puzzle');
//         }
//     }).then ((data) => {
//         return data.puzzle;
//     })

// };

const getCountry = async (countryCode) => {
    const response = await fetch(`http://restcountries.eu/rest/v2/all`);

    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);;
    } else {
        throw new Error('Unable to fetch data');
    }
}

// const getCountry = (countryCode) => {
//     return fetch(`http://restcountries.eu/rest/v2/all`).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch data');
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode);
//     })
// }

const getLocation = async () => {
    const response = await fetch(`http://ipinfo.io/json?token=6b3f0ebbe1ce45`);

    if (response.status === 200) {
        return response.json();
    } else {
        throw new Error('Unable to fetch data');
    }
}


const getCurrentCountry = async () => {
    const location = await getLocation();
    return getCountry(location.country);  
}
// const getLocation = () => {
//     return fetch(`http://ipinfo.io/json?token=6b3f0ebbe1ce45`).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch data');
//         }
//     }).then((data) => {
//         return data;
//     })
// }

// const getCountryOLD = (countryCode) => new Promise((resolve, reject) => {
//     const requestCountry = new XMLHttpRequest();

//     requestCountry.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode);
//             resolve(country.name);
//         } else if (e.target.readyState === 4) {
//             reject('Unable to fetch data');
//         }
//     });
    
//     requestCountry.open('GET', 'http://restcountries.eu/rest/v2/all');
//     requestCountry.send();
// })