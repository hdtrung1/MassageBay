// Menu mobile
function menuMobile() {
    var x = document.getElementsByClassName("link");
    for (var i = 0; i < x.length; i++) {
        if (x[i].style.display === "block") {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "block";
        }
    }
}

// toggle submenu visibility
function toggleSubMenu(element) {
    var submenu = element.nextElementSibling;
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}