//alert box
alert("Hello World");

//display in developer tools view
console.log("Hello World");

//var - global variable
//let - initialize variable with/without value (mutable)
//const - gives a variable default value (immutable)
let age1 = 25;
console.log(age1);

let score;
score = 10;
console.log(score);

const side = 5;
// side = 5; //produce error bcs const variable can't be overwrite
console.log(side);

//String, Numbers, Boolean, null, undefined
const name = 'Afif';
const age = 25;
const rating = 4.7;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof isCool);

//concatenation string
console.log('My name is ' +name+ ' and I am ' +age);

//template string
const initial = `My name is ${name} and I am ${age}`;
console.log(initial);

//calcualte number of string 
console.log(name.length);

//make string uppercase
console.log(initial.toUpperCase());

//split into array
console.log(name.split(''));

//split few words
const type = 'four-wheel, twowheel, front-wheel';
console.log(type.split(', '));

//ARRAYS
const numbers = new Array(1,2,3);
console.log(numbers);

const fruits = ['apples','oranges','pears'];//[0,1,2]
console.log(fruits);

/**
 * const can be override its array value, not its single value
 */
fruits[3] = 'durian';
console.log(fruits);