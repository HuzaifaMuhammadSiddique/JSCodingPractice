// Finding Greatest Common Divisor (GCD) using Euclidean's Algorithm.
function gcd(a,b){
    if(b>a){
        let temp = a;
        a = b;
        b = temp;
    }
    if(b===0){
       return a;
    } else{
        let r = a % b;
        return gcd(b, r)
    }

}


// Finding Least Common Multiple (LCM) using GCD.
function lcm(c,d){
    return (c*d) / gcd(c,d)
}


// TESTS
console.log(gcd(45,20))
console.log(lcm(45,20))
