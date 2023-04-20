// PROBLEM
/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.
*/

// SOLUTION
function factorialize(num) {
  let fact = 1;
  if(num===0){
    return 1;
  }
  for(let i=1;i <= num;i++){
  fact = fact * i
  }
  return fact;
}

factorialize(5);
