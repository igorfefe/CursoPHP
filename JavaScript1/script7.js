function comprobarParImpar(){
    var n = document.getElementById("numero").value;
    var x = document.getElementById("resultado");
    console.log(x);
    
    if(n%2 == 0) {
        x.innerHTML = "Es par";
    }else{
        x.innerHTML = "Es impar";
    }
}