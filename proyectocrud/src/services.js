const URL_API = "http://localhost:3000/character";

// Obtener todos los personajes (GET)
async function getAllCharacters() {
    const response = await fetch(URL_API, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await response.json();
    return data;
}

// Mostrar todos los personajes en la lista
async function printCharacter() {
    const charactersList = await getAllCharacters();
    const listTag = document.getElementById("charactersList");
    
    listTag.innerHTML = ""; // Limpiar la lista
    
    charactersList.forEach(character => {
        listTag.innerHTML += `
            <li>
                <p>${character.nombre}</p>
                <p>${character.especie}</p>
                <p>${character.años}</p>
                <button onclick="deleteCharacter(${character.id})">Eliminar</button>
                <button onclick="loadCharacterForUpdate(${character.id})">Actualizar</button>
            </li>
        `;
    });
}

printCharacter();

// Eliminar personaje (DELETE)
async function deleteCharacter(id) {
    await fetch(`${URL_API}/${id}`, { 
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    });
    printCharacter(); // Recargar la lista después de eliminar
}

// Cargar personaje en el formulario de actualización
async function loadCharacterForUpdate(id) {
    const response = await fetch(`${URL_API}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const character = await response.json();

    document.getElementById("updateId").value = character.id;
    document.getElementById("updateNombre").value = character.nombre;
    document.getElementById("updateEspecie").value = character.especie;
    document.getElementById("updateAños").value = character.años;
}

// Actualizar personaje (PUT)
async function submitUpdate() {
    const id = document.getElementById("updateId").value;
    const updatedData = {
        nombre: document.getElementById("updateNombre").value,
        especie: document.getElementById("updateEspecie").value,
        años: document.getElementById("updateAños").value,
    };

    const response = await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
    });

    if (response.ok) {
        console.log("Personaje actualizado");
        printCharacter();
    } else {
        console.error("Error al actualizar el personaje");
    }
}
