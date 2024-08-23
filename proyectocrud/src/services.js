const URL_API = "http://localhost:3000/zoo"
// son peticiones al servidor 
//read method : (get)
async function getAllZoo() {
 const response = await fetch("URL_API",{
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
})
const data = await response.json() 
return data

}
const listTag = document.getElementById("characterlist"),
async function printZoo () {
    const zoo = await getAllZoo()
    zoo.map ((zoo)) => {
        listTag.innerHTML += `<li>
        <p>${zoo.nomnbre}</p>
        <p>${zoo.especie}</p>
        <p>${zoo.años}</p>
        </li>`

    }
    
}

//delete method : (delete)
async function deleteZoo() {
    const response =await fetch(URL_API + "/${id}", {
        meyhod : "DELETE",
        headers {
            "content-Type": "apllication/json",

        },

    })  
    const deletedZoo = await response.json()
    console.log(deleteZoo)
    return deleteZoo 

}
  deleteZoo("1")
//create method : (post)

async function createZoo() {

}
//update method : (put)
async function updateZoo() {

}

  

