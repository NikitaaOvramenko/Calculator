const numberPlace = document.querySelector(".numbers");
const AllnumberPlace = document.querySelectorAll(".numbers");
const mainDis = document.querySelector(".mainOutput .text");
const subDis = document.querySelector(".subOutput .text");

let firstNumber;
let secondNumber;
let currentNumber;
let result;
let operation;
let flag1 = false;
let flag2 = false;
let flagContinue = false;
let equalFlag = false;
let percFlag = false;

let numberGrid = function () {
    for (let i = 1; i <= 9; i++) {
        let button = document.createElement("button");
        button.classList.add("number");
        button.setAttribute("id", i);
        button.textContent = i;
        numberPlace.appendChild(button);

    }
    empty = document.createElement("div");
    empty.classList.add("number");
    empty.setAttribute("id", "empty");
    numberPlace.appendChild(empty);

    zero = document.createElement("button");
    zero.classList.add("number");
    zero.setAttribute("id", 0);
    zero.textContent = 0;
    numberPlace.appendChild(zero);



    dot = document.createElement("button");
    dot.classList.add("number");
    dot.setAttribute("id", 0);
    dot.textContent = '.';
    numberPlace.appendChild(dot);
}

let addNumberFun = () => {
    let allButtons = document.querySelectorAll(".number");
    allButtons.forEach(element => {
        element.addEventListener("click", () => updateText(element))
    });
}

let addOperateFun = () => {
    let allOperate = document.querySelectorAll(".operation");

    allOperate.forEach(element => {

        element.addEventListener("click", () => {

            operation = element.getAttribute("id");
            if (flagContinue == false) {
                firstNumber = Number(document.querySelector("#mainText").textContent);
            }
            else {
                firstNumber = Number(document.querySelector("#subText").textContent);
            }
            console.log(firstNumber);
            flag1 = true;
            flag2 = true;

        })

    });
}

let operationControl = () => {

    let equalBut = document.querySelector("#equal");
    let percentage = document.querySelector("#percentage");
    let AC = document.querySelector("#AC");
    let signChange = document.querySelector("#changeSign");



    equalBut.addEventListener("click", () => {

        mainDis.textContent = result;
        subDis.textContent = "";
        flag1 = false;
        flag2 = false;
        equalFlag = true;
        flagContinue = false;

    });

    percentage.addEventListener("click", () => {
        currentNumber = currentNumber / 100;
        mainDis.textContent = currentNumber;

        if (flag1 == true) {

            let currentText = document.querySelector("#mainText");

            secondNumber = Number(currentText.textContent);

            result = operate(operation, firstNumber, secondNumber);

            subDis.textContent = result;

            flagContinue = true;

        }

    })

    AC.addEventListener("click", () => {

        firstNumber = 0;
        secondNumber = 0;
        currentNumber = 0;
        result = 0;
        operation = 0;
        flag1 = false;
        flag2 = false;
        flagContinue = false;
        equalFlag = false;
        percFlag = false;
        mainDis.textContent = "";
        subDis.textContent = "";


    })

    signChange.addEventListener("click", () => {

        let sign = document.createTextNode("-");

        if(mainDis.textContent != ""){

            if(mainDis.textContent[0] === "-"){
                mainDis.textContent.replace("-","");
            }
            
            else{
            mainDis.prepend(sign);
    
            }
    
            if (flag1 == true) {
    
                let currentText = document.querySelector("#mainText");
    
                secondNumber = Number(currentText.textContent);
    
                result = operate(operation, firstNumber, secondNumber);
    
                subDis.textContent = result;
    
                flagContinue = true;
    
            }
        }
        
    })






}


numberGrid();
addNumberFun();
addOperateFun();
operationControl();






function operate(operator, num1, num2) {

    let result = 0;

    switch (operator) {

        case "add":

            result = num1 + num2;

            break;
        case "subtract":

            result = num1 - num2;

            break;
        case "multiply":

            result = num1 * num2;

            break;
        case "divide":

            result = num1 / num2;

            break;

    }

    return result;


}


function clearDisplay() {

    let text = document.querySelector("#mainText");
    text.textContent = "";


}

function updateText(element) {

    let currentText = document.querySelector("#mainText");
    let addedText = document.createTextNode(element.textContent);

    if (flag1 == false) {

        if (equalFlag == true) {
            clearDisplay();
            result = 0;
            equalFlag = false;

        }
        currentText.appendChild(addedText);
        firstNumber = Number(currentText.textContent);
        currentNumber = firstNumber;

        console.log(`first number: ${firstNumber}`);

    }


    else if (flag1 == true) {

        if (flag2 == true) { clearDisplay(); flag2 = false; }

        currentText.appendChild(addedText);

        secondNumber = Number(currentText.textContent);
        currentNumber = secondNumber;

        console.log(`second number: ${secondNumber}`);

        result = operate(operation, firstNumber, secondNumber);

        subDis.textContent = result;

        flagContinue = true;

    }
}

