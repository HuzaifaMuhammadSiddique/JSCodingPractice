// Calculate the average of an array of numbers.

// CODE
let a = [3,7,10,0];
var sum = 0;
l = a.length;
for(element of a){
    sum = sum + element;
}
let avg = sum / l;

console.log(avg)
