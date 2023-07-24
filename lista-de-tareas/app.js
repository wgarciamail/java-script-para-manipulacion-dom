const input = document.getElementById('ingresar-tareas');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

function agregarTarea() {
    if (input.value){
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        // crear y agregar contenedor iconos
        let iconos = document.createElement('div');
        iconos.classList.add("iconos");
        tareaNueva.appendChild(iconos);

        // Iconos
        let completar = document.createElement('i');
        completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
        completar.setAttribute("onclick","completarTarea(event)");

        let eliminar = document.createElement('i');
        eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
        eliminar.addEventListener('click', eliminarTarea);

        iconos.append(completar, eliminar);
        
        // Agregar tarea nueva
        listaDeTareas.appendChild(tareaNueva);
        input.value='';
        input.focus();

    } else {
        alert('Por favor ingresa una Tarea.');
    }
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});