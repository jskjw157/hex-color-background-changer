'use strict';

const body = document.querySelector("body");
const button = document.querySelector("#btn");
const hexCode = document.querySelector("#hex-value");

const colorCodes = ["#ff3030", "#ffe6ba", "#ffce75", "#ffae19", "#99adc1"];

button.addEventListener("click", function(){
    const colorNumber = parseInt(Math.random() * colorCodes.length);
    body.style.backgroundColor = colorCodes[colorNumber];
    hexCode.innerHTML = colorCodes[colorNumber];
});