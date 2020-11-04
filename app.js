//on initialise une variable vide
let input="";
//fonction pour récupérer la valeur de l'input
function ShowValue(btn){
    //ci-dessous : quand on tape on retourne la valeur en string
    input = input + btn.value;
    //console.log(input);
    //on selectionne l'endroit dans lequel on va afficher les chiffre
    document.getElementById("output").innerHTML = input;
};
//calcul et résultat
function resultat(){
    //eval fait l'opération sur les chiffres même en string
document.getElementById('output').innerHTML = eval(input);
//quand on appuie sur "=" on a le résultat de l'opération
}

//remettre à 0
function reset(btn){
    //affiche 0
    document.getElementById("output").innerHTML = "0";
    //vide la variable
    input = "";
}
//retirer un caractère
function remove(btn){
    input = input.replace(input.slice(-1), "");
    document.getElementById('output').innerHTML = input;
}