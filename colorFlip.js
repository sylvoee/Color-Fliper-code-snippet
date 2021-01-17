//Selecting the elements
const btnChangeColor = document.querySelector(".change-color");
const jumbotron = document.querySelector(".jumbotron");
const btnHex = document.querySelector(".hex-color")



btnChangeColor.addEventListener('click', function(e){

//    var rand = ['#493', '#123', '#545', '#1142', '#987', '#712', '#232']; 

    // genetrating random number
   function getRandNum(){
    var result = Math.floor(Math.random() * 1000) ;
    return result;
    
  }
 

   var randNum = getRandNum();
   
   
   jumbotron.style.backgroundColor = `#${randNum}`;
   btnChangeColor.innerHTML = '#'+randNum;

   
});

btnHex.addEventListener('click', function(e){
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
hexCol = "#";
// for llop to generate six numbers
for(var i =0; i <6; i++){
  var res = hexCol += hex[getRandomHex()];

}
// console.log(res);
jumbotron.style.backgroundColor = res;
btnHex.innerHTML = res;

//Generating random number
function getRandomHex(){
 return Math.floor(Math.random()*hex.length);
}


});