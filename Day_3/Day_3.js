// Sum of 1 to n numbers

// let number = prompt("Enter a number: "); // take input from user
// let sum = 0; // initialize sum to 0
// for (let i = 1; i <= number; i++) { // loop through 1 to number
//     sum += i; // add i to sum
// }
// console.log(`Sum of 1 to ${number} numbers is ${sum}`); 


//for-of loop only use it with arrays, strings

// let str = "Javascript";
// for(let i of str){
//     console.log("i=",i);
// }


// let number =100;
// for(let i=0;i<=number;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// let gameNumber = 25;
// let userNumber = prompt("Guess a number: ");
// if(userNumber==gameNumber){
//     console.log("You won the game");
// }

let username = prompt("Enter your username: ");
console.log(`@${username}${username.length}`);
