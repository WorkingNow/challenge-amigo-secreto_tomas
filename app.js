// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let listaDeAmigos = [];

/**
 * Función para agregar un amigo a la lista
 */
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, ingrese un nombre válido');
        return;
    }
    
    // Agregar el nombre a la lista
    listaDeAmigos.push(nombreAmigo);
    
    // Limpiar el campo de texto
    inputAmigo.value = '';
    
    // Actualizar la lista en la interfaz
    actualizarListaAmigos();
    
    // Limpiar el resultado anterior si existe
    limpiarResultado();
}

/**
 * Función para actualizar la lista de amigos en la interfaz
 */
function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista actual
    listaAmigosElement.innerHTML = '';
    
    // Agregar cada amigo a la lista
    listaDeAmigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosElement.appendChild(li);
    });
}

/**
 * Función para sortear un amigo aleatorio
 */
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (listaDeAmigos.length === 0) {
        alert('Debe agregar al menos un amigo a la lista');
        return;
    }
    
    // Seleccionar un amigo aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const amigoSorteado = listaDeAmigos[indiceAleatorio];
    
    // Mostrar el resultado
    mostrarResultado(amigoSorteado);
}

/**
 * Función para mostrar el resultado del sorteo
 * @param {string} amigo - El nombre del amigo sorteado
 */
function mostrarResultado(amigo) {
    const resultadoElement = document.getElementById('resultado');
    
    // Limpiar resultados anteriores
    resultadoElement.innerHTML = '';
    
    // Crear elemento para mostrar el resultado
    const li = document.createElement('li');
    li.textContent = `¡${amigo} ha sido sorteado como tu amigo secreto!`;
    resultadoElement.appendChild(li);
}

/**
 * Función para limpiar el resultado
 */
function limpiarResultado() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
}

// Agregar evento para permitir agregar amigos presionando Enter
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});