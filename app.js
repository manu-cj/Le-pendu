let error = document.getElementById('erreur');
let good = document.getElementById('bonne-réponses');
let input = document.getElementById('input');
let jouer = document.getElementById('jouer');
let button = document.getElementById('send');
let chances = document.getElementById('chances');
let motGenerer = document.getElementById('motGenerer');

let nombreLettre = document.getElementById('nombreLettre');

let un = document.getElementById('1');
let deux = document.getElementById('2');
let trois = document.getElementById('3');
let quatre = document.getElementById('4');
let cinq = document.getElementById('5');
let six = document.getElementById('6');
let sept = document.getElementById('7');
let huit = document.getElementById('8');
let neuf = document.getElementById('9');
let dix = document.getElementById('10');


chance = 7;

let mots = ['kebab', 'lotus', 'famille', 'lubullule', 'eolienne', 'chien', 'katana',
    'reveil', 'crayon', 'bug', 'zemour', 'genetique', 'negatif',];



function generer() {


    let randomMot = Math.floor(Math.random() * mots.length);
    console.log(randomMot);
    motGenerer.innerHTML = mots[randomMot];
    nombreLettre.innerHTML = 'Nombre de lettre : ' + mots[randomMot].length;

}



function send() {

    if (input.value === mots[randomMot].slice(0, 1)) {
        un.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(1, 2)) {
        deux.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(2, 3)) {
        trois.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(3, 4)) {
        quatre.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(4, 5)) {
        cinq.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(5, 6)) {
        six.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(6, 7)) {
        sept.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(7, 8)) {
        huit.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(8, 9)) {
        neuf.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(9, 10)) {
        dix.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(10, 11)) {
        dix.innerHTML += input.value + ' ';
    }
    if (input.value === mots[randomMot].slice(0)) {
        alert('win')
    }
    if (input.value !== mots[randomMot]) {
        error.innerHTML += input.value + ' '
    }

}

button.addEventListener("click", function (){
    send()
})

jouer.addEventListener("click", function () {
    generer()
})
