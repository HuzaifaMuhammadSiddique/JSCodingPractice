// PROBLEM
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

// SOLUTION
function confirmEnding(str, target) {
  let l = target.length;  // 1
  let k = str.length - l  // 7 -1 = 6
  let n = str.slice(k)    
  
  if(target === n){
      return true;
  } else{
      return false;
  }
}
