// > Sur base de l'html fourni :
let body = document.body
// # 1. En utilisant une boucle pour appliquer un écouteur d'événement sur chaque "li", créer un programme qui permet de lancer une function du nom de sayMyName qui affiche une alert du texte du li sur le quel on clique.







// # 2. En utilisant le meme procédé qu'au dessus Créer un programme qui permet de modifier le contenu de chaque Li en double cliquant dessus via un prompt(attention peut-être que tu devras commenter l'exercice précédent)




// # 3. Créer un programme qui permet d'inverser l'ordre de deux li ! avec l'aide des inputs et du button inverser


body.addEventListener('click', e => {
    if (e.target.value == "inverser") {
        let input1 = document.querySelector('#li-one').value;
        let input2 = document.querySelector('#li-two').value;
        inversion(input1, input2)
    }
})


function inversion(donnee1, donnee2) {
    let lisArr = document.querySelectorAll('li')
    lisArr.forEach(e => {
        if (e.innerText == donnee1) {
            e.innerText = donnee2;
        }else if (e.innerText == donnee2 ) {
            e.innerText = donnee1;
        }
    })
}