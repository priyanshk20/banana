var btnTranslate = document.querySelector("#select-btn");
var txtArea = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

btnTranslate.addEventListener("click" , function clickHandler(){
 outputDiv.innerText = "uiuuiu " + txtArea.value
});