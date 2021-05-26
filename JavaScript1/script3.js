var valores = [true, 5, false, "hola", "adios", 2];

var strings = [];
var booleans = [];
var ints = [];

for(var i=0; i<valores.length; i++){
    if(typeof valores[i] == 'string'){
        strings.push(valores[i]);
    }
    if(typeof valores[i] == 'boolean'){
        booleans.push(valores[i]);
    }
    if(typeof valores[i] == 'number'){
        ints.push(valores[i]);
    }
}
if(strings[0].length > strings[1].length){
    document.write("Es mayor:"+strings[0]);
}else{
 document.write("Es mayor:"+strings[1]);
}
document.write("<br>"+!booleans[0]);
document.write("<br>"+!booleans[1]);
document.write("<br>"+(ints[0]+ints[1]));
document.write("<br>"+(ints[0]-ints[1]));
document.write("<br>"+(ints[0]*ints[1]));
document.write("<br>"+(ints[1]/ints[0]));
document.write("<br>"+(ints[1]%ints[0]));