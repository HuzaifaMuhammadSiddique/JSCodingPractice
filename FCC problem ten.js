// PROBLEM
/*
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

// SOLUTION
function frankenSplice(arr1, arr2, n) {
  let newArray = [...arr2];
  for(let i=0; i<arr1.length;i++){
    newArray.splice(n+i,0,arr1[i])
  }
  return newArray;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
