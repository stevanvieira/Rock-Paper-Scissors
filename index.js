function getComputerChoice()
{
    let randomNum = Math.ceil(Math.random()*3);
    let computerChoice;
    if (randomNum == 1)
        computerChoice = "ROCK";
    else if (randomNum == 2)
        computerChoice = "PAPER";
    else
        computerChoice = "SCISSORS";
    //console.log(`Computers Choice: ${computerChoice}`);
    return (computerChoice);
}

function getUserChoice()
{
    let userChoice = prompt("Please enter Rock, Paper or Scissors:");
    userChoice = userChoice.toUpperCase();
    if (userChoice != "ROCK" && userChoice != "PAPER" && userChoice != "SCISSORS")
        console.log("You typed an invalid choice!");
    //console.log(`Users Choice: ${userChoice}`);
    return (userChoice);
}

function playRound(getComputerChoice, getUserChoice)
{
    let computer = getComputerChoice;
    let user = getUserChoice;
    if (user == computer)
        return(`You Draw! Both players choosed ${computer}`);
    else if (user == "ROCK" && computer == "SCISSORS")
        return("You Won! ROCK beats SCISSORS");
    else if (user == "PAPER" && computer == "ROCK")
        return("You Won! PAPER beats ROCK");
    else if (user == "SCISSORS" && computer == "PAPER")
        return("You Won! SCISSORS beats PAPER");
    else if (computer == "ROCK" && user == "SCISSORS")
        return("You Lose! ROCK beats SCISSORS");
    else if (computer == "PAPER" && user == "ROCK")
        return("You Lose! PAPER beats ROCK");
    else if (computer == "SCISSORS" && user == "PAPER")
        return("You Lose! SCISSORS beats PAPER");
    
}
//console.log(playRound(getComputerChoice(), getUserChoice()));

function game()
{
    let userCounter = 0;
    let computerCounter = 0;
    let i = 0;
    while (i < 5)
    {
        let result = playRound(getComputerChoice(), getUserChoice());
        if (result == "You Won! ROCK beats SCISSORS" || result == "You Won! PAPER beats ROCK" || result == "You Won! SCISSORS beats PAPER")
            userCounter++;
        else if (result == "You Lose! ROCK beats SCISSORS" || result == "You Lose! PAPER beats ROCK" || result == "You Lose! SCISSORS beats PAPER")
            computerCounter++;
        console.log(result);
        console.log(`User: ${userCounter} - Computer: ${computerCounter}`);
        i++;
    }
    if (userCounter > computerCounter)
        console.log(`CONGRATULATIONS! YOU WON ${userCounter} - ${computerCounter} !`);
    else if(userCounter < computerCounter)
        console.log(`BAD LUCK! YOU LOST ${userCounter} - ${computerCounter} !`);
    else
        console.log(`BALANCED GAME! YOU DRAW ${userCounter} - ${computerCounter} !`);
}
game();