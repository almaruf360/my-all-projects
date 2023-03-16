// function functionnames (parameters){
//     // function body
//     // return

// }

// functionnames returnValue (parameters value)

function getAvg (assignment1,assignment2,assignment3){
    const total = assignment1+assignment2+assignment3;
    const avg =total/3;
    return avg;
}
const assignment1Mark=57;
const assignment2Mark=58;
const assignment3Mark=53;

var myAvg=getAvg(assignment1Mark,assignment2Mark,assignment3Mark);
console.log('my average so far : ', myAvg)