var shoppingItems=['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes']

var shoppingCart ={
    books: 3,
    sunglass:1,
    keyboard:2,
    mouse:4,
    pen:10,
    shoes:2
}
const keys = Object.keys(shoppingCart);
// console.log(keys)

const values = Object.values(shoppingCart);
console.log(values)
for (var i=0; i < keys.length; i++){
    var propertyName = keys[i];

    // console.log(propertyName)

}

// for in loop

for(var propertyName in shoppingCart){
 
    var value = shoppingCart[propertyName];
    
    console.log(propertyName)
}