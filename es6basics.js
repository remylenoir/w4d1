// HOISTING

// console.log(message); // undefined
// var message = 'Hello';
// console.log(message); // 'Hello'

// console.log(sayHello); // undefined;
// var sayHello = function() {
// };
// console.log(sayHello); // function

// console.log(message) // Reference error: message is not defined
// let message = 'Hello'
// console.log(message) // 'Hello'

// SCOPE

// let outter = 'outter';
// function sayHello() {
//   if (true) {
//     let shouldPrint = 'function scope';
//     if (1 === 1) {
//       console.log(shouldPrint);
//       console.log(outter);
//     }
//   }
// }
// sayHello()

// global scope
// for (var i = 0; i < 10; i++) {

// }

// console.log(i);

// Redeclaration and reassignment
// var i;
// var i = 0; // OK
// i = 0 + 1;
// console.log('i: ', i);
// let n;
// let n = 0; // Error n has already been declared
// n = 0 + 1;

// console.log('n: ', n);
// const x = {
//   a: 1
// };
// x.a = 2;
// x.b = 3;
// x = {} // Error assignment to constant variable
// console.log(x);
// const y = [];
// y[0] = 3;
// console.log(y); [3]
// y = [3] // Error assignment to constant variable

// var hoists and is initialized, let and const aren't
// var's scope is global or function, let and const are block-scoped
// var can be redeclared, let and const can't
// var and let can be reassigned, const can't
// var and let don't need to be initialized, const does

// let person = {
//   name: 'Rémy',
//   age: 27,
//   favoriteMusic: 'Techno',
//   address: {
//     street: '3, Eichhornstrasse',
//     city: 'Berlin'
//   }
// };

// const name = person.name;
// const age = person.age;
// const favoriteMusic = person.favoriteMusic;

// Destructuring

// const { name, favoriteMusic, address, gender = 'reptilian' } = person;
// let { age } = person;
// age += 1;
// const { city } = address;

// const description = `${name} is a ${age} years old ${gender} and listens to ${favoriteMusic} and lives in ${city}`;
// console.log(description);

// Destructuring objects create variables using the same names as the properties in the object

// const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // [0, 1, 2]
// const zero = digits[0]
// const one = digits[1]
// const two = digits[2]

// const [, , a, b] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// // console.log(a, b);
// // 2 3
// We can set default values when destructuring, they will be applied if the value we try to get is undefined
// const [x, y = 2] = [1];
// console.log(x, y);
// // 1 2

// function add(a, b = 0) {
//   return a + b;
// }

// console.log(add(42, 21));

// const reptiles = ['lizard', 'snake'];
// const mammals = ['dog', 'cat'];
// const birds = ['eagle', 'pidgeon'];

// Spread operator

// const animals = reptiles.concat(mammals).concat(birds);
// const animals = [...reptiles, ...mammals, ...birds];
// console.log(animals);
// console.log(...reptiles);
// console.log(reptiles[0], reptiles[1]);

// ... returns the content of the array without the array itself

// Rest parameter
function add(...arr) {
  console.log(Array.isArray(arr));
  return arr.reduce(function(acc, val) {
    return acc + val;
  }, 0);
}
console.log(add(...[5, 4, 6]));
console.log(add(5, 4, 6, 7, 8, 9, 10));
// In parameters, ... gathers the rest of the arguments into an array

// Differences between var, let and const
// Template strings
// Destructure objects and arrays
// Spread operator and rest parameters
