//  Problem 1: Let’s play a mind game

// In this function, i a going take any number as input positive number and add/multiply/divide and suctract the number and show the output

function mindGame(inputNumber){
    let inputType = typeof (inputNumber);

    if (inputType=='number'){
        let multiplication= inputNumber*3;
   let addition = multiplication+10;
   let division = addition/2;
   let substraction= division - 5;
   
   const total = substraction;

   
   
   

   return total;
    }
    else {
        return 'please insert valid number';
    }

   

   
}



// Problem 2: Finding even or odd
// in this function, i am going to take a string as input and find the and find the string length using .length. then calculate the index of string and show if the index is even or odd.

function evenOdd (input){
    let inputType = typeof (input);

    if (inputType =='string'){
        let char = input.length;
 if (char%2 == 0){
    return 'even';
 }
 else if (char%2==!0){
    return 'odd';
 }
    }
  
 else{
    return 'please insert string element only'
 }
  
}


// Problem 3: Is Less or Greater than seven
// in this function, i ma going to take a number as input and check if the number is lesser or greater than 7. if it's less than 7, this will show substraction from input number. if it's greater this will show the double amount of input number.

function isLGSeven(number){

    let inputType = typeof(number)
    if (inputType==='number'){

        const seven = 7;
    if (number <=7){
        return number-seven;
    }
    else{
        return number*2;
    }
    }

    else{
        return 'please insert numbers only';
    }
    

}


// Problem 4: Finding Bad data
//  in this function , i am going to take an input as array identify the negative numbers as bad data. this function will detect the amount of bad data in the array.

function findingBadData(inputArray){
    
        count = 0;
    
        for (let i = 0; i < inputArray.length; i++){
            if (inputArray[i] < 0){
                count++;
            }
            

        }
    
    return count;
   
    
}



// Problem 5: Convert your gems into diamond

// in this function, i am going to take 3 inputs as number and show a total sum using multiplication. if the sum is higher than 1000*2; i will subtract 2000 and illustrate the reminder.

function gemsToDiamond(firstFriendGem,secondFriendGem,thirdFriendGem){
    let inputType = typeof(firstFriendGem,secondFriendGem,thirdFriendGem);

    if (inputType==='number'){
        const firstFriendDiamond =firstFriendGem*21;

    const secondFriendDiamond =secondFriendGem*32;

    const thirdFriendDiamond =thirdFriendGem*43;

    const totalDiamond = firstFriendDiamond+secondFriendDiamond+thirdFriendDiamond;

    let remainingDiamond =totalDiamond - 2000;

    if(totalDiamond >1000*2){
        return remainingDiamond ;
    }

    else{
        return totalDiamond;
    }
    }

    else {
        return 'You can input only numbers, Sir :)'
    }


}


