function primeGenerator(n){
    var list = [2,3]; 
    if(n<=2){
        return list.slice(0,n);
    }
    let count = 0;
    let len = list.length;
    while((len) !== n){
        count++;
        len = list.length;
        let number = list[len-1] + count;
        let factors = [];
        for(let i=number; i>=1; i--){
            if(number % i === 0){
                factors.push(i);
            }
        }
        if(factors.length > 2){
        }else{
            list.push(number);
            count = 0;
        }
        len = list.length;
        
    len = list.length;
    }
    return list;
}
