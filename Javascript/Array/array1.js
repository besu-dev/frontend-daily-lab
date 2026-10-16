//  array methods are built-in methods that can be used to perform operations on arrays. eg  array methods are push(), pop(), shift(), unshift(), slice(), splice() etc.

const lang=["HTML","CSS","JavaScript","React"];
console.log(lang);
// push() method is used to add one or more elements to the end of an array and returns the new length of the array.
lang.push("Node.js");
console.log(lang);

// pop() method is used to remove the last element from an array and returns that element.
lang.pop();
console.log(lang);

// shift() method is used to remove the first element from an array and returns that element.
lang.shift();
console.log(lang);

// unshift() method is used to add one or more elements to the beginning of an array and returns the new length of the array.
lang.unshift("HTML");
console.log(lang);

// slice() method is used to extract a section of an array and returns a new array.
const newLang=lang.slice(1,3);
console.log(newLang);

// splice() method is used to add or remove elements from an array and returns the removed elements.
const removedLang=lang.splice(1,2,"React Native");
console.log(lang);
console.log(removedLang);