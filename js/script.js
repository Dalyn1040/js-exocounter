//on a un élément qui varie dans l'application, c'est le compteur.
// on crée donc une variable qui contient cette variable. 
// Au démarrage elle vaut 0,
let count = 0;

// On déclare nos fonctions.
// Mais elles ne seront pas exécutées que si on les appelle. 
// avec par exple doDecrease () ou avec un écouteur d'événement. 

function changeColor(){
    if (count < 0) {
        document.getElementById("number").style.color = "red";
    } else if (count > 0) {
        document.getElementById("number").style.color = "green";
    } else if (count ==0){
        document.getElementById("number").style.color = "black";
    }
}

function doDecrease(){
    count = count - 1;
    changeColor();
    document.getElementById("number").innerHTML = count
}
// je dois vérifier si la valeur du compteur est inférieure , supérieure ou égale à 0.
    
function doReset(){
    count = 0 ;
    changeColor();
    document.getElementById("number").innerHTML = count
}

function doIncrease(){
    count = count + 1;
    changeColor();
    document.getElementById("number").innerHTML = count
}

document.getElementById("Decrease").addEventListener("click", doDecrease);
document.getElementById("Increase").addEventListener("click", doIncrease);
document.getElementById("Reset").addEventListener("click", doReset);


