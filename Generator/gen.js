

let Btn = document.querySelector(".Btn");
let bodyColor = document.querySelector('body');
let hex = document.querySelector(".hex");


function changeBackground(){
    let colorsHex = "0123456789ABCDEF";

    let hexCode = "#";

    for(let i = 0; i < 6; i++){
        hexCode += colorsHex[Math.floor(Math.random() * colorsHex.length)]; 
    }
    bodyColor.style.backgroundColor = hexCode;
    hex.innerHTML = hexCode;

}
Btn.addEventListener('click', changeBackground);
