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