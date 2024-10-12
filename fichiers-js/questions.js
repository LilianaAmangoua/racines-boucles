
let boutonSuivant = document.getElementById("question__button-js");
let pointsTotaux = 0;
let réponseSélectionée = null;


// Ajoute une classe CSS à la réponse séléctionée
let réponses = Array.from(document.getElementsByClassName('question__answers-possible'));
réponses.forEach((réponse) => 
{
    réponse.addEventListener('click', function() 
    {
        réponses.forEach((réponsesNonSélectionées) => 
        {
            réponsesNonSélectionées.classList.remove("question__answers-possible-selected");
        });
        réponse.classList.add("question__answers-possible-selected");
        réponseSélectionée = réponse;
 
    });
});

//  Se rend sur la prochaine page
function versQuestion2(){
    if(réponseSélectionée)
    {
        let pointsRéponseSélectionée = parseInt(réponseSélectionée.dataset.points);

        pointsTotaux += pointsRéponseSélectionée;
        console.log(pointsTotaux);

        window.location.href = "question2.html"; 
    }
    else
    {
        alert("Merci de sélectionner une réponse avant de continuer.");
    }
};