// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 50;
console.log(money);

const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const message = bird + 'potas potas'
console.log(message);

const numbers = [65, 41, 16, 55];
// reassign is not allowed
// numbers = [51, 65, 96, 84, 96, 44, 24];
numbers.push(125);
numbers[1] = 40;
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'Rangpur'
}
// student = {name: 'Mofazzol'};
student.name = 'Mofazzol';

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    sum = sum + number;
}
console.log(number);