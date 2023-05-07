// PROBLEM
/*
Write a function that takes a string as input and returns true if the string contains only digits, and false otherwise.
*/

// SOLUTION
function onlyDigits(string){
  let numbers = ['0','1','2','3','4','5','6','7','8','9'];
  for(let letter of string){
    if(!(numbers.includes(letter))){
      return false;
    }
  }
  return true;
}

// TEST

let a = 'Huzaifa';
let b = 'Huzaifa123';
let c = '123';
let d = "@#$%^&12123532";
let e = "-648";
let f = "3827563287";

console.log(onlyDigits(a));
console.log(onlyDigits(b));
console.log(onlyDigits(c));
console.log(onlyDigits(d));
console.log(onlyDigits(e));
console.log(onlyDigits(f));
