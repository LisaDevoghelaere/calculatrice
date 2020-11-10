//on initialise une variable vide
let input="";
//variable output
const outPut = document.getElementById("output")
//fonction pour récupérer la valeur de l'input
function ShowValue(btn){
    //ci-dessous : quand on tape on retourne la valeur en string
    input = input + btn.value;
    //console.log(input);
    //on selectionne l'endroit dans lequel on va afficher les chiffre
    outPut.innerHTML = input;
};
//calcul et résultat
function resultat(){
    //eval fait l'opération sur les chiffres même en string
    outPut.innerHTML = eval(input);
//quand on appuie sur "=" on a le résultat de l'opération
}

//remettre à 0
function reset(btn){
    //affiche 0
    outPut.innerHTML = "0";
    //vide la variable
    input = "";
}
//retirer un caractère
function remove(btn){
    input = input.replace(input.slice(-1), "");
    outPut.innerHTML = input;
}