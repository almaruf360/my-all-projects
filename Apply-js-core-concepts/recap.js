// 1. variable
var myName = 'khan';

// math operation: +, -, *, /
// shorthand: +=, *=, -=, ++, --

// 2. array
var  friends = ['abul', 'babul', 'kabul', 'dabul'];

var thirdFriend = friends[3];
friends[2]='dybala';
// console.log(friends)

// 3. conditionals
// <,>,>=,<=,==,===,!=,!==
if (friends.length<2){
    // console.log('fokir tor kuno friends nai')
}
else {

}
// 4.loops
var number = 0;
while(number <=5){
    // console.log(number)
    number++;
}

for (var i=345; i<= 411; i++){
    // console.log(i+2)
    i++;
}

// function

function isMoonUp (time){
    if(time >7 && time <=24){
        console.log(true)
        return true;
    }
    
}
isMoonUp(5);