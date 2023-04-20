// PROBLEM
/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

// SOLUTION
function repeatStringNumTimes(str, num) {
  if(num<1){return "";}
  let newStr = ""
  for(let i=1; i<=num; i++){
      newStr = newStr + str
  }
  return newStr
}

repeatStringNumTimes("abc", 3);
