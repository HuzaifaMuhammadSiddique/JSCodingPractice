// PROBLEM
/*
Reverse the provided string and return the reversed string.
For example, "hello" should become "olleh".
*/

// SOLUTION
function reverseString(str) {
  let newStr = '';
  let l = str.length;
  for(let i=l - 1; i>=0; i=i-1){
    newStr = newStr + str[i];
  }
  return newStr;
}

// TESTS
console.log(reverseString("hello"))
console.log(reverseString("level"))
console.log(reverseString("my name is Huzaifa"))
console.log(reverseString("Are you sure?"))

