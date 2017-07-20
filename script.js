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
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var divide = document.getElementById("divide");
var equals = document.getElementById("equals");

var display = document.getElementById("display");

one.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "1";
        } else {
            display.innerHTML += "1";
        }
    }
}
two.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "2";
        } else {
            display.innerHTML += "2";
        }
    }
}
three.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "3";
        } else {
            display.innerHTML += "3";
        }
    }
}
four.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "4";
        } else {
            display.innerHTML += "4";
        }
    }
}
five.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "5";
        } else {
            display.innerHTML += "5";
        }
    }
}
six.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "6";
        } else {
            display.innerHTML += "6";
        }
    }
}
seven.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "7";
        } else {
            display.innerHTML += "7";
        }
    }
}
eight.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "8";
        } else {
            display.innerHTML += "8";
        }
    }
}
nine.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML == "0") {
            display.innerHTML = "9";
        } else {
            display.innerHTML += "9";
        }
    }
}
zero.onclick = function() {
    if(display.innerHTML.length<12) {
        if(display.innerHTML != "0") {
            display.innerHTML += "0";
        }
    }
}
