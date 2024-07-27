const numberPlace = document.querySelector(".numbers");

let numberGrid = function(){
    for(let i = 1; i <= 9; i++){
        let button = document.createElement("button");
        button.classList.add("number");
        button.setAttribute("id",i);
        button.textContent = i;
        numberPlace.appendChild(button);
    
    }
    empty = document.createElement("div");
    empty.classList.add("number");
    empty.setAttribute("id","empty");
    numberPlace.appendChild(empty);

    zero = document.createElement("button");
    zero.classList.add("number");
    zero.setAttribute("id",0);
    zero.textContent = 0;
    numberPlace.appendChild(zero);



    dot = document.createElement("button");
    dot.classList.add("number");
    dot.setAttribute("id",0);
    dot.textContent = '.';
    numberPlace.appendChild(dot);
}

let addNumberFun = () => {
    let allButtons = document.querySelectorAll(".number");
    allButtons.forEach(element => {
        element.addEventListener("click",() => {
            currentText = document.querySelector("#mainText");
            addedText = document.createTextNode(element.textContent);
            currentText.appendChild(addedText);

        })
    });
}





numberGrid();
addNumberFun();

