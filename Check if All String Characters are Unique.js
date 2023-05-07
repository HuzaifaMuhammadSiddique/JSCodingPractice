// PROBLEM
/*
Write a function that takes a string as input and returns true if the string contains only unique characters, and false otherwise.
*/

// SOLUTION CODE
function checkUnique(string){
  string = string.split("");

  for(let i=0; i<string.length; i++){
    if(string.indexOf(string[i]) !== string.lastIndexOf(string[i])){
      return false;
    }
  }
  return true;
}

// TESTS
console.log(checkUnique("huzaifa"));
console.log(checkUnique("aabbcc"));
console.log(checkUnique("abcdef"));
console.log(checkUnique("a  fight"));
console.log(checkUnique("a fight"));
