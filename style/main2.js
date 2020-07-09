//ARRAY LIST//
const todos = [
  {
    id: 1,
    text: "Shopping",
    isCompleted: false,
  },
  {
    id: 2,
    text: "Wash Car",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Take out trash",
    isCompleted: false,
  },
];
console.log(todos);
//convert into JSON body format
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//LOOP - FOR//
for (let i = 0; i <= 10; i++) {
  // console.log("Number "+i);    //basic method
  console.log(`Number of ${i}`); //alternative
}

//LOOP - WHILE//
let i = 0;
while (i < 0) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

//LOOP - FOR - ARRAY//
for (let i = 0; i < todos.length; i++) {
  // const element = todo[i];
  console.log(todos[i].text);
}

for (let todo of todos) {
  console.log(todo.id);
}

//LOOP - FOREACH, MAP, FILTER
todos.forEach(function (todo) {
  console.log(todo.text);
});

const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

const todoCompleted1 = todos.filter(function (todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted1);

const todoCompleted2 = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoCompleted2);
