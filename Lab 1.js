var userInput = prompt("What's your choice - Rock, Paper or Scissors") //Taking user input using prompt function
userInput = userInput.toLowerCase(); // Converting the user input to lower case for simplicity

const ComputerChoice = () => 
{
  const randomNumber = Math.floor(Math.random() * 3) // Using math.random to generate a number between 0 and 1
  if (0<=randomNumber<=0.34) // If it is between 0 and 0.34 then computer chooses paper
  {
    return "paper";
  }
  else if (0.35<=randomNumber<=0.67) // If it is between 0.35 and 0.67 then computer chooses scissors
  {
    return "scissors";
  }
   else if(0.68<=randomNumber<=1) // If it is between 0.68 and 1 then computer chooses rock
  {
    return "rock";
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) //Comparing values to determine the winner
  {
    return "It's a tie";
  }
   else if (userChoice === "paper" && computerChoice === "rock") 
  {
    return "User wins";
  }
   else if (userChoice === "scissors" && computerChoice === "Paper") 
  {
    return "User wins";
  }
   else if (userChoice === "rock" && computerChoice === "scissors") 
  {
    return "User wins";
  }
  else
  {
    return "Computer Wins"
  }
}

const playGame = () => 
{
  const userChoice = userInput//getting User's Choice
  const computerChoice = ComputerChoice(); // Computer chooses
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') // Checking if the user input is rock, paper or scissor and give error if the input is other than that
{
  //return userInput and Computer Input and the Winner on the console;
  console.log("You chose " + userChoice);
  console.log("The computer chose " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
  
} 
else
{
  console.log("Error!")  
}  
}

playGame();

