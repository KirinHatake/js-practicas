
const getComputerChoice = function() {
    const randomNumber = Math.floor(Math.random() * 3); 
    let result = "";
    if (randomNumber === 0) {
        result = "piedra"
        return result;
    } else if (randomNumber === 1) {
        result = "papel"
        return result;
    } else  {
        result = "tijeras"
        return result;
    }
   
}


const getHumanChoice = function() {
    let seletHuman = prompt("Selecciona: Piedra, Papel o Tijera");
    return seletHuman = seletHuman.toLowerCase().trim();
    
    }

    //hata aqui todo va bien las dos anteriores funciones cumple su papel


function playGame() { 
    let humanscore = 0;
    let computerscore = 0;


// la solucion se basa en hacer que la funcion  playRound 
//pueda leer los caracteres de las dos funciones anteriores


 function playRound() {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("Tu seleccionaste " + humanChoice);
    console.log("La computadora seleccionó " + computerChoice);

    if (humanChoice === computerChoice){
        console.log("Empate");
    } 
    else if (
        (humanChoice === "piedra" && computerChoice === "tijeras") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijeras" && computerChoice === "papel") 
    ) {
        humanscore++;
        console.log("Ganaste!");
    }
    else {
        computerscore++;
        console.log("Perdiste!");
    }


}
for (let i = 0; i < 3; i++) {
    if (humanscore === 3 || computerscore === 3) {
        break;
    } else {
        playRound();
    }
    
}

return console.log("Tu puntaje: " + humanscore + ", Puntaje de la computadora: " + computerscore);
}

// Por si alguien a llegado hasta aqui y ve mi codigo no te falta mucho continua aprendiendo
// y muchos exitos en tu vida profesional y personal, 
// recuerda que la vida es un juego y tu eres el protagonista de tu historia, 
// no dejes que nadie te diga lo contrario, sigue adelante y nunca te rindas. 