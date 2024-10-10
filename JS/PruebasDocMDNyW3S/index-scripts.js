let changed = false;
let countAlerts = 0;

function changePTxt() {
    if (!changed) {
        document.getElementById("firstP").innerHTML = "Text and style changed";
        document.getElementById("firstP").style.fontSize = "1.5em";
        document.getElementById("firstP").style.fontStyle = "italic";
        changed = true;
    } else {
        document.getElementById("firstP").innerHTML = "Este es el texto original";
        document.getElementById("firstP").style.fontSize = "1em";
        document.getElementById("firstP").style.fontStyle = "normal";
        changed = false;
    }
}

function showAlertWhenClicked() {
    window.alert("Alerta numero: " + countAlerts);
    countAlerts++;
}



