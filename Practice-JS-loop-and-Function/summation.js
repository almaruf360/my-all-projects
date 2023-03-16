function addOneToN(n){
    sum = 0;
    for (let i =1; i <= n; i++){
        sum = sum+i;
        console.log(sum)
        
}
    return sum;
}

let total =addOneToN(10);
console.log(total)