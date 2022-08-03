let montoTotal = getMontoTotal();
let cuotas = getCuotas();
let montoCuota = getCuota();



function getMontoTotal() {
    let montoTotal = parseInt(prompt("Ingrese el monto del prestamo"));
    console.log(montoTotal);
    if (isNaN(montoTotal))
        while (isNaN(montoTotal)) {
            alert("Ha Ingresado un numero invalido, ingrese un numero.")
            montoTotal = parseInt(prompt("Por favor ingrese un numero valido mayor a 0"));
        }
    return montoTotal;
}


function getCuotas() {
    let cuotas = parseInt(prompt("Ingrese las cuotas que desea"));
    console.log(cuotas);
    if (isNaN(cuotas))
        while (isNaN(cuotas)) {
            alert("Ha Ingresado un caracter invalido, ingrese un numero.")
            cuotas = parseInt(prompt("Por favor ingrese un numero valido mayor a 0"));
        }
    return cuotas;
}

function getCuota() {
    var montoCuota = montoTotal / cuotas;
    // var montoCuota = parseInt(prompt("El monto mensual por cuota sera:" + montoCuota + "pesos"));
    alert("El monto que ustede debe pagar es $" + montoTotal + " en un total de " + cuotas + " cuotas y un costo de $"+montoCuota+" cada una.");
    //console.log(montoCuota);
    return montoCuota;
}