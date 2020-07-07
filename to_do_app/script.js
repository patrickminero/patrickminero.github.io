//Date display
let dateInput = document.querySelector("#date");

let date = new Date();
let dayMonth = date.getDate();
let day = date.getDay();
let month =  date.getMonth();
let year = date.getFullYear();
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const monthsYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

dateInput.innerHTML = `${week[day]} ${monthsYear[month]} ${dayMonth}, ${year}`;

//image background

let images = ["media/a-r-t-paola-3UtETZuWR0U-unsplash.jpg", "media/chase-clark-dGqWUPPesrQ-unsplash.jpg",
"media/drew-beamer-Vc1pJfvoQvY-unsplash.jpg", "media/fab-lentz-mRMQwK513hY-unsplash.jpg", 
"media/felicia-buitenwerf-cBb94xhYAXw-unsplash.jpg", "media/jordan-whitfield-sm3Ub_IJKQg-unsplash.jpg",
"media/prateek-katyal-6jYnKXVxOjc-unsplash.jpg", "media/randalyn-hill-Z1HXJQ2aWIA-unsplash.jpg", "media/s-o-c-i-a-l-c-u-t-6iYb1BWWbV0-unsplash.jpg"];
let random  = Math.floor(Math.random() * 9);
let header = document.getElementById("header");
header.style.backgroundImage = 'url(' + images[random] + ')';

//task adding 

const list =  document.getElementById('list');
const addButton = document.querySelector('#plus');
const pendingButton =  document.getElementsByClassName('pending');
const trashButton = document.querySelector('#trash');
let input = document.querySelector('.input');
let taskList = [];
let counter = 0;


class newTask{
    constructor(taskName){
        this.createTask(taskName);
    }

    createTask(taskName){
        let task = document.createElement('p');
        task.innerHTML = input.value;
        task.classList.add('pending-task');

        let pending = document.createElement('button');
        pending.classList.add('pending');
        pending.innerHTML = '<i class="material-icons">radio_button_unchecked</i>';

        let trash = document.createElement('button');
        trash.classList.add('trash');
        trash.innerHTML = '<i class="material-icons">delete</i>';

        let listItem = document.createElement('li');

        let complete = document.createElement('button');
        complete.classList.add('finished');
        complete.innerHTML = '<i class="fas fa-check-circle"></i>';

        list.appendChild(listItem);
        listItem.appendChild(pending);
        listItem.appendChild(task);
        listItem.appendChild(trash);


        trash.addEventListener('click', ()=> this.remove(listItem));
            
        pending.addEventListener('click', ()=> this.changeClass(task, pending));
    }    

    changeClass(element, element2){
        element.classList.toggle('complete-task');
        if(element2.innerHTML === '<i class="material-icons">radio_button_unchecked</i>'){
            element2.innerHTML = '<i class="material-icons green">check_circle</i>'
        }else{
            element2.innerHTML = '<i class="material-icons">radio_button_unchecked</i>'
        };
    };

    remove(item){
        list.removeChild(item);
    }
}
/*saving and recreating items from local storage*/

class recreateTask{
    constructor(element){
        this.createTask(element);
    }

    createTask(element){
        let task = document.createElement('p');
        task.innerHTML = element;
        task.classList.add('pending-task');

        let pending = document.createElement('button');
        pending.classList.add('pending');
        pending.innerHTML = '<i class="material-icons">radio_button_unchecked</i>';

        let trash = document.createElement('button');
        trash.classList.add('trash');
        trash.innerHTML = '<i class="material-icons">delete</i>';

        let listItem = document.createElement('li');

        let complete = document.createElement('button');
        complete.classList.add('finished');
        complete.innerHTML = '<i class="fas fa-check-circle"></i>';

        list.appendChild(listItem);
        listItem.appendChild(pending);
        listItem.appendChild(task);
        listItem.appendChild(trash);


        trash.addEventListener('click', ()=> this.remove(listItem));   
        pending.addEventListener('click', ()=> this.changeClass(task, pending));
    }    

    changeClass(element, element2){
        element.classList.toggle('complete-task');
        if(element2.innerHTML === '<i class="material-icons">radio_button_unchecked</i>'){
            element2.innerHTML = '<i class="material-icons green">check_circle</i>'
        }else{
            element2.innerHTML = '<i class="material-icons">radio_button_unchecked</i>'
        };
    };
    remove(item){
        list.removeChild(item);
    }
}

function createTask(){
    if(input.value != ""){
        new newTask(input.value);
        let task = {
            name: input.value,
            position: counter++,
            completed: false,
        }
        taskList.push(task);
        localStorage.setItem("List Items", JSON.stringify(taskList));
        input.value = "";
    }else{
        alert('Please enter a task');
    }}

addButton.addEventListener('click', createTask);
    window.addEventListener('keydown', (e) => {
        if(e.which == 13){
            createTask();
        }
    });

    let returnCounter = 0;
    let returnedItems = JSON.parse(localStorage.getItem("List Items"));
    window.addEventListener('load', restoreItem(returnedItems));
    
    function restoreItem(array){

        if(array !==  null){array.forEach(element => {
            new recreateTask(element.name);
            taskList.push(element);
        })}else{
            alert('Cogratulations! You have completed all your tasks!')
        };
        }
    
/* reset button*/
function resetScreen(){
    localStorage.clear();
    location.reload();
}