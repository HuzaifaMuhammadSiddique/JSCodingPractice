function primeGenerator(n){
    var list = [2,3,5,7,9,11,13,15,17,19]; // 20 21 22 23 24
    if(n<=10){
        return list.slice(0,n);
    }
    let count = 1;
    let len = list.length;
    while((len+1) !== n+1){
        let number = list[len-1] + count;
        let factors = [];
        for(let i=number; i>=1; i--){
            if(number % i === 0){
                factors.push(i);
            }
        }
        if(factors.length > 2){
        }else{
            list.push(number)
        }
        len = list.length;
        count++;
        
    }
    return list;
}
