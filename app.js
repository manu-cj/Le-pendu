let error = document.getElementById('erreur');
let good = document.getElementById('bonne-réponses');
let input = document.getElementById('input');
let jouer = document.getElementById('jouer');
let button = document.getElementById('send');
let chances = document.getElementById('chances');
let motGenerer = document.getElementById('motGenerer');

chance = 7;

let mots = ['kebab', 'lotus', 'famille', 'lubullule', 'eolienne', 'chien', 'katana',
    'reveil', 'crayon', 'bug', 'zemour', 'genetique', 'negatif',];



//function generer() {


        let randomMot = Math.floor(Math.random() * mots.length);
        console.log(randomMot);
        motGenerer.innerHTML = mots[randomMot];





function send() {

    if (input.value === mots[randomMot].slice(0, 1)) {
        good.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(1, 2)) {
        good.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(2, 3)) {
        good.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(3, 4)) {
        good.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(4, 5)) {
        good.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(5, 6)) {
        good.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(7, 8)) {
        good.innerHTML += input.value + ' ';
    }
    if (input.value !== mots[randomMot].includes(input.value)) {
        error.innerHTML += input.value + ' '
    }

}

button.addEventListener("click", function (){
    send()
})

//jouer.addEventListener("click", function (){
    //generer()
//})
