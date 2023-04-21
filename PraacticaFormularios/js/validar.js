/*Hacemos variables y les damo el valor de lo que ponga en el formulario,
lo sacamos con un get y lo buscamos por el ID, nombre o clase
*/

var nombre = document.getElementById("name");
var correo = document.getElementById("email");
var clave = document.getElementById("password");

//Extraemos el formulario. Es CONST porque siempre varia
const formulario = document.getElementById("form");

//para mandar mensajes
var msj = document.getElementById("warning");


//Validaciones del formulario 
formulario.addEventListener ('submit',e=>{
    let msjmostrar = "";
    let enviar = false;

    e.preventDefault();

    if(nombre.value.length < 4 || nombre.value.length > 10){
        msjmosrar += msjmostrar + "El nombre debe tener de 4 a 10 caracteres";
        enviar = true
    }

    if (nombre.value == "Victor"){
        msjmosrar += msjmostrar + "El nombre Victor no es valido";
        enviar = true
    }


    //creamos variable para validar si la primera letra es mayuscula
    var letra = nombre.value.charAt(0);
    if (!esMayuscula.letra){ // ocupamos "!" porque necesitamos lo opuesto osea que no exista
        msjmostrar += "La primera letra debe ser mayuscula";
        enviar = true;
    }

    if(enviar){
        msj.innerHTML = msjmostrar;
    }
    else{
        msj.innerHTML = "Enviado";
    }

});


function esMayuscula(letra){
    if(letra == letra.toUpperCase()){
        return true;
    }
    else{
        return false;
    }
}