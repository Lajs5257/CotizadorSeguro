//Constructores
function Seguro(marca, year, tipo) {
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}
function UI() {}

//llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear(),
            min = max - 20;
    
    const selectYear = document.querySelector('#year');

    for( let i = max; i > min; i-- ) {
        let opcion = document.querySelector('option');
        opcion.value = i;
        opcion.textContent = i;
        selectYear.appendChild(opcion);
    } 
}

// Muestra alertas en pantalla
UI.prototype.mostrarMensaje = function() {

}

// Instanciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
})

eventListener();
function eventListeners() {
    const formulario = document.querySelector('#cotizador-seguro');
    formulario.addEventListener('submit', cotizadorSeguro);
}

function cotizadorSeguro(e) {
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //Leer el año seleccionado
    const year = document.querySelector('#year').value;

    //Leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:check').value;
    if(marca === '' || year === '' || tipo === '') {
        console.log('no paso la validacion');
    }else{
        console.log('se paso la validacion');
    }
}