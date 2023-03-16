console.log('this is separate JS file');

// option 2: add onClick function on the html function

// IMPORATNT: WE WILL USE THIS MORE OFTEN

// <button onclick="console.log(65)">Another Button</button>

function makeRed (){
    document.body.style.backgroundColor='red';
}
// option 3
const makeBlueButton =document.getElementById('make-blue');
        console.log(makeBlueButton);
        makeBlueButton.onclick =makeBlue;

        function makeBlue(){
            document.body.style.backgroundColor='blue';
        }
// option 3 another version
        const makePurpleButton =document.getElementById('make-purple');
        
        makePurpleButton.onclick = function makePurple(){
            document.body.style.backgroundColor='purple';
        }

        // option:4
        const pinkButton =document.getElementById('make-pink');
        pinkButton.addEventListener('click', makePink)

        function makePink (){
            document.body.style.backgroundColor='pink';
        }
        
        // option:4 another
        const makeTomatoButton =document.getElementById('make-tomato');
      makeTomatoButton.addEventListener('click',function makeTomato(){
        document.body.style.backgroundColor='tomato'
      })

    //   option:4 final
    // IMPORTANT: WE WILL USE THIS SOMETIMES
    document.getElementById('make-orange').addEventListener('click',function(){
        document.body.style.backgroundColor='orange';
    })