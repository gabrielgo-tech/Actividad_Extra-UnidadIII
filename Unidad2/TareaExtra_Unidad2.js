let jugarNuevamente;
do {

let numeroComputadora = Math.floor(Math.random() * 9) + 1;

let numeroUsuario;

do {
    numeroUsuario = parseInt(prompt("Ingresa un numero entre 3 y 6:"));

} while (isNaN(numeroUsuario) || numeroUsuario < 3 || numeroUsuario > 6);

alert("Dato guardado, el numero es: " + numeroUsuario);

let prediccion = prompt("Tu número es " + numeroUsuario + ". ¿Crees que el número de la computadora es MAYOR, MENOR o IGUAL al tuyo?").toLowerCase();

let resultadoReal = "";

if (numeroComputadora > numeroUsuario) {
    resultadoReal = "mayor";
} else if (numeroComputadora < numeroUsuario) {
    resultadoReal = "menor";
} else {
    resultadoReal = "igual";
}

if (prediccion === resultadoReal) {
    alert("GANASTE, La computadora tenia el " + numeroComputadora + ". Su numero si era " + resultadoReal + " que el tuyo.");
} else {
    alert("PERDISTE. La computadora tenia el " + numeroComputadora + ". Su numero en realidad era " + resultadoReal + " que el tuyo.");
}
jugarNuevamente = prompt("¿Quieres jugar otra vez? (SI/NO)").toLowerCase();}

 while (jugarNuevamente === "si");

alert("Gabriel Andres Gomez Morales\nCarne Numero 26003843 " )