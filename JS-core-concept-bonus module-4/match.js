const numbers =[45, 65, 23, 98, 19];

// for (let i = 0; i < numbers.length; i++ ){
//     const number = numbers[i];
//     console.log(number)
// }

// ** for of loop
for (const number of numbers){
    // console.log(number)
}

const products = [
    {id: 1, name: 'walton phone',price:19000},
    {id: 2, name: 'lenovo laptop',price:39000},
    {id: 3, name: 'redmi phone',price:19000},
    {id: 4, name: 'dell laptop',price:19000},
    {id: 5, name: 'samsung Phone',price:19000},
    {id: 6, name: 'iphone',price:120000},
    {id: 7, name: 'macbook pro laptop',price:119000},
    {id: 8, name: 'poco Phone',price:19000},
]

for (const product of products){
    // console.log(product.price)
}

function matchProducts (products, search){
    const matched =[];

    for (const product of products){
        if (product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product)
        }
    }
    return matched;
}
const result = matchProducts(products,'LAptop');
console.log(result)