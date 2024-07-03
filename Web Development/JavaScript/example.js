var buttonClicked = false;

function changeColour() {

    const text = document.getElementById("colour");

    if(buttonClicked) {
        text.style.color = "black";
        buttonClicked = false;
    }
    else {
        text.style.color = "red";
        buttonClicked = true;
    }
}