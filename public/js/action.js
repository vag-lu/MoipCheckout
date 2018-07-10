function hideCard(radio) {
    if (radio.checked) {
        document.getElementById("cc").style.visibility = "hidden";
    }
}

function showCard(radio) {
    if (radio.checked) {
        document.getElementById("cc").style.visibility = "visible";
    }
}