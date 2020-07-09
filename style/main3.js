const x = 11;
const y = 11;

// double equal compare the string value,
// the triple equal compare the data type and also the value
if (x === 10) {
  console.log(`X is 10`);
} else if (x > 10) {
  console.log(`X is greater than 10`);
} else {
  console.log(`X is less than 10`);
}

//ONE of it is true
if(x > 5 || y > 10){
    console.log(`y is more than 5 or x is more than 10`);
}
//BOTH must be true
if(x > 5 && y > 10){
    console.log(`y is more than 5 or x is more than 10`);
}

//ITENARY
const a = 10;
const color = a > 10 ? 'green':'red';
console.log(color);

//SWITCH
switch(color){
  case 'green': console.log('color is green');
  break;
  case 'red': console.log('color is red');
  break;
  default: console.log('color is not green or blue');
  break;
}

