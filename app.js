// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para validar si el nombre es válido
function validarNombre(nombre) {
    const regex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Permite solo letras y espacios
    return regex.test(nombre);
}

// Función para agregar un amigo
function agregarAmigo() {
    const inputNombre = document.getElementById('amigo');
    const nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("El nombre no puede estar vacío.");
        return;
    }

    if (!validarNombre(nombre)) {
        alert("El nombre no puede contener números o caracteres especiales.");
        return;
    }

    amigos.push(nombre);
    mostrarAmigos();
    inputNombre.value = "";
}

// Función para mostrar los nombres agregados
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear al amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos participantes para realizar el sorteo.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

/*
Validaciones:

Verifique que el nombre ingresado no esté vacío.
Asegura que el nombre solo contiene letras y espacios (no números, ni simbolos)

Agregar amigos:

Cuando haces clic en el botón “Añadir”, el nombre se agrega al arrayamigos

Sorteo aleatorio:

Alerta
Mensajes de error:
Si el nombre está vacío o tiene caracteres inválidos, se muestra un alert().
Si intentas hacer el sorteo sin suficientes participantes (menos de 2), también se muestra un alert().

*/
