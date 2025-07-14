
//diceño de UI

//header
const header = document.querySelector("#header");
header.style.display = "flex";
header.style.justifyContent = "center";
header.style.alignItems = "center";
header.style.backgroundColor = "skyblue";

//titulo principal
const princtitle = document.querySelector(".title");
princtitle.style.textAlign = "center";
princtitle.style.color = "blue";

//body
const body = document.querySelector("#body");
body.style.outline = "2px solid black";

const contenedor = document.createElement("div");
contenedor.style.display = "flex";
contenedor.style.border = "2px solid black";
contenedor.style.margin = "20px";
contenedor.style.padding = "20px";

contenedor.classList.add("container");

const destino = document.querySelector("#body");
destino.appendChild(contenedor);

//button

const button = document.createElement("button");
button.textContent = "Jugar";
button.style.padding = "10px 20px";
button.style.backgroundColor = "lightblue";
button.style.border = "2px solid black";
button.style.borderRadius = "5px";

// Agregar evento para iniciar el juego al hacer clic en el botón
button.addEventListener("click", () => {
    playGame();
});

const buttonContainer = document.querySelector(".container");
buttonContainer.appendChild(button);


const piedra = document.createElement("button");
piedra.textContent = "Piedra";
piedra.style.padding = "10px 20px";
piedra.style.backgroundColor = "lightblue";
piedra.style.border = "2px solid black";
piedra.style.borderRadius = "5px";

// Agregar evento para iniciar el juego al hacer clic en el botón

piedra.addEventListener("click", () => {
    seletHuman = "piedra";
    playGame();
    
    
 });

const piedraContainer = document.querySelector(".container");
piedraContainer.appendChild(piedra);





const tijera = document.createElement("button");
tijera.textContent = "Tijera";
tijera.style.padding = "10px 20px";
tijera.style.backgroundColor = "lightblue";
tijera.style.border = "2px solid black";
tijera.style.borderRadius = "5px";

// Agregar evento para iniciar el juego al hacer clic en el botón
tijera.addEventListener("click", () => {
    seletHuman = "tijera";
    playGame();
    
 });

const tijeraContainer = document.querySelector(".container");
tijeraContainer.appendChild(tijera);


const papel = document.createElement("button");
papel.textContent = "Papel";
papel.style.padding = "10px 20px";
papel.style.backgroundColor = "lightblue";
papel.style.border = "2px solid black";
papel.style.borderRadius = "5px";

// Agregar evento para iniciar el juego al hacer clic en el botón
papel.addEventListener("click", () => {
    seletHuman = "papel";
    playGame();
    
    });

const papelContainer = document.querySelector(".container");
papelContainer.appendChild(papel);


let seletHuman = "";





//seleccion de computadora
const getComputerChoice = function() {
    const randomNumber = Math.floor(Math.random() * 3); 
    let result = "";
    if (randomNumber === 0) {
        result = "piedra"
        return result;
    } else if (randomNumber === 1) {
        result = "papel"
        return result;
    } else {
        result = "tijera"
        return result;
    }
  
}




let humanscore = 0;
let computerscore = 0;
let ronda = 0;


//funcion principal
function playGame() { 



    //funcion para jugar una ronda
    function playRound() {

            const humanChoice = seletHuman;
            const computerChoice = getComputerChoice();
            
            console.log("Tu seleccionaste " + humanChoice);
            console.log("La computadora seleccionó " + computerChoice);
            
            


        if (humanChoice === computerChoice){
                console.log("Empate");
            } 
            else if (
                (humanChoice === "piedra" && computerChoice === "tijera") ||
                (humanChoice === "papel" && computerChoice === "piedra") ||
                (humanChoice === "tijera" && computerChoice === "papel") 
            ) {
                humanscore++;
                console.log("Ganaste!");
            }
            else {
                computerscore++;
                console.log("Perdiste!");
            }


            console.log("puntaje actual: " + "Tu = " + humanscore + " y " + "PC = " + computerscore);
            console.log("--------------------------------------------------");

        
    }
// hasta aqui todo bien
playRound();

    if (humanscore === 3) {
        console.log("¡Felicidades! Has ganado el juego.")
        return console.log("Fin del juego. Tu puntaje final es " + humanscore + " y el de la computadora es " + computerscore);
    }          
    else if(computerscore === 3) { 
        console.log("Lo siento, la computadora ha ganado el juego.")
        return console.log("Fin del juego. Tu puntaje final es " + humanscore + " y el de la computadora es " + computerscore);
                
    }
 
   
}
    






