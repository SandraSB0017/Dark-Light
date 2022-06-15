
let btn = document.querySelector('.btn');
let divSwitch = document.querySelector('.switch');
let icon = document.querySelector('i');
let texte = document.querySelector('h1');
let fond = document.querySelector('.container');

divSwitch.addEventListener('click', function(){
    console.log('cliquée')
    btn.classList.toggle('btn-change');
    icon.classList.toggle('icon-change');
    icon.classList.toggle ('fa-sun');
    fond.classList.toggle('container-change');
    texte.classList.toggle('text-change');
    if(texte.innerText === "DarkMode"){
        texte.innerText = "LightMode";
    }else {
        texte.innerText ='DarktMode';
    }
    divSwitch.classList.toggle('switch-change');  
})

