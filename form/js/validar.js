var nombre = document.getElementById("name");
var correo = document.getElementById("email");
var clave = document.getElementById("password");

const formulario = document.getElementById("form");

var msj = document.getElementById("warnings");

formulario.addEventListener('submit',e =>{
    let msjMostrar = "";
    let enviar = false;

    e.preventDefault();

    if(nombre.value.length < 4 || nombre.value.length > 10){
        msjMostrar = msjMostrar + "El nombre debe tener entre 4 y 10 caracteres";
        enviar = true;
    }

    if(nombre.value == "Victor"){
        msjMostrar += "<br>El nombre no puede ser Victor";
        enviar = true;
    }

    var letra = nombre.value.charAt(0);
    if(!esMayuscula(letra)){
        msjMostrar += "<br>La primera letra debe ser mayúscula";
        enviar = true;
    }

    if(enviar){
        msj.innerHTML = msjMostrar;
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