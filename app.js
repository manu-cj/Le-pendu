let error = document.getElementById('erreur');
let good = document.getElementById('bonne-réponses');
let input = document.getElementById('input');
let button = document.getElementById('send');
let chances = document.getElementById('chances');

chance = 7;

let mots = ['kebab', 'lotus', 'famille', 'lubullule', 'eolienne', 'chien', 'katana',
    'reveil', 'crayon', 'bug', 'zemour', 'genetique', 'negatif',];

function generer(){
    let randomMot = Math.floor(Math.random() * mots.length);
    console.log(randomMot);




    good.innerHTML =  mots[randomMot];
}



button.addEventListener("click", function (){
    generer()
})
