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

console.log(getPlayerChoice());
//compare the two - function
    // using a switch statement compare choices
//decide winner - game funcion
    // based on above comparison
//call above functions in a new function called "game"