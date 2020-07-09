//CONTAINS FUNCTIONS TOPICS

//TYPE 1
function addNums(num1, num2) {
  // console.log(num1 + num2);
  return num1 + num2;
}
// addNums(3,6);
console.log(addNums(3, 6));

//TYPE 2
const addNums2 = (num1, num2) => num1 + num2;
console.log(addNums2(3, 6));

//OBJECT ORIENTED
function User(firstName, lastName, id) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.id = id;
  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
const user1 = new User("Amirul", "Bahri", "123456");
console.log(user1.getFullName());
