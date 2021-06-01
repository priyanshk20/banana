var btnTranslate = document.querySelector("#select-btn");
var txtArea = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";

function getTranslationurl(text){
    return url + "?" + "text=" + text
}

function errorHandler(error){
    console.log("Error Occured" , error);
}


btnTranslate.addEventListener("click" , function clickHandler(){
    var txtInput = txtArea.value;
 
    fetch(getTranslationurl(txtInput))
 .then(response => response.json())
 .then(json => {
     var translatedText = json.contents.translated;
     outputDiv.innerText = translatedText;
 })
 .catch(errorHandler)

});