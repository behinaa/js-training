//lesson11(variables)
let firstName = 'john';
let lastName = 'due';
console.log(firstName,lastName);

age = 19;
console.log(age);

let score;
score = 1;
console.log(score);
if (true) {
    score = score + 1
}
console.log(score);

const arr = [1,2,3,4,];
arr.push(5);
console.log(arr);

const person = {
    name: 'behina',
};
person.name = 'john';
person.email = 'behina@gmail.com';
console.log(person);

let a,b,c;
const d=10, e=20, f=30;
console.log(d);

//lesson14(type conversion)
let amount = '100';
amount = amount.toString();

console.log(amount,typeof amount);

//lesson15(operators)
let x;
x = 5+5;
x = 5-5;
x = 5*5;
x = 5/5;

x ='hello' + ' '+'world';

x = 2**3;

x = 1;

console.log(x);

//lesson16(type coercion)
x = 10;
console.log(x,typeof x);  

//lesson17(strings)
let x;
const name = 'behina';
const age = 19;
x = 'hello,my name is'+name+'and im'+age+'years old';
console.log(x);

const s = 'hello world';
x = typeof s;
x = s.length;
x = s[1];
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf('d');
x = s.substring(0,5);
x = s.slice(-11,-6);
x = '      hello world'
x = s,trim();
x = s.replace('world','johnny');
x = s.includes('hell');
x = s.valuOf();
x = s.split(' ');

console.log(x);

//lesson19(numbers)
let x;
const num = new Number(5);
x = num.tpString();
x = num.length;
console.log(x);

//lesson20(math objeect)
let x;
x = Math.sqrt(9)
x = Math.abs(-5);
x = Math.round(4.2);
x = Math.ceil(4.2);

console.log(x);
