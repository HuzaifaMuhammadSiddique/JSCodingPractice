const p = (n) =>{console.log(n)}
let a = [1,2,3,5];

a[3] = 4;

p(a)

a[5] = 6

p(a)

p(a[4])

a[1] = true;
a[10] = "a";

p(a)
p(typeof(a))
p(typeof(a[0]))
p(typeof(a[1]))
p(typeof(a[10]))
