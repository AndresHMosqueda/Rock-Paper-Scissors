const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');


const pResult = document.getElementById('result');
const pScore = document.getElementById('score');

const buttons = document.querySelectorAll('button');
const choices = ['piedra', 'papel', 'tijeras']
const fileNames = {
    'piedra' : 'images/images/rock.png',
    'papel' : 'images/images/paper.png',
    'tijeras' : 'images/images/scissors.png',
}

let positiveScore = 0;
let negativeScore = 0;


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

    // mostar resultados
    imgPlayerChoice.setAttribute('src', fileNames[playerChoice] )
    imgComputerChoice.setAttribute('src',fileNames[computerChoice] )

    let result = ''; 

    switch (true) {
        case (winner === 'player'):
             result = 'ganas'
             ++positiveScore
            break;
        case (winner === 'computer'):
             result = 'pierdes'
             ++negativeScore
            break;
        case (winner === 'Draw'):
             result = 'empatas'
            break;
        default:
            result = 'empatas'
            break;
    }

    pResult.innerHTML = `Tu ${result} escogiendo <strong>${playerChoice}</strong>
    en contra de <strong>${computerChoice}</strong>`

  
    pScore.innerHTML = `Has ganado <strong>${positiveScore}</strong> veces
    Has perdido <strong>${negativeScore}</strong> veces`




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


        default:
            console.log('default');
            break;
    }


}