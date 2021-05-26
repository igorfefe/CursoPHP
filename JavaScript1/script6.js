function calcularFactorial(){
    var n = document.getElementById("numero").value;
    var m = n;
    var x = 1;
    for(i=2; i<=n; i++){
        x*=i;
    }
    alert("El factorial de "+m+" es: "+x);
}