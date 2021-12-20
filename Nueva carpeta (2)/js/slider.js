const imgBox = document.querySelector('.imgBx');
const slides = imgBox.getElementsByTagName('img');
var i=0;

function siguienteSlider(){
  slides[i].classList.remove('activado');
  i=(i+1) % slides.length;
  slides[i].classList.add('activado');
}

function previoSlider(){
  slides[i].classList.remove('activado');
  i=(i-1+slides.length) % slides.length;
  slides[i].classList.add('activado');
}


const contentBox = document.querySelector('.contentBx');
const slidesText = contentBox.getElementsByTagName('div');
var j=0;

function siguienteSliderText(){
  slidesText[j].classList.remove('activado');
  j=(j+1) % slidesText.length;
  slidesText[j].classList.add('activado');
}

function previoSliderText(){
  slidesText[j].classList.remove('activado');
  j=(j-1+slidesText.length) % slidesText.length;
  slidesText[j].classList.add('activado');
}