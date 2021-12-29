const imgBox = document.querySelector('.imgBx');
const slides = imgBox.getElementsByTagName('img');
var i = 0;

function siguienteSlider() {
  slides[i].classList.remove('activado');
  i = (i + 1) % slides.length;
  slides[i].classList.add('activado');

}

function previoSlider() {
  slides[i].classList.remove('activado');
  i = (i - 1 + slides.length) % slides.length;
  slides[i].classList.add('activado');

}


const contentBox = document.querySelector('.contentBx');
const slidesText = contentBox.getElementsByTagName('div');
var j = 0;

function siguienteSliderText() {
  slidesText[j].classList.remove('activado');
  j = (j + 1) % slidesText.length;
  slidesText[j].classList.add('activado');
}

function previoSliderText() {
  slidesText[j].classList.remove('activado');
  j = (j - 1 + slidesText.length) % slidesText.length;
  slidesText[j].classList.add('activado');
}


const hoverImgs = document.querySelector('.hoverImg');
const text = hoverImgs.getElementsByTagName('div');
var f = 0;

function siguienteText() {
  text[f].classList.remove('activado');
  f = (f + 1) % text.length;
  text[f].classList.add('activado');
}

function previoText() {
  text[f].classList.remove('activado');
  f = (f - 1 + text.length) % text.length;
  text[f].classList.add('activado');
}


const inicio = document.querySelector('#inicio');
const perfil = document.querySelector('#perfil');
const conocimiento = document.querySelector('#conocimiento');
const proyecto = document.querySelector('#proyecto');
const final = document.querySelector('#final');

function irAIncio() {
  inicio.classList.remove('active');
  perfil.classList.remove('active');
  conocimiento.classList.remove('active');
  proyecto.classList.remove('active');
  final.classList.remove('active');

  inicio.classList.add('active');
}

function irAPerfil() {
  inicio.classList.remove('active');
  perfil.classList.remove('active');
  conocimiento.classList.remove('active');
  proyecto.classList.remove('active');
  final.classList.remove('active');

  perfil.classList.add('active');
}

function irAConocimiento() {
  inicio.classList.remove('active');
  perfil.classList.remove('active');
  conocimiento.classList.remove('active');
  proyecto.classList.remove('active');
  final.classList.remove('active');

  conocimiento.classList.add('active');
}

function irAProyecto() {
  inicio.classList.remove('active');
  perfil.classList.remove('active');
  conocimiento.classList.remove('active');
  proyecto.classList.remove('active');
  final.classList.remove('active');

  proyecto.classList.add('active');
}

function irAFinal() {
  inicio.classList.remove('active');
  perfil.classList.remove('active');
  conocimiento.classList.remove('active');
  proyecto.classList.remove('active');
  final.classList.remove('active');

  final.classList.add('active');
}



const liIncio = document.querySelector('#liIncio');
const liPerfil = document.querySelector('#liPerfil');
const liConocimiento = document.querySelector('#liConocimiento');
const liProyecto = document.querySelector('#liProyecto');
const liFinal = document.querySelector('#liFinal');

const bubbles = document.querySelector('.bg-bubbles');

function elegirIncio() {
  liIncio.classList.remove('navActivo');
  liPerfil.classList.remove('navActivo');
  liConocimiento.classList.remove('navActivo');
  liProyecto.classList.remove('navActivo');
  liFinal.classList.remove('navActivo');

  liIncio.classList.add('navActivo');
}

function elegirPerfil() {
  liIncio.classList.remove('navActivo');
  liPerfil.classList.remove('navActivo');
  liConocimiento.classList.remove('navActivo');
  liProyecto.classList.remove('navActivo');
  liFinal.classList.remove('navActivo');

  liPerfil.classList.add('navActivo');
}

function elegirConocimiento() {
  liIncio.classList.remove('navActivo');
  liPerfil.classList.remove('navActivo');
  liConocimiento.classList.remove('navActivo');
  liProyecto.classList.remove('navActivo');
  liFinal.classList.remove('navActivo');

  liConocimiento.classList.add('navActivo');
}

function elegirProyecto() {
  liIncio.classList.remove('navActivo');
  liPerfil.classList.remove('navActivo');
  liConocimiento.classList.remove('navActivo');
  liProyecto.classList.remove('navActivo');
  liFinal.classList.remove('navActivo');

  liProyecto.classList.add('navActivo');
}

function elegirFinal() {
  liIncio.classList.remove('navActivo');
  liPerfil.classList.remove('navActivo');
  liConocimiento.classList.remove('navActivo');
  liProyecto.classList.remove('navActivo');
  liFinal.classList.remove('navActivo');

  liFinal.classList.add('navActivo');
}




function verPaginaSiguiente() {

  liIncio.classList.remove('navActivo');
  liPerfil.classList.remove('navActivo');
  liConocimiento.classList.remove('navActivo');
  liProyecto.classList.remove('navActivo');
  liFinal.classList.remove('navActivo');

  if(inicio.classList.contains('active')){
    liPerfil.classList.add('navActivo');
  }

  if(perfil.classList.contains('active')){
    liConocimiento.classList.add('navActivo');
  }

  if(conocimiento.classList.contains('active')){
    liProyecto.classList.add('navActivo');
  }

  if(proyecto.classList.contains('active')){
    liFinal.classList.add('navActivo');
  }

  if(final.classList.contains('active')){
    liIncio.classList.add('navActivo');
  }
}


function verPaginaAnterior() {
  liIncio.classList.remove('navActivo');
  liPerfil.classList.remove('navActivo');
  liConocimiento.classList.remove('navActivo');
  liProyecto.classList.remove('navActivo');
  liFinal.classList.remove('navActivo');



  if(inicio.classList.contains('active')){
    liFinal.classList.add('navActivo');
  }

  if(perfil.classList.contains('active')){
    liIncio.classList.add('navActivo');
  }

  if(conocimiento.classList.contains('active')){
    liPerfil.classList.add('navActivo');
  }

  if(proyecto.classList.contains('active')){
    liConocimiento.classList.add('navActivo');
  }

  if(final.classList.contains('active')){
    liProyecto.classList.add('navActivo');


  }

}


const nav = document.querySelector('#nav');

function bordeNav() {
  if(!(nav.classList.contains('bordeNav'))){
    nav.classList.add('bordeNav');
  }else{
    nav.classList.remove('bordeNav');
  }
}

window.onload=function(){
  
  $('#onload').fadeOut();
  $('body').removeClass('hidden');
}



