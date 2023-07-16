const options = ["rock", "paper", "scissor"];
const randomValue = Math.floor(Math.random() * options.length);

const getComputerChoice = () => {
  return options[randomValue];
};

const playRound = (personOption, computerOption) => {
  let result = "";

  const personOptionLower = personOption.toLowerCase();
  const computerOptionLower = computerOption.toLowerCase();

  if (personOptionLower === computerOptionLower) {
    result = "Draw happened";
  } else if (personOptionLower === "rock") {
    if (computerOptionLower === "scissor") {
      result = "You have won! Rock beats scissor";
    } else {
      result = "You have lost! Paper beats rock";
    }
  } else if (personOptionLower === "scissor") {
    if (computerOptionLower === "paper") {
      result = "You have won! Scissor beats paper";
    } else {
      result = "You have lost! Rock beats scissor";
    }
  } else if (personOptionLower === "paper") {
    if (computerOptionLower === "rock") {
      result = "You have won! Paper beats rock";
    } else {
      result = "You have lost! Scissor beats paper";
    }
  }

  return result;
};

const game = () => {
  let computerScore = 0;
  let personScore = 0;
  let finalResul = "";
  for (let i = 1; i <= 5; i++) {
    const computerOption = getComputerChoice();
    const playerSelection = prompt("enter value u want");
    const result = playRound(playerSelection, computerOption);
    console.log(result);
    if (result.includes("won")) {
      personScore++;
    } else {
      computerScore++;
    }
  }

  if (personScore > computerScore) {
    finalResul =
      "You have won you have the following score" +
      personScore +
      " and computer has " +
      computerOption;
  } else {
    finalResul =
      "you have lost , you have " +
      personScore +
      " where computer have " +
      computerScore;
  }
  return finalResul;
};

const value=game()
console.log(value);