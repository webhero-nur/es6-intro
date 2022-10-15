const max = Math.max(12, 85, 99, 696, 47);
// console.log(max);
const numbers = [64, 54, 556, 34];
const largest = Math.max(...numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(99);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];

const numbers4 = [444, 78, ...numbers, 111, 33];

console.log(numbers3);
console.log(numbers4);