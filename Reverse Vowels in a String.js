// PROBLEM

/*
Write a function that takes a string as input and returns the same string with the vowels reversed (e.g. "hello" becomes "holle").
*/


// SOLUTION CODE

function vowelReverser(string){
  let newWord  = [];
  let vowels = ["a", "e", "i", "o", "u"];
  let count = {}
  
  for(let i = 0; i<string.length; i++){
    if(vowels.includes(string[i])){
      count[string[i]] = i;
    }
  }
  
  let vCounter = 0;
  for (let vowel of string){
    if(vowels.includes(vowel)){
      vCounter ++;
    }
  }

  let arrayObj = Object.keys(count);
  for(let letter of string){
    if(vowels.includes(letter)){
      newWord.push(arrayObj[vCounter - 1])
      vCounter --;
    } else{
      newWord.push(letter)
    }
  }
  
  return newWord.join("");
}

// TESTS
console.log(vowelReverser("bayuxo"));
console.log(vowelReverser("rareriror"));
console.log(vowelReverser("hello"));
