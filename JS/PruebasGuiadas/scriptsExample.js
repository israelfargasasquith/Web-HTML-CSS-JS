let changed = false;
function myFunction() {
    if (!changed) {
        document.getElementById("demo").innerHTML = "Paragraph changed.";
    } else {
        document.getElementById("demo").innerHTML = "A paragraph.";
    }
    changed = !changed;
}
function countSelected(selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
}

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");

    btn.addEventListener("click", () => {
        const musicTypes = document.selectForm.musicTypes;
        alert(`You have selected ${countSelected(musicTypes)} option(s).`);
    });
});