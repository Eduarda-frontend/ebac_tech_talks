AOS.init();

const dataDoEvento = new Date("mar 27, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaOTempo = setInterval(function(){
 const agora = new Date();
 const timeStampAtual = agora.getTime();

 const diaEmMS = 1000 * 60 * 60 * 24;
 const horaEmMs = 1000 * 60 * 60;
 const minutoEmMs = 1000 * 60

 const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
 const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
 const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMs);
 const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
 const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000)

 document.getElementById('contador').innerHTML = `começa em  ${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

if(distanciaAteOEvento < 0){
 clearInterval(contaOTempo);
 document.getElementById('contador').innerHTML = `</br>Evento expirado!!`;
}
}, 1000);