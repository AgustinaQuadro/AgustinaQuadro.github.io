

function edad() {
    const cumple= document.getElementById("fecha_usuario").value;
    if (cumple=="") {
        document.querySelector("#error").innerText="Ingrese una fecha";

    }
    else {
        document.querySelector("#error").innerText="";
const hoyFecha= new Date();
const hoyAmo=hoyFecha.getFullYear();
const hoyMes=hoyFecha.getMonth();
const hoyDia=hoyFecha.getDate();

    

const cumpleFecha=new Date(cumple);

const cumpleMes=cumpleFecha.getDate();;
const cumpleDia=cumpleFecha.getMonth();;
const cumpleAmo=cumpleFecha.getFullYear();


var resultado;



if (cumpleAmo>hoyAmo){
    document.querySelector("#error").innerText="Ingrese una fecha válida";
}
else {
    if (cumpleMes>hoyMes && cumpleDia>hoyDia) {
        resultado=(hoyAmo-cumpleAmo)-1;

    }
    else {
        resultado=hoyAmo-cumpleAmo;

    }
}

document.querySelector("#resultado_edad").innerText="Su edad es "+resultado;
}
}






