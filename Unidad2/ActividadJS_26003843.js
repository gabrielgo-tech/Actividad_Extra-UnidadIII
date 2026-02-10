var mes;
var mesValido = false;
while (mesValido == false) {
    mes = parseInt(prompt("Ingresa tu mes de nacimiento (1 al 12):"));
    if (mes >= 1 && mes <= 12) {
        mesValido = true;
    } else {
        alert("Mes no valido. Por favor, ingresa un numero entre 1 y 12.");
    }
}

var dia;
var diaValido = false;
while (diaValido == false) {
    dia = parseInt(prompt("Ingresa tu dia de nacimiento (1 al 31):"));

    if (dia >= 1 && dia <= 31) {
        if (mes == 2 && dia > 29) {
            alert("Febrero no tiene mas de 29 dias. Intenta de nuevo.");
        } else {
            diaValido = true;
        }
    } else {
        alert("Dia no valido. Por favor, ingresa un numero entre 1 y 31.");
    }
}

var signo = "";

if ((mes == 1 && dia >= 21) || (mes == 2 && dia <= 19)) {
    signo = "Acuario";
} else if ((mes == 2 && dia >= 20) || (mes == 3 && dia <= 20)) {
    signo = "Piscis";
} else if ((mes == 3 && dia >= 21) || (mes == 4 && dia <= 20)) {
    signo = "Aries";
} else if ((mes == 4 && dia >= 21) || (mes == 5 && dia <= 20)) {
    signo = "Tauro";
} else if ((mes == 5 && dia >= 21) || (mes == 6 && dia <= 20)) {
    signo = "Geminis";
} else if ((mes == 6 && dia >= 21) || (mes == 7 && dia <= 22)) {
    signo = "Cancer";
} else if ((mes == 7 && dia >= 23) || (mes == 8 && dia <= 23)) {
    signo = "Leo";
} else if ((mes == 8 && dia >= 24) || (mes == 9 && dia <= 22)) {
    signo = "Virgo";
} else if ((mes == 9 && dia >= 23) || (mes == 10 && dia <= 23)) {
    signo = "Libra";
} else if ((mes == 10 && dia >= 24) || (mes == 11 && dia <= 22)) {
    signo = "Escorpion";
} else if ((mes == 11 && dia >= 23) || (mes == 12 && dia <= 21)) {
    signo = "Sagitario";
} else if ((mes == 12 && dia >= 22) || (mes == 1 && dia <= 20)) {
    signo = "Capricornio";
}

alert("Según tu fecha de nacimiento, tu signo es: " + signo);