const addButton = document.querySelector('.addButton');
const removeButton = document.querySelector('.removeButton');
const completeButton = document.getElementsByClassName('.completeButton');
const editButton = document.querySelector('.editButton');
const taskContainer = document.querySelector('.taskDiv');
let input = document.querySelector('input');
const completeDiv = document.querySelector('.completeDiv');
const completeInputDiv = document.querySelector('.completeInputDiv');

let inputField = '';


class completeItem{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('inputField');
        input.type = "text";

        let itemContainer = document.createElement('div');
        itemContainer.classList.add('completeInputDiv');

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.innerHTML = '<i class="fas fa-minus"></i>';

        completeDiv.appendChild(itemContainer);
        itemContainer.appendChild(input);
        itemContainer.appendChild(removeButton);
        
        removeButton.addEventListener('click', ()=> this.remove(itemContainer));
        
    }
    remove(item){
        completeDiv.removeChild(item);
    }

   };

   function complete(element){
    new completeItem(element);
}

   
class item{
    constructor(itemName){
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('inputField');
        input.type = "text";

        let itemContainer = document.createElement('div');
        itemContainer.classList.add('item');

        let editButton = document.createElement('button');
        editButton.classList.add('editButton');
        editButton.innerHTML = '<i class="far fa-edit">';

        let removeButton = document.createElement('button');
        removeButton.classList.add('removeButton');
        removeButton.innerHTML = '<i class="fas fa-minus"></i>';

        let completeButton = document.createElement('button');
        completeButton.classList.add('completeButton');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';

        taskContainer.appendChild(itemContainer);

        itemContainer.appendChild(input);
        itemContainer.appendChild(editButton);
        itemContainer.appendChild(removeButton);
        itemContainer.appendChild(completeButton);
        
        editButton.addEventListener('click', ()=> this.edit(input));
        removeButton.addEventListener('click', ()=> this.remove(itemContainer));
        completeButton.addEventListener('click', ()=> complete(itemName));
        completeButton.addEventListener('click', ()=> this.remove(itemContainer));
    }

   edit(input){
       input.disabled = !input.disabled;
   }

   remove(item){
       taskContainer.removeChild(item);
   }
};



function addItem(){
       if(input.value != ""){
           new item(input.value);
           input.value = "";
           inputField = input.value;
       }
};

addButton.addEventListener('click', addItem);
window.addEventListener('keydown', (e) => {
    if(e.which == 13){
        addItem();
    }
})

const greyWhite = document.querySelector(".grey-and-white");
const redYellow = document.querySelector(".red-and-yellow");
const blueGreen = document.querySelector(".green-and-blue");
const blackPink = document.querySelector(".black-and-pink");
const body = document.querySelector('body');
const html =  document.querySelector('html');
const h1 = document.querySelectorAll('h1');
const inputDiv = document.querySelector('.inputDiv');
const taskDiv = document.querySelectorAll(".taskDiv");
const completedDiv =  document.querySelectorAll('.completeDiv');
const completedInput = document.querySelectorAll('.completeDiv input');

    

greyWhite.addEventListener('click', ()=>{
    body.style.backgroundColor = "grey";
    html.style.backgroundColor = "grey";
    h1.forEach(element => {
        element.style.color = "white";
        element.style.textShadow = "3px 3px black";
    });
    taskDiv.forEach(element => {
        element.style.backgroundColor = "white";
    });
    completedDiv.forEach(element => {
        element.style.backgroundColor = "white";
    });

    inputDiv.style.backgroundColor = "white";

});

redYellow.addEventListener('click', ()=>{
    body.style.backgroundColor = "red";
    html.style.backgroundColor = "red";
    h1.forEach(element => {
        element.style.color = "yellow";
        element.style.textShadow = "3px 3px black";
    });

    taskDiv.forEach(element => {
        element.style.backgroundColor = "yellow";
    });
    completedDiv.forEach(element => {
        element.style.backgroundColor = "yellow";
    });

    inputDiv.style.backgroundColor = "yellow";
});

blueGreen.addEventListener('click', ()=>{
    body.style.backgroundColor = "blue";
    html.style.backgroundColor = "blue";
    h1.forEach(element => {
        element.style.color = "green";
        element.style.textShadow = "3px 3px black";
    });

    taskDiv.forEach(element => {
        element.style.backgroundColor = "green";
    });
    completedDiv.forEach(element => {
        element.style.backgroundColor = "green";
    });

    inputDiv.style.backgroundColor = "green";
});

blackPink.addEventListener('click', ()=>{
    body.style.backgroundColor = "#F41F4E";
    html.style.backgroundColor = "#F41F4E";
    h1.forEach(element => {
        element.style.color = "black";
        element.style.textShadow = "3px 3px white";
    });
    taskDiv.forEach(element => {
        element.style.backgroundColor = "#FFC2C7";
    });
    completedDiv.forEach(element => {
        element.style.backgroundColor = "#FFC2C7";
    });

    inputDiv.style.backgroundColor = "#FFC2C7";
});