// QUESTION
/*
Write a program that finds the sum of numbers uptil n numbers.
*/

// SOLUTION
let num = parseInt(prompt("Up till which number to do want to calculate the sum of numbers starting from 0: "))

function sum(n){
let sum = 0;
for(i=0;i<=n;i++){sum+=i};
  return sum
}

console.log(sum(num));

// TESTS

console.log(sum(10));
console.log(sum(1));
console.log(sum(199));
console.log(sum(57));
console.log(sum(0));
console.log(sum(-5));



