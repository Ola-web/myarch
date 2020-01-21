function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "ola-container") {
        x.className += " responsive";
    } else {
        x.className = "ola-container";
    }
}