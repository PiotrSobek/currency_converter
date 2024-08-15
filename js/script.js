{
    const welcome = () => {
        console.log("Witam w moim kalkulatorze walut PLN/EUR/USD")
    }

    const notTheSameCurrencyAllowed = () => {
        const inputPLN = document.querySelector(".js-inputPLN");
        const inputUSD = document.querySelector(".js-inputUSD");
        const inputEUR = document.querySelector(".js-inputEUR");
        const outputPLN = document.querySelector(".js-outputPLN");
        const outputUSD = document.querySelector(".js-outputUSD");
        const outputEUR = document.querySelector(".js-outputEUR");

        inputPLN.addEventListener("click", () => {outputPLN.checked=false});
        inputEUR.addEventListener("click", () => {outputEUR.checked=false});
        inputUSD.addEventListener("click", () => {outputUSD.checked=false});
        outputPLN.addEventListener("click", () => {inputPLN.checked=false});
        outputEUR.addEventListener("click", () => {inputEUR.checked=false});
        outputUSD.addEventListener("click", () => {inputUSD.checked=false});
    }

    const currencyCalculationResult = (event) => 
        {event.preventDefault();
        
        const inputPLN = document.querySelector(".js-inputPLN");
        const inputUSD = document.querySelector(".js-inputUSD");
        const inputEUR = document.querySelector(".js-inputEUR");
        const outputPLN = document.querySelector(".js-outputPLN");
        const outputUSD = document.querySelector(".js-outputUSD");
        const outputEUR = document.querySelector(".js-outputEUR");
        const formLebelText = document.querySelector(".js-quantity");
        let resultElement = document.querySelector(".js-result");
        

        const inPLN = +inputPLN.value
        const inUSD = +inputUSD.value
        const inEUR = +inputEUR.value
        const outPLN = +outputPLN.value
        const outUSD = +outputUSD.value
        const outEUR = +outputEUR.value
        
        BoxText = +formLebelText.value
        if (inputPLN.checked && outputUSD.checked) {
            result = BoxText * (outUSD/inPLN);            
        } else if (inputPLN.checked && outputEUR.checked) {
            result = BoxText * (outEUR/inPLN);            
        } else if (inputUSD.checked && outputPLN.checked) {
            result = BoxText * (outPLN/inUSD);           
        } else if (inputUSD.checked && outputEUR.checked) {
            result = BoxText * (outEUR/inUSD);           
        } else if (inputEUR.checked && outputPLN.checked) {
            result = BoxText * (outPLN/inEUR);           
        } else if (inputEUR.checked && outputUSD.checked) {
            result = BoxText * (outUSD/inEUR);            
        }
        resultElement.innerText = result.toFixed(2);            
    };    

    const currencyName = (event) => 
        {event.preventDefault();
        
        const inputPLN = document.querySelector(".js-inputPLN");
        const inputUSD = document.querySelector(".js-inputUSD");
        const inputEUR = document.querySelector(".js-inputEUR");
        const outputPLN = document.querySelector(".js-outputPLN");
        const outputUSD = document.querySelector(".js-outputUSD");
        const outputEUR = document.querySelector(".js-outputEUR");           
        let resultCurrElement = document.querySelector(".js-resultCurr");
              
        if (inputPLN.checked && outputUSD.checked) {            
            resultCurr = " USD"
        } else if (inputPLN.checked && outputEUR.checked) {                   
            resultCurr = " EURO"
        } else if (inputUSD.checked && outputPLN.checked) {                   
            resultCurr = " PLN"
        } else if (inputUSD.checked && outputEUR.checked) {                    
            resultCurr = " EURO"
        } else if (inputEUR.checked && outputPLN.checked) {                    
            resultCurr = " PLN"
        } else if (inputEUR.checked && outputUSD.checked) {                  
            resultCurr = " USD"}                
        resultCurrElement.innerText = resultCurr;        
    };    
    
    const init = () => {
        welcome()
        notTheSameCurrencyAllowed()
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", currencyCalculationResult);  
        formElement.addEventListener("submit", currencyName);       
    }

    init()
} 