let countAlerts = 0;
let changed = false;
let formatoLargo = true;
let checkBox = document.querySelector("input[name=cambioFormato]");
checkBox.addEventListener('change', function () {
    if (this.checked) {
        document.getElementById("mensaje").innerHTML = "ahora el formato sera corto";
        formatoLargo = false;
    } else {
        document.getElementById("mensaje").innerHTML = "ahora el formato sera largo";
        formatoLargo = true;
    }
})

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
    if (countAlerts <= 2) {
        alert("Alerta numero: " + countAlerts);
        console.log(countAlerts);
        document.getElementById("awebo").style.visibility = "hidden";
        countAlerts++;
    }

    if (countAlerts == 3) {
        console.log(countAlerts);
        document.getElementById("awebo").style.visibility = "visible";
        countAlerts = 0;
    }

}

function dimeHora(este) {
    if (formatoLargo) {
        este.innerHTML = Date()
    } else {
        const mensaje = Date();
        este.innerHTML = mensaje.substring(16, 24);
    }

}




