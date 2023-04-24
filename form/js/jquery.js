$(document).ready(function () {
    $("#form").submit(function (e) {
        e.preventDefault();
        var nombre = $("#name").val();
        var correo = $("#email").val();
        var clave = $("#password").val();

        var msjMostrar = "";
        let enviar = false;

        if (nombre.trim().length < 4 || nombre.trim().length > 10) {
            msjMotrar += "El nombre debe tener entre 4 y 10 caracteres";
            enviar = true;
        }
        if (nombre.trim() == "Victor") {
            msjMostrar += "<br>El nombre no puede ser Victor";
            enviar = true;
        }

        var letra = nombre.trim().charAt(0);
        if (!esMayuscula(letra)) {
            msjMostrar += "<br>La primera letra debe ser mayúscula";
            enviar = true;
        }

        if (enviar) {
            $("#warnings").html(msjMostrar);
        }
        else {
            $("#warnings").html("Enviado");
        }



    });



    function esMayuscula(letra) {
        if (letra == letra.toUpperCase()) {
            return true;
        }
        else {
            return false;
        }
    }
});