// 1. What will be the output of the following code and why?
function scopeTest() {
  if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
    const constVariable = "I am const";
  }
  console.log(varVariable);
  console.log(letVariable);
  console.log(constVariable);
}

scopeTest();

// Only 'console.log(varVariable); will be printed, because "var" variable declares a function scope so it can be accessible outside the if block. 


//2.  Write a function greet that takes two parameters, name and greeting. greeting should have a default value of "Hello". If only the name is provided, the function should return the greeting followed by the name. If both are provided, it should return the custom greeting followed by the name.

function greet(name, greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));


  //3. Write a function sum that takes any number of arguments and returns their sum using the rest parameter.
  function sum (a, b, c, ...numbers) {
    console.log(`${a+b+c+ ${...numbers}}`);
  }; 

  sum(2,4,5,6,7);


  //4. Given the following arrays, use the spread operator to merge them into a new array mergedArray.
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const array3 = [7, 8, 9];
  const mergedArray = [...array1, ...array2, ...array3];

  console.log(mergedArray);


  //5. Write an object person using the object literal syntax extensions.The object should have properties name and age, and a method greet that returns a greeting message.
  const name = "John";
  const age = 30;

  const person = {
    name,
    age,
    greet() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    }
                };

    console.log(person.greet());


    //6. Write a for...of loop to iterate over the following array and print each element to the console.
    const fruits = ["apple", "banana", "cherry"];

    for (const option of fruits) {
      console.log(option);
    };


    //7. Use template literals to create a string that includes variables name and age.
    const name = "Alice";
    const age = 25;

    const message = `My name is ${name} and i am ${age} years old `;

    console.log(message);


    //8. You have an array of objects representing students and their grades. Use a for...of loop to iterate over the array and print each student's name and grade.
    const students = [
      { name: "Alice", grade: 90 },
      { name: "Bob", grade: 85 },
      { name: "Charlie", grade: 92 }
    ];

    for ( const detail of students){
      console.log(`${detail.name}: ${detail.grade}`);
    }

    //10. Use template literals to create a string that includes variables a and b, as well as the result of their addition.
    const a = 5;
    const b = 10; 

    const result = `The sum of ${a} and ${b} is ${a + b}`;
    console.log(result);