function milesToKm (miles){
    const km = miles*1.609;
    return km;
}

const mile =10;
const km=milesToKm(mile);
// console.log('Killometer here',km)

// is even problem

function isEven (number){
    const reminder = number % 2;

    // console.log(reminder)

    if(reminder===0)
{
    console.log('reminder is even')
}

    else{
        console.log('reminder is odd')
    }
}
isEven(483);

