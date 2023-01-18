// > https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
// > Avec la methode removeChild()
// ## 1. 
// - Utilise le second bouton pour supprimer le premier enfant
const firstDiv = document.getElementsByTagName('div')[0];
const firstButton = document.getElementsByTagName('input')[0];
firstButton.addEventListener("click", ()=>{
    firstDiv.removeChild(firstDiv.firstElementChild);
});
// ## 2. 
// - Utilise le second bouton pour supprimer le dernier enfant 
const secondButton = document.getElementsByTagName('input')[1];
secondButton.addEventListener("click", () =>{
    firstDiv.removeChild(firstDiv.lastElementChild);
})
// ## 3 .
// - Utilise le dernier bouton pour supprimer un enfant au hasard
const lastButton = document.getElementsByTagName('input')[2];
lastButton.addEventListener("click", () =>{
    firstDiv.removeChild(firstDiv.children[Math.floor(Math.random() * firstDiv.children.length)]);
})

// > https://developer.mozilla.org/fr/docs/Web/API/Node/replaceChild
// > Avec la methode replaceChild()


// ## 4 . Dans la partie Remplacement de ton HTML
// - Créer un élément li dans ton fichier JS
// - Remplace le deuxième li par celui ci quand on clique sur le button exercice 4
const secondDiv = document.getElementsByTagName('div')[1];
const button4 = document.getElementsByTagName('input')[3];
const listItem = document.createElement('li');
listItem.innerText = "Remplacé lol";
button4.addEventListener('click', () =>{
    secondDiv.children[1].replaceChild(listItem, secondDiv.children[1].children[1]);
});

// ## 5. 
// - Créer un programme qui permet avec l'input de créer un li et de remplacer le "li" 3 par celui ci en appuyant sur le bouton exercice 5
const button5 = document.getElementsByTagName('input')[5];
button5.addEventListener('click', ()=>{
    const newLi = document.createElement('li');
    newLi.innerText = document.getElementsByTagName('input')[4].value;
    secondDiv.children[1].replaceChild(newLi, secondDiv.children[1].children[2]);
})