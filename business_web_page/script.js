
let menuToggleTravel = () =>{
    document.getElementById('menu').classList.toggle('home-closed');
    document.getElementById('social-media').classList.toggle('social-media-div-closed');
    closeMenues();
}

let menuToggle= () =>{
    document.getElementById('menu').classList.toggle('home-closed');
    document.getElementById('social-media').classList.toggle('social-media-div-closed');
}

let northAToggle = () =>{
    document.getElementById('north-america-menu').classList.toggle('sub-menu-closed');
    document.getElementById('south-america-menu').classList.remove('sub-menu-closed');
    document.getElementById('europe-menu').classList.remove('sub-menu-closed');
    document.getElementById('asia-menu').classList.remove('sub-menu-closed');
    closeMenuBtn();
}

let southAToggle = () =>{
    document.getElementById('south-america-menu').classList.toggle('sub-menu-closed');
    document.getElementById('north-america-menu').classList.remove('sub-menu-closed');
    document.getElementById('europe-menu').classList.remove('sub-menu-closed');
    document.getElementById('asia-menu').classList.remove('sub-menu-closed');
    closeMenuBtn();
}
let europeToggle = () =>{
    document.getElementById('europe-menu').classList.toggle('sub-menu-closed');
    document.getElementById('north-america-menu').classList.remove('sub-menu-closed');
    document.getElementById('south-america-menu').classList.remove('sub-menu-closed');
    document.getElementById('asia-menu').classList.remove('sub-menu-closed');
    closeMenuBtn();
}

let asiaToggle = () =>{
    document.getElementById('asia-menu').classList.toggle('sub-menu-closed');
    document.getElementById('north-america-menu').classList.remove('sub-menu-closed');
    document.getElementById('south-america-menu').classList.remove('sub-menu-closed');
    document.getElementById('europe-menu').classList.remove('sub-menu-closed');
    closeMenuBtn();
}

function closeMenues(){
    document.getElementById('north-america-menu').classList.remove('sub-menu-closed');
    document.getElementById('south-america-menu').classList.remove('sub-menu-closed');
    document.getElementById('europe-menu').classList.remove('sub-menu-closed');
    document.getElementById('asia-menu').classList.remove('sub-menu-closed');
}

function closeMenuBtn(){
    document.getElementById('menu').classList.remove('home-closed');
    document.getElementById('social-media').classList.remove('social-media-div-closed');
};





function nightModeToggle(){
    const header = document.querySelector(".header");
    const descriptionDiv = document.querySelector(".description-div");
    const links = document.querySelectorAll(".link");
    const about = document.querySelector(".about");
    const home = document.querySelector("#home-section");
    
    home.classList.toggle("home-section-dark");
    about.classList.toggle("about-dark");
    header.classList.toggle("header-dark");
    descriptionDiv.classList.toggle("description-div-dark");
    links.forEach(element => {
        element.classList.toggle("link-dark");
    });
}