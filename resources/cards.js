"use strict";

//#12 anonymous function
window.addEventListener("load", function (){
    //#9 jquery
    $('[type=button]').click(function(){
        var cards = new Array();
        cards[0] = "Angel Feather|Cosmo Healer, Ergodiel";
        cards[1] = "Angel Feather|Freezing Granter";
        cards[2] = "Genesis|Quaking Heavenly Dragon, Astraios Dragon";
        cards[3] = "Genesis|Phosphoros of Auspicious Light";
        cards[4] = "Nubatama|Evil Stealth Dragon Akatsuki, Hanzo";
        cards[5] = "Nubatama|Evil Stealth Dragon, Zangetsu";
        cards[6] =  "Nova Grappler|Fighting Fist Dragon, God Hand Dragon";
        cards[7] = "Nova Grappler|Fusing Striker";


        var cardList = "<table><tr><th>Clan</th><th>Card Name</th></tr>";

        for (var i = 0; i<cards.length; i++){
            var string = cards[i];
            var cardInfo = string.split("|");
            cardList += "<tr><td>" + cardInfo[0] + "</td>";
            cardList += "<td>" + cardInfo[1] + "</td>";            
        }
        document.getElementById("cardlist").innerHTML = cardList;
        document.querySelector('table').style.border = "2px solid black";
    });
})

//slideshow 
//#9 jquery
var cardPictures = $('#slides .slide');
var currentCard = 0;
var slideShowInterval = setInterval(nextCard,3000);

//function nextCard() {
 //  cardPictures[currentCard].className ='slide';
  //  currentCard = (currentCard+1)%cardPictures.length;
 //   cardPictures[currentCard].className = 'slide showing';
//}

//#12 named functions
function nextCard() {
    goToCard(currentCard+1);
}

function previousCard() {
    goToCard(currentCard-1);
}

function goToCard(n) {
    cardPictures[currentCard].className = 'slide';
    currentCard = (n+cardPictures.length)%cardPictures.length;
    cardPictures[currentCard].className = 'slide showing';
}

var playing = true;
var pauseBtn = document.getElementById('pause');

function pauseSlideShow() {
    pauseBtn.innerHTML="Play";
    playing = false;
    clearInterval(slideShowInterval);
}

//#4 timer
function playSlideShow(){
    pauseBtn.innerHTML = "Pause";
    playing = true;
    slideShowInterval = setInterval(nextCard,3000);
}
//#4 mouse event
pauseBtn.onclick = function(){
    if(playing){
        pauseSlideShow();
    }
    else{
        playSlideShow();
    }
}
//#4 keyboard event
document.onkeydown = function(e){
    e = e || window.event;
        if (e.keyCode == '37') {
            pauseSlideShow();
            previousCard();
        } else if (e.keyCode == '39') {
            pauseSlideShow();
            nextCard();
        }
}

