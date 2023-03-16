function centimeterToMeter (centimeter){
    const meter =centimeter*0.01;

    return meter;

}
let result = centimeterToMeter(230);
let fixedResult =result.toFixed(2);
console.log(fixedResult)