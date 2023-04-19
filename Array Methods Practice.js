let numbers =[0,1,2,3,4,5,6,7,8,9];

console.log(numbers);

numbers.push(10);
console.log(numbers);

numbers.push(10,11,12,13,14,15);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.pop();
numbers.pop();
console.log(numbers);

numbers.shift();
numbers.shift();
console.log(numbers);

numbers.unshift(32, 8, 7, 3, 99);
console.log(numbers);

let part = numbers.slice(3, 7);
console.log(part);

let part2 = numbers.slice(6,10);
console.log(part2);

let addedElements = numbers.splice(1, 0, 57, 21, 12, 5);
console.log(addedElements);
console.log(numbers);

let removedElements = numbers.splice(8, 4);
console.log(removedElements)
console.log(numbers);

let stringOfNumbers = numbers.join("+");
let stringOfpart = part.join("-");
let stringOfpart2 = part2.join("x");
let stringOfRemovedElements = removedElements.join("/");

console.log(stringOfNumbers);
console.log(stringOfpart);
console.log(stringOfpart2);
console.log(stringOfRemovedElements);

console.log(numbers.indexOf(99));
console.log(numbers.indexOf(54));
console.log(numbers.indexOf(32));
console.log(numbers.indexOf(6));
console.log(numbers.indexOf(7));
console.log(numbers.indexOf(12));
console.log(numbers.indexOf(1));
console.log(numbers.indexOf(8));
console.log(numbers.indexOf(57));
