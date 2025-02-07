// Arithmatic Operations

let a = 5;
let b = 2;

console.log("Addition: a + b ", a + b);
console.log("Subtraction: a - b", a - b);
console.log("Multiplication: a * b ", a * b);
console.log("Division: a / b ", a / b);
console.log("Modulus: a % b ", a % b);
console.log("Exponential: a ** b ", a ** b);
console.log("Increment: a++ ", a++); // unary operator increment
console.log("Decrement: a-- ", a--); // unary operator decrement 

//Assignment operators in JavaScript the role of the assignment operator is to assign a value to a variable.

let x = 10;
let y = 5;
console.log("----------------Assignment Operators----------------");
console.log("Addition: x += y ", x += y); // x = x + y
console.log("Subtraction: x -= y ", x -= y); // x = x - y
console.log("Multiplication: x *= y ", x *= y); // x = x * y
console.log("Division: x /= y ", x /= y); // x = x / y
console.log("Modulus: x %= y ", x %= y); // x = x % y
console.log("Exponential: x **= y ", x **= y); // x = x ** y

//Comparison operators in JavaScript are used to compare two values. It returns either true or false.

let p = 10;
let q = 5;
console.log("----------------Comparison Operators----------------");
console.log("Equal to: p == q ", p == q); // false
console.log("Not Equal to: p != q ", p != q); // true
console.log("Greater than: p > q ", p > q); // true
console.log("Less than: p < q ", p < q); // false
console.log("Greater than or equal to: p >= q ", p >= q); // true
console.log("Less than or equal to: p <= q ", p <= q); // false
console.log("Strict Equal to: p === q ", p === q); // false
console.log("Strict Not Equal to: p !== q ", p !== q); // true

//Logical operators in JavaScript are used to determine the logic between variables or values.

let m = true;
let n = false;
console.log("----------------Logical Operators----------------");
console.log("AND: m && n ", m && n); // false
console.log("OR: m || n ", m || n); // true
console.log("NOT: !m ", !m); // false
console.log("NOT: !n ", !n); // true

//conditional statements in JavaScript are used to perform different actions based on different conditions.

console.log("----------------Conditional Statements----------------");
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

//Ternary operator in JavaScript is a conditional operator that evaluates a condition as true or false.

console.log("----------------Ternary Operator----------------");
let age1 = 18;
let result = (age1 >= 18) ? "You are eligible to vote" : "You are not eligible to vote";

//MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators

//Checking if the number is multiple of 5

let number = prompt("Enter a number: ");
console.log(number + " is multiple of 5: " + (number % 5 === 0));

//write a code which can give grades to the students accounding to their scores

let score = 91;

if(score>= 90 || score<= 100){
    console.log("The A grade");
} else if(score>=70 || score<=89){
    console.log("the B grade");
}else {
    console.log("The F grade");
}