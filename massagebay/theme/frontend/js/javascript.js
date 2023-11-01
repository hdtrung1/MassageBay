const zaloIcon = document.getElementById('zalo-img');
const zaloIconHeight = zaloIcon.clientHeight;

const likeBtns = document.querySelectorAll('.like-btn');
likeBtns.forEach((btn) => {
    btn.style.height = `${zaloIconHeight}px`;
});

const shareBtns = document.querySelectorAll('.share-btn');
shareBtns.forEach((btn) => {
    btn.style.height = `${zaloIconHeight}px`;
});

const messageIcon = document.querySelector('.message-icon');
messageIcon.style.height = `${zaloIconHeight}px`;


function menuMobileFunction() {
    var x = document.getElementById("link");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}