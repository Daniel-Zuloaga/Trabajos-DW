$(document).ready(function(){
    $("a").click(function(){
        alert("Has pulsado el enlace.Ahora serás enviado a la página de la USAT.");
    });
    $("#c1b").click(function(){
        $("#cont1").css("background-color", "blue");
    });
    //Ocultar/mostrar bloque
    $("#c1b").click(function(){
        $("#cont1").toggle(1500);
    }, function(){
        $("#cont1").toggle(1500);
    });
});