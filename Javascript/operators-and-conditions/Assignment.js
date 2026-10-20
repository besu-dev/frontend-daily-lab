// Assignment operators are used to assign values to variables. The most common assignment operator is the equal sign (=), which assigns the value on the right to the variable on the left.

//  example of assignment operator are 1,simple assignment, addition assignment, subtraction assignment, multiplication assignment, division assignment, and modulus assignment.

// logical and & or Assignments

// logical AND assignment (&&=) operator assigns a value to a variable only if the variable is truthy. If the variable is falsy, it remains unchanged.
// If the first value is true, the second value is assigned.
let x = true;
let y = &&= 10;

console.log(y);