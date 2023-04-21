// PROBLEM
/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/

// SOLUTION
function mutation(arr) { 
    let counter = new Set();
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    
    if(str1 === str2){
        return true
    }
    
    let arr1 = str1.split(""); // h e l l o
    let arr2 = str2.split(""); // h e y
    
    for(let i=0; i<arr2.length; i++){
        for(let j=0; j<arr1.length; j++){
            if(arr2[i] === arr1[j]){
                counter.add(arr2[i]);
            }            
        }
    }
    
    let mySet = new Set(arr2)
    let myArray = Array.from(mySet);
    let result = Array.from(counter);
    if(JSON.stringify(result) === JSON.stringify(myArray)){
        return true;
    } else{
        return false;
    }

}


// BEST SOLUTION
function mutation(arr) {
  // Convert both strings to lowercase for case-insensitive comparison
  let str1 = arr[0].toLowerCase();
  let str2 = arr[1].toLowerCase();
  
  // Loop through each character of str2
  for(let i = 0; i < str2.length; i++) {
    // If the character is not found in str1, return false
    if(str1.indexOf(str2[i]) === -1) {
      return false;
    }
  }
  // If all characters are found, return true
  return true;
}

// TESTS
/*
mutation(["hello", "hey"]) should return false.
Passed:mutation(["hello", "Hello"]) should return true.
Passed:mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.
Passed:mutation(["Mary", "Army"]) should return true.
Passed:mutation(["Mary", "Aarmy"]) should return true.
Passed:mutation(["Alien", "line"]) should return true.
Passed:mutation(["floor", "for"]) should return true.
Passed:mutation(["hello", "neo"]) should return false.
Passed:mutation(["voodoo", "no"]) should return false.
Passed:mutation(["ate", "date"]) should return false.
Passed:mutation(["Tiger", "Zebra"]) should return false.
Passed:mutation(["Noel", "Ole"]) should return true.
*/
