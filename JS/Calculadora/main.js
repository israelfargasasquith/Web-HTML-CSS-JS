const output = document.getElementById("outputView");
let numeroPantalla = 0;
let numeroOutput;
let numeroAcomulado = 0;
let buttons = document.getElementsByClassName("key");

(function addEvents() {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", escribeOutput);
        buttons[i].addEventListener("click", suma);
    }
})();

(function onLoad() {
    for (let i = 0; i < 9; i++) {
        output.innerHTML += "_ ";
    }
})();

function escribeOutput() {
    console.log("numero: " + this.innerHTML);
}

function suma() {

}


