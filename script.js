var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var zero = document.getElementById("zero");
var clear = document.getElementById("clear");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");

var display = document.getElementById("display");

var operand1 = 0;
var operand2 = 0;
var operation;
var lastButton;

onload = function() {
    display.innerHTML = 0;
}

one.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 1;
        lastButton = "one";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 1;
        } else {
            display.innerHTML += 1;
        }
        lastButton = "one";
    }
};
two.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 2;
        lastButton = "two";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 2;
        } else {
            display.innerHTML += 2;
        }
        lastButton = "two";
    }
};
three.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 3;
        lastButton = "three";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 3;
        } else {
            display.innerHTML += 3;
        }
        lastButton = "three";
    }
};
four.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 4;
        lastButton = "four";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 4;
        } else {
            display.innerHTML += 4;
        }
        lastButton = "four";
    }
};
five.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 5;
        lastButton = "five";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 5;
        } else {
            display.innerHTML += 5;
        }
        lastButton = "five";
    }
};
six.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 6;
        lastButton = "six";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 6;
        } else {
            display.innerHTML += 6;
        }
        lastButton = "six";
    }
};
seven.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 7;
        lastButton = "seven";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 7;
        } else {
            display.innerHTML += 7;
        }
        lastButton = "seven";
    }
};
eight.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 8;
        lastButton = "eight";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 8;
        } else {
            display.innerHTML += 8;
        }
        lastButton = "eight";
    }
};
nine.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 9;
        lastButton = "nine";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML == 0) {
            display.innerHTML = 9;
        } else {
            display.innerHTML += 9;
        }
        lastButton = "nine";
    }
};
zero.onclick = function() {
    if(lastButton=="plus"||lastButton=="minus"||lastButton=="times"||lastButton=="divide"||lastButton=="equals") {
        display.innerHTML = 0;
        lastButton = "zero";
    } else if(display.innerHTML.length<12) {
        if(display.innerHTML != 0) {
            display.innerHTML += 0;
        }
        lastButton = "zero";
    }
};
clear.onclick = function() {
    display.innerHTML = 0;
    lastButton = "clear";
};
plus.onclick = function() {
    operand1 = display.innerHTML;
    operation = "plus";
    lastButton = "plus";
};
minus.onclick = function() {
    operand1 = display.innerHTML;
    operation = "minus";
    lastButton = "minus";
};
times.onclick = function() {
    operand1 = display.innerHTML;
    operation = "times";
    lastButton = "times";
};
divide.onclick = function() {
    operand1 = display.innerHTML;
    operation = "divide";
    lastButton = "divide";
};
equals.onclick = function(){
    if(lastButton == "equals") {
        if(operation == "plus") {
            display.innerHTML = Number(display.innerHTML) + Number(operand2);
        } else if(operation == "minus") {
            display.innerHTML = Number(display.innerHTML) - Number(operand2);
        } else if(operation == "times") {
            display.innerHTML = Number(display.innerHTML) * Number(operand2);
        } else if(operation == "divide") {
            display.innerHTML = Number(display.innerHTML) / Number(operand2);
        }
    } else if(lastButton != "plus" && lastButton != "minus" && lastButton != "times" && lastButton != "divide") {
        operand2 = display.innerHTML;
        if(operation == "plus") {
            display.innerHTML =  Number(operand1) + Number(operand2);
        } else if(operation == "minus") {
            display.innerHTML = Number(operand1) - Number(operand2);
        } else if(operation == "times") {
            display.innerHTML = Number(operand1) * Number(operand2);
        } else if(operation == "divide") {
            display.innerHTML = Number(operand1) / Number(operand2);
        }
        lastButton = "equals";
    }
};
