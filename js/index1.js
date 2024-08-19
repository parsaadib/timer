var s =document.getElementById('seccond')
var  m= document.getElementById('minute')
var minute = 0
var seccond =0
var interval
function start() {
    clearInterval(interval)
    interval = setInterval(starttimer,10)
}
function stop(){
    clearInterval(interval)
}
function reset(){
    clearInterval(interval)
    s.innerHTML="00"
    m.innerHTML="00"
    minute = 0
    seccond =0
}

function starttimer(){
    seccond++
    if(seccond<=9){
        s.innerHTML='0' + seccond
    }
    if(seccond>9){
        s.innerHTML=seccond
    }
    if(seccond>59){
        minute++
        if(minute<=9){m.innerHTML='0' + minute}
        if(minute>9){m.innerHTML= minute}
        seccond = 0
    }




}
