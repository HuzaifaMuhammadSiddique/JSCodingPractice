// PROBLEM
/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

// SOLUTION
function findLongestWordLength(str) {
    let words = str.split(' ')
    let largest = words[0].length;
    for(let i=0; i<words.length; i++){
        if(words[i].length > largest){
            largest = words[i].length;
        }
    }
  return largest;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");
