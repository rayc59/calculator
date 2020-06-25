// function add(a, b){
//     return a + b;
// }
// function subtract(a, b){
//     return a - b;
// }
// function multiply(a, b){
//     return a * b;
// }
// function divide(a, b) {
//     return a * b;
// }
function operate(lastOperator){
    switch(lastOperator){
        case "add":
            display.innerHTML = +a + +b;
            break;
        case "subtract":
            display.innerHTML = a - b;
            break;
        case "multiply":
            display.innerHTML = a * b;
            break;
        case "divide":
            display.innerHTML = a / b;
            break;
        case "":
            display.innerHTML = a
    }
    lastOperator = '';
    toggle = 1;
    a = display.innerHTML;
}
function add(){
    operateDecision();
    lastOperator = "add";
}
function subtract(){
    operateDecision();
    lastOperator = 'subtract';
}
function multiply(){
    operateDecision();
    lastOperator = 'multiply';
}
function divide(){
    operateDecision();
    lastOperator = 'divide';
}
function operateDecision(){
    counter++;
    if(counter>1){
        b = display.innerHTML;
        operate();
    }
    else {
    operatorSelected();
    }
}
function clear(){
    display.innerHTML = "0";
}
function backspace(){
    display.innerHTML = display.innerHTML.substr(0, display.innerHTML.length - 1);
    if(display.innerHTML === '') {
        display.innerHTML = "0";
    }
}
function operatorSelected(){
    a = display.innerHTML;
    display.innerHTML = '0';
}
function checkIfZero(){
    if(display.innerHTML === '0' || toggle === 1){
        display.innerHTML = '';
        if(toggle === 1){
            toggle = 0;
        }
    }
}
let a = 0;
let b = 0;
let c = 0;
let operator = '';
let counter = 0;
let toggle = 0;
let lastOperator = '';

let clearButton = document.getElementById("clear");
let backspaceButton = document.getElementById("backspace");
let divideButton = document.getElementById("divide");
let multiplyButton = document.getElementById("multiply");
let minusButton = document.getElementById("minus");
let plusButton = document.getElementById("plus");
let decimalButton = document.getElementById("decimal");
let equalsButton = document.getElementById("equals");
let zeroButton = document.getElementById("0");
let oneButton = document.getElementById("1");
let twoButton = document.getElementById("2");
let threeButton = document.getElementById("3");
let fourButton = document.getElementById("4");
let fiveButton = document.getElementById("5");
let sixButton = document.getElementById("6");
let sevenButton = document.getElementById("7");
let eightButton = document.getElementById("8");
let nineButton = document.getElementById("9");
let display = document.getElementById("display");


display.innerHTML = "32132";

clearButton.addEventListener("click", clear); 
backspaceButton.addEventListener("click", backspace);
divideButton.addEventListener("click", divide);
minusButton.addEventListener("click", subtract);
plusButton.addEventListener("click", add);
multiplyButton.addEventListener("click", multiply);


nineButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '9';
});

eightButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '8';
});

sevenButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '7';
});

sixButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '6';
});

fiveButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '5';
});

fourButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '4';
});

threeButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '3';
});

twoButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '2';
});

oneButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '1';
});

zeroButton.addEventListener("click", function(){
    checkIfZero();
    display.innerHTML += '0';
});

decimalButton.addEventListener("click", function(){
    //if no decimal in display.innerHTML
    display.innerHTML += '.';
});