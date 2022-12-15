function dia() {
    const fecha = new Date ();

    const numeroSemana= fecha.getDay();
    
    const semana = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
    var diaSemana = semana[numeroSemana];
    document.getElementById("dia").innerText="Buen "+diaSemana;


}

dia ();