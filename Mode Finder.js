// PROBLEM
/*
Write a function that takes an array of integers as input and returns the mode value of the array.
*/

// SOLUTION CODE
function mode(array){
  let obj = {};

  for(let i=0; i<array.length; i++){
    if(array[i] in obj){
      obj[array[i]] += 1; 
    }
    else{
      obj[array[i]] = 1; 
    }
  }
  function sorter(a,b){
    return a-b;
  }
  let objArray = Object.values(obj)
  objArray.sort(sorter);

  let n = objArray[objArray.length - 1];
  let final = null;
  
  for (const key in obj) {
  if (obj[key] === n) {
    final = key;
    break;
  }
}
  return final;
}

// TESTS

console.log(mode([1,2,3,3,3,4,4,5]));
console.log(mode([1,1,1,2,3,4,4,4]));
console.log(mode([1,2,3,4,5,6,7,7]));
