const buttons = document.querySelectorAll('button');
const resultEl = document.getElementById('result');

const playerScoreEl = document.getElementById('user-score');
const computerScoreEl = document.getElementById('computer-score');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const result = playRound(button.id, computerPlay());
        // console.log(result);
        resultEl.textContent = result;
        console.log("Player score = ", playerScore, "\nComputer score = ", computerScore);
        playerScoreEl.textContent = playerScore;
        computerScoreEl.textContent = computerScore
    });
});

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);

    return choices[randomChoice]
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        return "It's a tie."
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock"))
        {
            playerScore++;
            return "You win!\n" + playerSelection + " beats " + computerSelection;
        }
        else
        {
            computerScore++;
            return "You lose!\n" + computerSelection + " beats " + playerSelection;
        }
}