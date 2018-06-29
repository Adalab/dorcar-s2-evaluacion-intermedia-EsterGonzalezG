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

// Anda, chacho, píntame en la consola un número random hasta 100;
console.log('> ' + getRandomNumber(100));

boton.addEventListener('click',numero);


function numero() {
  numberUserCo = numberUser.value;
  console.log("el número del usuario "+ numberUserCo);
  if(aleatorio<numberUserCo){
    mensaje.innerHTML="Demasiado alto";
  }else if (aleatorio>numberUserCo){
    mensaje.innerHTML="Demasiado bajo";
  }else{
    mensaje.innerHTML="¡HAS GANADO, CAMPEONA!";
  }
  cont++;
  contPaint.innerHTML=cont;
}
