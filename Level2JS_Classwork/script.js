function initialize(){
    halloweenText = document.getElementById("colordiv");

    fore = "black";
    back = "orange";

    textWidth = 100;
}

function toggleColor(){
    var tmp = fore;
    fore = back;
    back = tmp;

    display();
}

function display(){
    halloweenText.style.color = fore;
    halloweenText.style.backgroundColor = back;
    halloweenText.style.width = textWidth + "%";
}

function changeWidth(w){
    textWidth = w;
    display();
}

function initializeCSS(){
    textOutput = document.getElementById("textdiv");
    fontSizeOutput = document.getElementById("sizeout");
    
    fontSize = 24;
}

function modifyFontSize(mod){
    fontSize += mod;
    
    if(fontSize < 4)
        fontSize = 4;
    
    displayCSS();
}

function displayCSS(){
    fontSizeOutput.innerHTML = fontSize;
    textOutput.style.fontSize = fontSize + "pt";
}

function getRandomInteger(lower, upper){
    //R = parseInt(rnd * (upper - (lower - 1)) + lower
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random() * multiplier) + lower;
    
    return rnd;
}
