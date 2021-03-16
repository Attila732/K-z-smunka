/* global ertek */

/* global ertek */

var tomb = [];
function feltolt() {
    
    var ertek = document.getElementById("Adat").value;
    for (var i = 0; i < ertek; i++) {
        tomb[i] = Math.floor(Math.random() * 10) + 1;
    }
}
function dolgozz() {
   feltolt();
   var osszeg=0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg+=tomb[i];
    }
    
   
    document.getElementById("szoveg").innerHTML = tomb;   
}

function osszegzes(){
    var osszeg=0;
    for (var i = 0; i < tomb.length; i++) {
        osszeg+=tomb[i];
    }
}

function init() {
    console.log("Bejelenkeztem");
    console.log(document.getElementById("Adat").value);
    document.getElementById("szamol").addEventListener("click", dolgozz);
}
window.addEventListener("load", init);
