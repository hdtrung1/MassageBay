// Menu mobile
function menuMobile() {
    var x = document.querySelector(".topnav .link");
    x.style.display = (x.style.display === "block") ? "none" : "block";
}

// // toggle submenu visibility
function toggleSubMenu(element) {
    var submenu = element.nextElementSibling;
    var chevron = element.querySelector('.fa-chevron-down');
    var caret = element.querySelector('.fa-caret-down');

    if (submenu.style.display === "block") {
        submenu.style.display = "none";
        if (chevron) {
            chevron.classList.remove('fa-chevron-up');        
        }
        if (caret) {
            caret.classList.remove('fa-caret-up');
        }
    } else {
        submenu.style.display = "block";
        if (chevron) {
            chevron.classList.add('fa-chevron-up');
        }
        if (caret) {
            caret.classList.add('fa-caret-up');
        }
    }
}