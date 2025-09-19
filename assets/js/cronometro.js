let milessegundos = document.getElementById("milissegundos");
let segundos = document.getElementById("segundos");
let minutos = document.getElementById("minutos");
let valorminuto = 0;
let startTime = 0;
let depoisPause = 0;
let timeInterval = null;

function mudandoFront(mili, seg, min, controleFluxo){
    if(controleFluxo){
        milessegundos.textContent = String(mili).padStart(2, "0");;
        segundos.textContent = String(seg).padStart(2, "0");
        minutos.textContent= String(min).padStart(2, "0");
    }else{
        milessegundos.textContent = "00";
        segundos.textContent = "00";
        minutos.textContent = "00";
    }
}

function updateCronometro() {
    const time = Date.now() - startTime + depoisPause;
    console.log(time)

    const milliseconds = Math.floor((time % 1000) /10);
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / (1000 * 60)) % 60;
    

    mudandoFront(milliseconds, seconds, minutes, true);
}

function start(){
    startTime = Date.now();
    timeInterval = setInterval(updateCronometro, 10);
}

function pause(){
    clearInterval(timeInterval);
    depoisPause += Date.now() - startTime;


}

function reset(){
    starTime = 0;
    depoisPause = 0;
    clearInterval(timeInterval);
  
    mudandoFront(0,0,0, false);
}