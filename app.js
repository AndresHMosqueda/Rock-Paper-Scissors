const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');


const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra', 'papel', 'tijeras']

buttons.forEach(button => {
    button.addEventListener('click', startGame)
})

function startGame(event) {
    const button = event.currentTarget;
    const playerChoice = button.dataset.choice;
    console.log(playerChoice);

    // determinar la eleccion de la computadora
    const computerChoice = getComputerChoice()
    console.log(computerChoice);

    const winner = getWinner(playerChoice, computerChoice);

    console.log(`El ganador es: ${winner}`);



    //mostar resultados
    // if(playerWins) {

    // } else {

    // }
};

function getComputerChoice() {
    //obtener un valor aleatorio i
    const i = Math.floor(Math.random() * 3)

    // devolver la eleccion de la computadora
    return choices[i]

}

function getWinner(playerChoice, computerChoice) {


    switch (true) {
        case (playerChoice === 'piedra' && computerChoice === 'piedra'):
            return 'Draw';
            break;
        case (playerChoice === 'tijeras' && computerChoice === 'tijeras'):
            return 'Draw';
            break;
        case (playerChoice === 'papel' && computerChoice === 'papel'):
            return 'Draw';
            break;

        case (playerChoice === 'piedra' && computerChoice === 'papel'):
            return 'computer';
            break;
        case (playerChoice === 'piedra' && computerChoice === 'tijeras'):
            return 'computer';
            break;
        case (playerChoice === 'papel' && computerChoice === 'tijeras'):
            return 'computer';
            break;
        case (playerChoice === 'tijeras' && computerChoice === 'piedra'):
            return 'computer';
            break;

        case (playerChoice === 'papel' && computerChoice == 'piedra'):
            return 'player';
            break;
        case (playerChoice === 'piedra' && computerChoice === 'tijeras'):
            return 'player';
            break;
        case (playerChoice === 'tijeras' && computerChoice === 'papel'):
            return 'player';
            break;
        case (playerChoice === 'piedra' && computerChoice === 'tijeras'):
            return 'player';
            break;

        default:
            console.log('default');
            break;
    }


}