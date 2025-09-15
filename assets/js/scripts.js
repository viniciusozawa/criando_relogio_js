
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const data = document.getElementById('dataAtual');

const relogio = setInterval(function time(){
    //instanciando date
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();
    let dia = dateToday.getDate();
    let mes = dateToday.getMonth() + 1;
    let ano = dateToday.getFullYear();
    if( hr < 10) hr = '0' + hr;
    if( min < 10) min = '0' + min;
    if( seg < 10) seg = '0' + seg;
    if( dia < 10) dia = '0' + dia;
    if( mes < 10) mes = '0' + mes;
    
    data.textContent = dia +'-'+ mes +'-'+ ano;
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})