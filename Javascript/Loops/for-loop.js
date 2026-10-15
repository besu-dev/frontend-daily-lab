// loops in JavaScript are used to repeat a block of code a certain number of times or until a specific condition is met. The `for` loop is one of the most commonly used loops in JavaScript.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

const languages = ["JavaScript", "Python", "Java", "C++", "React"];
let n = languages.length;
for (let i = 0; i < n; i++) {
  console.log(languages[i]);
}

// break statement is used to exit a loop prematurely when a certain condition is met. 

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; // exit the loop when i is equal to 3
    }
    console.log(i);
}

// The continue statement is used to skip the current iteration of a loop and move on to the next iteration.
for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue; // skip the current iteration when i is equal to 3
    }
    console.log(i);
}