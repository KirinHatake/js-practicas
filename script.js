
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

let seletHuman = "";

for (let i = 0; i < 3; i++) {
    seletHuman = prompt("Selecciona: Piedra, Papel o Tijera").toLowerCase().trim();
        if (seletHuman === "piedra" || seletHuman === "papel" || seletHuman === "tijeras") {
            return seletHuman;
        }
        
        else {
             console.log("intento incorrecto, vuelve a intentarlo");
             if (i === 2) {
                console.log("Último intento fallido. Fin del juego.");
                return null; 
             }
        }
     
        
    }
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
    
    if (humanChoice === null) {
        console.log("Juego terminado por selección inválida.");
        return;
    }
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
        console.log("Tu puntaje: " + humanscore + ", Puntaje de la computadora: " + computerscore);
    }
    
}
return console.log("Tu puntaje: " + humanscore + ", Puntaje de la computadora: " + computerscore);

}

