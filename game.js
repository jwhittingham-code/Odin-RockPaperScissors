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
let getPlayerChoice = prompt('choose rock,paper or scissors');
console.log(getPlayerChoice);
    //get input
function checkPlayerInput (){
    choice = getPlayerChoice.toLowerCase;
    //set it to lower case

    while (choice !== 'rock'){
        choice = prompt('try again');
    }
        return choice;
    //check it matches one of the three choices
    //assign choice
}
console.log(checkPlayerInput());
//compare the two - function
    // using a switch statement compare choices
//decide winner - game funcion
    // based on above comparison
//call above functions in a new function called "game"