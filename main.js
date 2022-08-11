let IdCounter = 0;
let listaTareas = new Array();




while (true) {
    let key = parseInt(prompt("Ingrese 1 para crear una tarea, 2 para ver las tareas o 3 para elimanr una tarea. Si quiere salir precione cargue el numero 4"));
    switch (key) {
        case 1:
            nuevaTarea();
            break;

        case 2:
            verTareas();
            break;

        case 3:
            eliminarTarea();
            break

        case 4:
            break;

        default:
            alert("Opcion Invalida!!!");
            break;
    }

    if (key == 4) {
        break;
    }
}

function nuevaTarea() {
    let tarea = prompt("Ingrese una nueva tarea.");
    listaTareas.push(tarea);
    console.table(listaTareas);
}

function verTareas() {
    console.table(listaTareas);
}

function eliminarTarea() {
    let numeroTarea = parseInt(prompt("Ingrese el numero de la tarea que desea eliminar."));
    listaTareas.splice(numeroTarea, 1);
    console.table(listaTareas);
}