// The following function flattens an array.

function steamrollArray(arr) {
  const result = [];

  function flattenArray(item) {
    if (!Array.isArray(item)) {
      result.push(item);
    } else {
      for (let i = 0; i < item.length; i++) {
        flattenArray(item[i]);
      }
    }
  }

  flattenArray(arr);
  return result;
}

console.log(steamrollArray([[["a"]], [["b"]]])); // Output: ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // Output: [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // Output: [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // Output: [1, {}, 3, 4]

