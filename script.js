var score; 
var duration = 10; // temps de la partie
var startTime; // commencer le temps
var ended = true; // partie finie ou pas

// prise des références
var timerTxt = document.getElementById("timer");
var scoreTxt = document.getElementById("score");
var clicksTxt = document.getElementById("clicks");
var startBtn = document.getElementById("start");
var clickArea = document.getElementById("clickarea");


var show = function (elem) {
    elem.style.display = 'inline';
};

var hide = function (elem) {
    elem.style.display = 'none';
};

// fonction début partie
function startGame() {
    hide(startBtn);
    score = -1;
    ended = false;
    // we get start time
    startTime = new Date().getTime();

    // we create a timer with the setInterval method
    var timerId = setInterval(function () {
        var total = (new Date().getTime() - startTime) / 1000;

        if (total < duration) {
            timerTxt.textContent = total.toFixed(3);
            clicksTxt.textContent = (score / total).toFixed(2);
        } else {
            ended = true;
            clearInterval(timerId);
            // appel fin de partie
            endGame();
        }
    }, 1);
}

//fonction pour fin de la partie
function endGame() {
    // écriture des scores finaux
    var clicsBySeconds = (score / duration).toFixed(2);
    timerTxt.textContent = duration.toFixed(3);
    clicksTxt.textContent = clicsBySeconds;
    let scoreFinal  = document.getElementById('scoreFinal'); 
    scoreFinal.innerHTML=  clicsBySeconds + '  Clic(s) par secondes'; 
    // affichage du bouton start pour pouvoir recommencer
    show(startBtn);

}

// qd on clique sur le bouton start, commencer le jeu
startBtn.addEventListener("click", function (e) {
    startGame();
});

// quand user clique dans la zone de clique, on ajoute un au score
clickArea.addEventListener("click", function (e) {
    if (!ended) {
        score++;
        scoreTxt.textContent = score;
    }
});

// dark mode

const darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

