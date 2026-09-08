/**
 * ============================================================================
 * 🎓 EVALUACIÓN DIAGNÓSTICA — BLOQUE C: JAVASCRIPT & DOM (CE3)
 * ============================================================================
 * 
 * 📌 REQUERIMIENTOS:
 * C2. Declara variables usando exclusivamente 'let' y 'const' (NO usar 'var').
 * C3. Crea al menos una función nombrada (ej: function generarSaludo(...) { ... }).
 * C4. Selecciona un elemento del DOM con querySelector() o querySelectorAll()
 *     y modifica su contenido (.textContent o .innerHTML) o estilo.
 * C5. Agrega interactividad escuchando eventos con addEventListener()
 *     (por ejemplo al hacer click en #btn-saludar o #btn-limpiar).
 */

const botonEnviar = document.querySelector("#btn-saludar");
const botonBorrar = document.querySelector("#btn-limpiar");
const campoTexto = document.querySelector("#input-nombre");
const salidaTexto = document.querySelector("#mensaje-resultado");

function calcularSaludo() {
    let nombreIngresado = campoTexto.value;
    salidaTexto.textContent = "Hola " + nombreIngresado;
}

function borrarDatos() {
    campoTexto.value = "";
    salidaTexto.textContent = "Esperando interacción...";
}

botonEnviar.addEventListener("click", calcularSaludo);
botonBorrar.addEventListener("click", borrarDatos);