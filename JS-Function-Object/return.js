function add (num1, num2){
    console.log(num1,num2)

    var sum =num1+num2;
    
    // console.log(sum);
    return sum;
}
//  add (15, 45);

var  total = add (80,20);

// console.log('total: ', total)

function bringShingara (money){
    var shingaraPrice =10;
    var quantity = money/ shingaraPrice;
    return quantity;
}
var myTaka = 150;
var shingaras = bringShingara(myTaka);
console.log('eating shingara', shingaras)