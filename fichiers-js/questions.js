let boutonSuivant = document.getElementById("question__button-js");
let réponseSélectionée = null;

if (!sessionStorage.getItem('pointsTotaux')) {
    sessionStorage.setItem('pointsTotaux', '0');
}

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


// Ajouter les points au fur et à mesure
function versQuestion2(){
    if(réponseSélectionée)
    {
        let pointsRéponseSélectionée = parseInt(réponseSélectionée.dataset.points);
        let pointsTotaux = parseInt(sessionStorage.getItem('pointsTotaux'));

        pointsTotaux += pointsRéponseSélectionée;
        sessionStorage.setItem('pointsTotaux', pointsTotaux.toString());
        console.log(sessionStorage.getItem('pointsTotaux'));

        window.location.href = "question2.html"; 
    }
    else
    {
        alert("Merci de sélectionner une réponse avant de continuer.");
    }
};

function versQuestion3()
{
    if(réponseSélectionée)
    {
        let pointsRéponseSélectionée = parseInt(réponseSélectionée.dataset.points);
        let pointsTotaux = parseInt(sessionStorage.getItem('pointsTotaux'));

        pointsTotaux += pointsRéponseSélectionée;
        sessionStorage.setItem('pointsTotaux', pointsTotaux.toString());

        console.log(sessionStorage.getItem('pointsTotaux'));
        window.location.href = "question3.html"; 

    }
    else
    {
        alert("Merci de sélectionner une réponse avant de continuer.");
    }
};

function versQuestion4(){
    if(réponseSélectionée)
    {
        let pointsRéponseSélectionée = parseInt(réponseSélectionée.dataset.points);
        // Recupère les points du sessionStorage
        let pointsTotaux = parseInt(sessionStorage.getItem('pointsTotaux'));

        pointsTotaux += pointsRéponseSélectionée;
        // Mettre à jour les points
        sessionStorage.setItem('pointsTotaux', pointsTotaux.toString());
        console.log(sessionStorage.getItem('pointsTotaux'));

        window.location.href = "question4.html"; 
    }
    else
    {
        alert("Merci de sélectionner une réponse avant de continuer.");
    }
};

function versQuestion5(){
    if(réponseSélectionée)
    {
        let pointsRéponseSélectionée = parseInt(réponseSélectionée.dataset.points);
        let pointsTotaux = parseInt(sessionStorage.getItem('pointsTotaux'));

        pointsTotaux += pointsRéponseSélectionée;
        sessionStorage.setItem('pointsTotaux', pointsTotaux.toString());
        console.log(pointsTotaux);

        window.location.href = "question5.html"; 
    }
    else
    {
        alert("Merci de sélectionner une réponse avant de continuer.");
    }
};
