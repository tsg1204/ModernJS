//Destructuring

// const todo = {
//     id: 'abc',
//     text: 'Pay the bills',
//     completed: false
// }

// //const text = todo.text;
// //const completed = todo.completed;
// const printTodo = ({ text, completed}) => {
//   console.log(`${text}: ${completed}`);
// }

// printTodo(todo);

// const { text: todoText, completed, details = 'No details provided', ...others} = todo;

// console.log(todoText);
// console.log(completed);
// console.log(details);
// console.log(others);

// const age = [45, 57, 34];
// //const [firstAge, secondAge, , lastAge = 123] = age;
// const [firstAge, ...otherAges] = age;

// console.log(firstAge);
// console.log(otherAges);




// const calculateAverage = (thing, ...numbers) => {
//     let sum = 0;
//     numbers.forEach((num) => sum +=num);
//     const average = sum / numbers.length;
//     return `Average ${thing} is ${average}`;
// }

// console.log(calculateAverage('age', 0, 100, 88, 64));

// const printTeam = (teamName, coachName, ...teamMembers) => {
//     console.log(`Team: ${teamName}`);
//     console.log(`Coach: ${coachName}`);
//     console.log(`Players: ${teamMembers.join(', ')}`);
//     //console.log(first, second);
// }

// const team = {
//     name: 'Liberty',
//     coach: 'Casey Penn',
//     players: ['Marge', 'Aiden', 'Herbert', 'Sherry', 'Bill']
// }

// printTeam(team.name, team.coach, ...team.players);
// //printTeam('Liberty', 'Casey Penn', 'Marge', 'Aiden', 'Herbert', 'Sherry');
// //Array spread operator
// const cities = ['Barcelona', 'Cape Town', 'Bordeaux'];
// const citiesCopy = ['Santiago', ...cities];

// console.log(cities);
// console.log(citiesCopy);

// //Object spread operator
// let house = {
//     bedrooms: 2,
//     bathrooms: 1.5,
//     yearBuilt: 2017
// }

// let newHouse = {
//     basement: true,
//     ...house,
//     bedrooms: 3
// }

// newHouse.yearBuilt = 2018;

// console.log(house);
// console.log(newHouse);

// let Person = {
//     name: 'Goerge',
//     age: 35
// }

// let Location = {
//     city: 'Boston',
//     country: 'US'
// }

// let Overview = {
//     ...Person,
//     ...Location
// }
// console.log(Overview);