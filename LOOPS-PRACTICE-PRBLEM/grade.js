var marks = 7;


if(marks <0){
 console.log('not possible')
}
else if(marks>0 && marks<=39){
 console.log('F Grade')
}
else if(marks>=40 && marks<=49){
    console.log('D grade')
}
else if(marks>=50 && marks<=59){
    console.log('C grade')
}
else if(marks>=60 && marks<=79){
    console.log('B grade')
}
else if(marks>=80 && marks<=100){
    console.log('A grade')
}
else{
    console.log('Invalid')
}
