//
// OBJECT DESTRUCTURING
//

// const person = {
//   name: "Ghanmi",
//   age: 24,
//   location: {
//     city: "Sfax",
//     temp: 19
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperatue } = person.location;
// if (city && temperatue) {
//   console.log(`It's ${temperatue}° in ${city}.`);
// }

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

//
// ARRAY DESTRUCTURING
//

const address = [
  "1299 S Juniper Street",
  "Philadelphia",
  "Pennsylvanua",
  "19147"
];
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [coffee, , medium] = item;
console.log(`A medium ${coffee} costs ${medium}.`);
