const person1 = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

const multiLine = 'First Line text \n' +
    'Second line of code \n' +
    'Third line of text \n' +
    'Fourth line of string.';
// console.log(multiLine);

const newMultiLine = `First Line of text
Second Line of text
third line of string
fourth line of string`;
// console.log(newMultiLine);

const a = 20;
const b = 30;
const nums = [52, 45, 64, 16, 53, 41, 65, 34];
const summary = 'sum of: ' + a + ' and ' + b + ' is ' + (a + b);
// console.log(summary);

const newSummary = `sum of ${a} and ${b} is: ${a + b} where length of nums is ${nums.length}.`;
console.log(newSummary);