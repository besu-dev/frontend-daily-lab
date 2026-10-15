// javascript conditional statements

// if statement is used to execute a block of code if a specified condition is true.

let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a child.");
}

// if...else if...else statement is used to execute a block of code if a specified condition is true, and another block of code if the condition is false.

let score = 85;

if (score >= 90) {
  console.log("You got an A.");
} else if (score >= 80) {
  console.log("You got a B.");
} else if (score >= 70) {
  console.log("You got a C.");
} else {
  console.log("You failed.");
}

// switch statement is used to excute one block of code out of multiple options based on the value of a variable.

let department = "computer science";

switch (department) {
  case "computer science":
    console.log("You are in the computer science department.");
    break;
  case "information technology":
    console.log("You are in the information technology department.");
    break;
  case "software engineering":
    console.log("You are in the software engineering department.");
    break;
  default:
    console.log("unknown department.");
}

// ternary operator is a shorthand way of writing an if...else statement. It takes three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.

let Age = 21;

Age >= 18 ? console.log("You are an adult.") : console.log("You are a child.");

// nested if statement is an if statement that is contained within another if statement.

let Age2 = 21;
let country = "Ethiopia";
if (Age2 >= 18) {
  if (country === "Ethiopia") {
    console.log("you can vote");
  }
  else {
    console.log("you cannot vote");
  }
}
