const form = document.getElementById("form");
const input = document.getElementById("todo");
const list = document.getElementById("list");


// Récupération des objets de la todoList
let storage = JSON.parse(localStorage.getItem('todo'));

let todoList;
if (storage !== null){
    todoList = storage;
} else {
    todoList = [];
}
console.log(todoList);


// Affichage des éléments de la todoList

todoList.forEach(function(task, index){
    console.log(task.state);
    // Afficher les éléments
    promptTask(task, index);
});

function promptTask(obj, index){
    // Création de la div contenant les éléments
    let newItem = document.createElement("div");
    newItem.classList = "todo__items";
    newItem.id = index;

    // Ajout du rond
    let newItemCheck = document.createElement("div");

    // Ajout du text
    let newItemText = document.createElement('p');
    newItemText.textContent = obj.name;
    newItemText.classList = "todo__text";
    
    // Ajout de la croix
    let newItemCross = document.createElement('img');
    newItemCross.src = "./img/icon-cross.svg";

    // Définition des classes
    if (obj.state == false){
        newItemCheck.classList = "todo__check";
        newItemText.classList = "todo__text";
        newItemCross.classList = "todo__cross";
    } else {
        newItemCheck.classList = "todo__check todo__check--done";
        newItemText.classList = "todo__text todo__text--done";
        newItemCross.classList = "todo__cross todo__cross--done";
    }

    // Ajout d'un eventListener de changement d'état
    newItem.addEventListener("click", function(event){
        event.preventDefault();
        // Changement d'état de l'objet
        let todoList = JSON.parse(localStorage.getItem("todo"));
        let index = newItem.id;
        if (obj.state == false){
            obj.state = true;
            todoList[index].state = true;
            newItemText.classList = "todo__text todo__text--done";
            newItemCheck.classList = "todo__check todo__check--done";
        } else {
            obj.state = false;
            todoList[index].state = false;
            newItemText.classList = "todo__text";
            newItemCheck.classList = "todo__check";
        }
        localStorage.setItem("todo", JSON.stringify(todoList));
    })

    // Affichage dans le DOM
    newItem.appendChild(newItemCheck);
    newItem.appendChild(newItemText);
    newItem.appendChild(newItemCross);
    list.appendChild(newItem);

}



// Ajout EventListener sur l'input 
form.addEventListener("submit", function(event){
    event.preventDefault();

    // On récupère le contenu de l'input
    let inputValue = {name: input.value, state: false};

    // On récupère la todoList
    todoList = JSON.parse(localStorage.getItem("todo"));
    if (todoList == null){
        todoList = [];
    }

    // On ajoute le nouvel élément à la todoList;
    todoList.push(inputValue);

    // On renvoie la liste au navigateur
    localStorage.setItem("todo", JSON.stringify(todoList));

    promptTask(inputValue, todoList.length-1);

    input.value = "";
})

// Fonction

// TESTS
