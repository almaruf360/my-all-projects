var shoppingCart ={
    books: 3,
    sunglass:1,
    keyboard:2,
    mouse:4,
    pen:10
}

// when you know the specific property name, use dot notation to get the property value.
var penCount = shoppingCart.pen;
// alternative system
// / when you know the specific property name, use dot notation to get the property value.
var  penCount2 = shoppingCart['pen'];

var properties = Object.keys(shoppingCart)

console.log(properties)
console.log(shoppingCart)