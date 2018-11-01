window.onload = function(){

var coloramarillo = function(){
    this.style.background = "yellow";
}
var colorblanco =function(){
    this.style.background = "white";
}

var operador1 = document.getElementById("operador1")
operando1.addEventListener("focus", coloramarillo)
operando1.addEventListener("focusout", colorblanco)

}


var operador="";
var numeros=function(){
    var valor=this.value;
    if (operador==""){
        var valorinput =document.getElementById("operando1").value;
        if(valorinput=="0"){
            document.getElementById("operando1").value="";
        }
        document.getElementById("operando1").value+=valor;
    }else {
        //operando2

        document.getElementById("operando2").value="";
        document.getElementById("operando2").value+=valor;
    }
}

    var uno = document.getElementById("uno")
    uno.addEventListener("click",numeros)