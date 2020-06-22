"use strict";

//#2 onload listener
window.addEventListener("load", init);

function init (){
    //#7 Date
    var thisDate = new Date();
    document.getElementById("date").innerHTML = thisDate;
}

//#12 self invoking function
(function navSetup() {
    //#7 Date
    var thisDate = new Date();

    document.getElementById("date").innerHTML = thisDate;

    //#6 class list
    //#9 jquery
    $('nav li').hover(changeBG, revertBG);
    
})();

function changeBG (e){
    //alert('test');
    e.target.classList.add('hover');
}

function revertBG (e){
    e.target.classList.remove('hover');
}

//#5 add and remove dom elements
//#12 function expression
var showClan = function showClanInfo(e) {

    var clanInfo = document.getElementById("claninfo")
    while (clanInfo.hasChildNodes()) {
        var removedInfo = clanInfo.removeChild(clanInfo.lastChild);
        document.getElementById("hiddenclaninfo").appendChild(removedInfo);
    }
    var node = document.createElement("p");
    var string = e.target.id;
    var string = string.substring(0, string.length - 4);
    var nodeText = document.getElementById(string);

    node.appendChild(nodeText);
    clanInfo.prepend(node);
}
//#3 use document.---
//#12 arrow function
document.querySelectorAll(".clanlogos").forEach(item => {
    item.addEventListener('click', showClan)    
})

//1 x
//2 x
//3 x
//4 x
//5 x
//6 x
//7 x
//8 x
//9 x
//10 x
//11 
//12 x
