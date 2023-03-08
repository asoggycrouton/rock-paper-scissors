let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('you win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>player score: " + playerScore + "<br>computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>you won the game! reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('it\'s a tie. you both chose ' + playerSelection
            + "<br><br>player score: " + playerScore + "<br>computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('you lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>player score: " + playerScore + "<br>computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>i won the game! reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})