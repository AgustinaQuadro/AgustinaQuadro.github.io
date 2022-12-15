
function saludar(){


    var nombre =document.getElementById("nombre_usuario").value;
   
    var primerLetraMay= nombre.charAt(0).toUpperCase();
    var mayuscula= primerLetraMay + nombre.slice(1);
    
    document.getElementById("mostrar_nombre").innerHTML = ""+mayuscula;
    }

saludar ();
