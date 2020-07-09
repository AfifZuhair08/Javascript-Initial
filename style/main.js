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
const name = "Afif";
const age = 25;
const rating = 4.7;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof isCool);

//concatenation string
console.log("My name is " + name + " and I am " + age);

//template string
const initial = `My name is ${name} and I am ${age}`;
console.log(initial);

//calcualte number of string
console.log(name.length);

//make string uppercase
console.log(initial.toUpperCase());

//split into array
console.log(name.split(""));

//split few words
const type = "four-wheel, twowheel, front-wheel";
console.log(type.split(", "));

//ARRAYS
const numbers = new Array(1, 2, 3);
console.log(numbers);

const fruits = ["apples", "oranges", "pears"]; //[0,1,2]
console.log(fruits);

/*
 * const type can be override if it contains arrays, not if it has single value
 */
fruits[3] = "durian";

//add value to the array
fruits.push("mangos");

//push to the first array
fruits.unshift("strawberries");

//delete the last one
fruits.pop();

//check array container
console.log(Array.isArray("hello"));

console.log(fruits.indexOf("oranges"));

console.log(fruits);

//ARRAY INTERMEDIATE//
const person = {
  firstName: "Afif",
  lastName: "Zuhair",
  age: 25,
  hobbies: ["music", "racing", "coding"],
  address: {
    street: "Jalan Jelatang",
    city: "Masai",
    state: "Johor",
  },
};

//add property outside the array
person.email = "afifzuhair@gmail.com";

//customize the property of the property
const {
  firstName,
  lastName,
  address: { city },
} = person;

console.log(
  person.email,
  person.age,
  person.hobbies,
  city,
  person.address.state
);
