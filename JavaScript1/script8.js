function comprobarMayus(){
    var p = document.getElementById("palabra").value;
    var y = document.getElementById("resultado");
    var x = p.split('');
    var M = 0;
    var m = 0;
    
    for(i=0; i<x.length; i++){
        if(esMayuscula(x[i])){
            M=1;
        }else m=1;
    }
    
    if(M==1 && m==1){
        y.innerHTML="Contiene mayusculas y minusculas";
    }else{
        if(M==1){
            y.innerHTML="Contiene solo mayusculas";
        }else y.innerHTML="Contiene solo minusculas";
    }
}

function esMayuscula(letra)
{
    return letra === letra.toUpperCase();
}