//variables
const contactButton = document.getElementById('contactButton');
const modalForm = document.getElementById('contact');
const closeButton = document.getElementById('closeButton');
const darkMode = document.querySelector('.darkMode');
const root = document.documentElement;
let isDark = true;

contactButton.addEventListener('click', () => {
  modalForm.classList.toggle('display-form')
  document.querySelector('body').classList.toggle('overflow-hidden')
})

closeButton.addEventListener('click', () =>{
  modalForm.classList.remove('display-form')
  document.querySelector('body').classList.remove('overflow-hidden')
})

//dark mode toggle
// darkMode.addEventListener('click', () => {
//   if(isDark){
//     darkMode.innerHTML = '<i class="fas fa-sun"></i>';
//     root.style.setProperty('--bg-color', 'rgba(255, 255, 255, 0.7)');
//     root.style.setProperty('--tx-color', 'rgba(0, 0, 0, 0.8)');
//     root.style.setProperty('--span-color', 'rgb(39, 85, 149, 0.9)');
//     isDark = false
//   }else{
//     darkMode.innerHTML = '<i class="fas fa-moon"></i>'
//     root.style.setProperty('--bg-color', 'rgba(0, 0, 0, 0.8)');
//     root.style.setProperty('--tx-color', 'rgba(255, 255, 255, 0.7)');
//     root.style.setProperty('--span-color', 'rgba(241, 231, 136, 0.9)');
//     isDark = true
//   }
// })