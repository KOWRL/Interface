var auto1 = document.getElementById("auto1").value;
var auto2 = document.getElementById("auto2").value;
var auto3 = document.getElementById("auto3").value;
var auto4 = document.getElementById("auto4").value;
var auto5 = document.getElementById("auto5").value;
var auto6 = document.getElementById("auto6").value;
var auto7 = document.getElementById("auto7").value;
var auto8 = document.getElementById("auto8").value;
var auto9 = document.getElementById("auto9").value;

var searchingString = document.getElementById("searching").value;

function show(){
console.log(searchingString.value);
}



const autka = [auto1,auto2,auto3,auto4,auto5,auto6,auto7,auto8,auto9];


function szukanie(){
   
      var textSzukany = searchingString;
      autka.forEach(szukamy2([this]));

alert("szukam");
      
   

}

function szukamy2(autka){

     var stri = this.autka;
     var n = stri.search(textSzukany);

     if (n){
         alert("Szukasz" + this.autka);
     }
     else {
         alert("Nie ma");
     }

}

