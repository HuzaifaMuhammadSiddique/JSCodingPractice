// PROBLEM
/*
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.
*/

// SOLUTION
function bouncer(arr) {
  let n = [...arr];
  for (let i = 0; i < n.length; i++) {
    if (!n[i]) {
      n.splice(i, 1);
      i--;
    }
  }
  return n;
}

let x = bouncer([7, "ate", "", false, 9]);
console.log(x); // output: [7, "ate", 9]
