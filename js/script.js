
let h1 = document.querySelector("#h1") ;
let input = document.querySelector("#input") ;
let btnB = document.querySelector("#btnB") ;
let btnG = document.querySelector("#btnG") ;
let btnY = document.querySelector("#btnY") ;
let btnR = document.querySelector("#btnR") ;

input.addEventListener("keyup", digito)
h1.addEventListener("mouseover", mouse)
btnB.addEventListener("click", () => mudarCor("blue"))
btnG.addEventListener("click", () => mudarCor("green"))
btnY.addEventListener("click", () => mudarCor("yellow"))
btnR.addEventListener("click", () => mudarCor("red"))

function digito(){
    h1.innerHTML = input.value
}
 function mudarCor(cor){
    h1.style.color = cor;
 }
 function mouse(){
    alert(`A cor selecionada atualmente nesse txt é ${h1.style.color}`)
 }

 


