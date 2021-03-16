
function dolgozz(){
    var ertek=document.getElementById("Adat").value;
    if(ertek !==""){
          alert("Szia"+ertek);
          console.log("bármi");
    }
    
 
}
function init(){
    console.log("Bejelenkeztem");
    console.log(document.getElementById("Adat").value);
    document.getElementById("szamol").addEventListener("click",dolgozz);
}
window.addEventListener("load",init);
