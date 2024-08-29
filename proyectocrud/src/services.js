const URL_API = "http://localhost:3000/character"
console.log("hola")
// son peticiones al servidor 
//read method : (get)
async function getAllCharacters() {
 const response = await fetch(URL_API,{
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
const data = await response.json()  //pasar datos al formato
return data

}

const listTag = document.getElementById("charactersList")  

async function printCharacter () {
    
    const zoo = await getAllCharacters()
   
    //variable.innerHTML= "" 
    
    zoo.map ((animal) => {
        listTag.innerHTML +=
        `<li>
        <p>${animal.nombre}</p>
        <p>${animal.especie}</p>
        <p>${animal.años}</p>
    <button onclick= "deleteCharacter(${animal.id})">delete</button>
        </li>`

    })

}
printCharacter ()

//delete method : (delete)
async function deleteCharacter(id) {
    const response = await fetch(URL_API + `/${id}` , { 
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    })
    const deletedCharacter = await response.json()
    return deletedCharacter
}
//create method : (post)

async function createCharacter() {
    const nombre = document.getElementById("nombre").value;
    const especie = document.getElementById("especie").value;
    const años = document.getElementById("años").value;

    const newAnimal = {
        nombre: nombre,
        especie: especie,
        años: años
    };

    try {
        const response = await fetch(URL_API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAnimal)
        });

        if (response.ok) {
            const data = await response.json(); 
            addAnimal(data);
        } else {
            console.error('Error en la respuesta:', response.statusText);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

async function addAnimal(animal) {
    const characterAnimal = document.getElementById('charactersList');
    const listAnimal = document.createElement('li');
    listAnimal.textContent = `${animal.nombre}, ${animal.especie}, ${animal.años}`;

    characterAnimal.appendChild(listAnimal);
}


//update method : (put)
async function updateCharacter() {

    
}
const addAnimalForm= document.getElementById('createCharacterForm')

  

