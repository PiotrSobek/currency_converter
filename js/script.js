let inputPLN = document.querySelector(".js-inputPLN");
let inputUSD = document.querySelector(".js-inputUSD");
let inputEUR = document.querySelector(".js-inputEUR");
let outputPLN = document.querySelector(".js-outputPLN");
let outputUSD = document.querySelector(".js-outputUSD");
let outputEUR = document.querySelector(".js-outputEUR");
let formElement = document.querySelector(".js-form");
let formLebelText = document.querySelector(".js-quantity");
let resultElement = document.querySelector(".js-result");
let resultCurrBeginElement = document.querySelector(".js-resultCurrBegin");
let resultCurrElement = document.querySelector(".js-resultCurr");

inPLN = +inputPLN.value
inUSD = +inputUSD.value
inEUR = +inputEUR.value
outPLN = +outputPLN.value
outUSD = +outputUSD.value
outEUR = +outputEUR.value

formElement.addEventListener("submit", (event) => 
    {event.preventDefault();
    
    BoxText = +formLebelText.value
    if (inputPLN.checked && outputPLN.checked) {
        result = BoxText * (outPLN/inPLN);
        resultCurr = " PLN"
    } else if (inputPLN.checked && outputUSD.checked) {
        result = BoxText * (outUSD/inPLN);
        resultCurr = " USD"
    } else if (inputPLN.checked && outputEUR.checked) {
        result = BoxText * (outEUR/inPLN);        
        resultCurr = " EURO"
    } else if (inputUSD.checked && outputPLN.checked) {
        result = BoxText * (outPLN/inUSD);        
        resultCurr = " PLN"
    } else if (inputUSD.checked && outputUSD.checked) {
        result = BoxText * (outUSD/inUSD);        
        resultCurr = " USD"
    } else if (inputUSD.checked && outputEUR.checked) {
        result = BoxText * (outEUR/inUSD);        
        resultCurr = " EURO"
    } else if (inputEUR.checked && outputPLN.checked) {
        result = BoxText * (outPLN/inEUR);        
        resultCurr = " PLN"
    } else if (inputEUR.checked && outputUSD.checked) {
        result = BoxText * (outUSD/inEUR);        
        resultCurr = " USD"
    } else if (inputEUR.checked && outputEUR.checked) {
        result = BoxText * (outEUR/inEUR);        
        resultCurr = " EURO"}
    
    resultElement.innerText = result.toFixed(2);
    resultCurrElement.innerText = resultCurr;
     
});