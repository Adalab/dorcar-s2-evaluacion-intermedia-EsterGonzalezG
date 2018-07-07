'use strict';
var boton=document.querySelector('.button');
var numberUser=document.querySelector('.number');
var mensaje=document.querySelector('.feedback');
var contPaint=document.querySelector('.contador');
var cont=0;
var aleatorio=0;
var numberUserCo=0;
// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
  aleatorio= Math.ceil(Math.random() * max);
  return aleatorio;
}
var numAle=getRandomNumber(100);
console.log("aleatorio "+numAle);

function conditionWin() {
  if(aleatorio<parseInt(numberUserCo)){

    numberUser.select();
    mensaje.innerHTML="Demasiado alto";

  }else if (aleatorio>parseInt(numberUserCo)){

    numberUser.select();
    mensaje.innerHTML="Demasiado bajo";

  }else if(numberUserCo==="") {
    numberUser.focus();
  }else{
    mensaje.innerHTML="¡HAS GANADO, CAMPEONA!";

  }
}
function count() {
  cont++;
  contPaint.innerHTML=cont;
}
function inputEmpty() {
  if(numberUser.value===""){
    alert("Escribe un número, por favor");
    numberUser.focus();

  }else{
    count();
  }

}

function numero() {
  inputEmpty();
  numberUserCo = numberUser.value;
  console.log("El número del usuario "+ numberUserCo);
  conditionWin();
}
boton.addEventListener('click',numero);
