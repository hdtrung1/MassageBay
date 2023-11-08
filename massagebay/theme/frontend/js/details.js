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

// resize button width that equals to the width of items
const firstLastestNewsItem = document.querySelector('.lastest-news-item');

const button = document.getElementById('latest-news-btn');

function updateButtonWidth() {
    const itemWidth = firstLastestNewsItem.clientWidth;
    button.style.width = `${itemWidth}px`;
}
updateButtonWidth();

window.addEventListener('resize', updateButtonWidth);