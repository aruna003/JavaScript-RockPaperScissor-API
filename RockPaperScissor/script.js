let upperScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
// we are going to add an event for div wrt click

choices.forEach((choice) =>  {
    // console.log(choice);
    choice.addEventListener("click", () =>{
        // console.log("You clicked on : ", choice.id);
        playGame(choice.id);
    }
    )
})

const showWin = (userWin) =>{
    let msgBox = document.querySelector("#msg");
    let userScore = document.querySelector("#you");
    let compScoreDisp = document.querySelector("#comp");

    if (userWin){
        console.log("You win!!!");
        msgBox.innerText="You win!!!";
        upperScore+=1;
        userScore.innerHTML=upperScore;

    }
    else {
        console.log("You lose");
        msgBox.innerText="You lose";
        compScore+=1;
        compScoreDisp.innerHTML=upperScore;    }
}

const playGame = (userChoice) => {
    console.log(`user choice  is ${userChoice}`); 
    const compChoice = genCompChoice();
    console.log("comp choice is",compChoice)
    let userWin=true;

    if (userChoice === compChoice) {
        // Draw game call that func
        drawGame()
    }

    else{
        if (userChoice==='rock') {
            userWin = compChoice==='paper' ? false : true
        }

        else if ( userChoice==='paper') {
            userWin = compChoice==='rock' ? true : false
        }

        else {
            userWin = compChoice==='rock' ? false : true
        }

        if (userWin===true){

        }
    }
    updateChoice(userChoice,compChoice);
    showWin(userWin);
}

const score = () => {

}

function drawGame(){
    console.log("Its a Draw");
}

const genCompChoice = () => {
    const choices= ['rock','paper','scissor'];
    // Math.random() generates bt 0 - 1
    let randNo= Math.floor(Math.random() * 3);
    return choices[randNo];
}

let updateChoice = (userChoice, compChoice) => {
    let user = document.getElementById('userChoice');
    userText = "User: "
    userText+=userChoice
    user.textContent= userText

    let comp = document.getElementById('compChoice');
    compText = "Computer: "
    compText+=compChoice
    comp.textContent= compText
}
