// resize button width that equals to the width of items
const firstLastestNewsItem = document.querySelector('.lastest-news-item');

const button = document.getElementById('latest-news-btn');

function updateButtonWidth() {
    const itemWidth = firstLastestNewsItem.clientWidth;
    button.style.width = `${itemWidth}px`;
}
updateButtonWidth();

window.addEventListener('resize', updateButtonWidth);