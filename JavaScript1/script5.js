var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

function checkLetraDNI(numeroDNI, letraDNI){
    numeroDNI = document.getElementById("numero").value;
    letraDNI = document.getElementById("letra").value.toUpperCase();
    if(numeroDNI < 0 || numeroDNI > 99999){
        alert("Número invalido");
    } else{
        var x = numeroDNI%23;
        if(letras[x] == letraDNI) alert("El DNI introducido es correcto");
        else alert("El DNI introducido no es correcto");
    }
}