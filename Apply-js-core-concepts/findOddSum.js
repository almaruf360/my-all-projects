function getSumArray (number){
    console.log(number)
    let  sum =0;
    for (let i =0; i < number.length; i++){
        const index= i;
        const element= number[index];
        sum= sum+element;
        console.log(index,element,sum)
    }
}
const myNumber = [12, 65, 45, 23, 73, 75];
getSumArray(myNumber);