//Scissors Paper Rock
// Randomly generate computers choice - function
const getComChoice = () => {
    let choice = Math.floor(Math.random()*3);
    //set variable with function that generates random number between 0 - 2

    switch (choice) {
        case 0: return 'rock';
        break;
        case 1: return 'paper';
        break;
        case 2: return 'scissors';
        break;
        default: return 'something went wrong';
    }//set choice based on number generated
}

// get players choice - function
let getPlayerChoice = () => { 
    
    let choice = prompt('choose rock,paper or scissors').toLowerCase();
    if(choice == 'scissor'){
        choice = 'scissors';
    }
    let goodChoice = false;
    //get input
    //set it to lower case

    while (!goodChoice){
        switch(choice) {
            case 'rock':
                goodChoice = true;
                break;
            case 'paper':
                goodChoice = true;
                break;
            case 'scissor':
                choice = 'scissors';
            case 'scissors':
                goodChoice = true;
                break;
            default:
                choice = prompt('try again, rock, paper or scissors').toLowerCase();
        }
        
    }
        return choice;
    //check it matches one of the three choices
    //assign choice
} //end getPlayerChoice

// variables to track wins
let playerWins = 0
let comWins = 0

//compare the two - function
function playRound(comChoice = getComChoice(), playerchoice = getPlayerChoice()) {
    console.log(comChoice);
    console.log(playerchoice);

    switch (true){
        case comChoice === playerchoice:
            return `it's a tie! you both chose ${playerchoice}`;
            break;
        case comChoice == 'rock' && playerchoice == 'scissors':
            comWins++;
            return `you lose, ${comChoice} beats ${playerchoice}`;
            break;
        case comChoice == 'paper' && playerchoice == 'rock':
            comWins++;
            return `you lose, ${comChoice} beats ${playerchoice}`;
            break;
        case comChoice == 'scissors' && playerchoice == 'paper':
            comWins++;
            return `you lose, ${comChoice} beats ${playerchoice}`;
            break;
        default:
            playerWins++;
        return `YOU WIN !!! ${playerchoice} beats ${comChoice}`;
    }

    // using a switch statement compare choices
//decide winner based on above comparison
} // end of playRound function

function game() {
    
    for (let rounds = 1; rounds < 5; rounds++){
        console.log(`Round ${rounds}`);
        console.log(playRound());
    }
    if (playerWins == comWins){
        return ' Some how you tied'
    } else if(playerWins > comWins){
        return `YOU WON THE GAME, with ${playerWins} Wins`;
    } else {
        return `You lost, the Computer wont ${comWins} Wins`;
    }
}

console.log(game());

//call above functions in a new function called "game" - game has several rounds