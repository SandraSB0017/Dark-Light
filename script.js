console.log('connecté');
let btn = document.querySelector('.btn');
console.log(btn);
let divSwitch = document.querySelector('.switch');
console.log(divSwitch);
let icon = document.querySelector('i');
console.log(icon);
let texte = document.querySelector('h1');
console.log(texte);
let fond = document.querySelector('.container');
console.log(fond);

divSwitch.addEventListener('click', function(){
    console.log('cliquée')
    btn.classList.toggle('btn-change');
    
})

