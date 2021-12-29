var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

var oscilador = audioCtx.createOscillator();
oscilador.frequency.value = 250;