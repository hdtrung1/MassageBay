const zaloIcon = document.getElementById('zalo-img');
const zaloIconHeight = zaloIcon.clientHeight;

const likeBtns = document.querySelectorAll('.fb-like-img');
likeBtns.forEach((btn) => {
    btn.style.height = `${zaloIconHeight}px`;
});

const shareBtns = document.querySelectorAll('.fb-share-img');
shareBtns.forEach((btn) => {
    btn.style.height = `${zaloIconHeight}px`;
});

const messageIcon = document.querySelector('.fb-message-img');
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

// resize searching field
const imgAd = document.querySelector('.advertise');

const searching = document.getElementById('searching');

function updateSearchingWidth() {
    const searchingWidth = imgAd.clientWidth;
    searching.style.width = `${searchingWidth}px + 2px`;
}
updateSearchingWidth();

window.addEventListener('resize', updateSearchingWidth);

function toggleSearch() {
    var searchBar = document.getElementById("searchBar");
    searchBar.style.display = (searchBar.style.display === "block") ? "none" : "block";
}

document.getElementById('mobile-search').addEventListener('click', function () {
    document.getElementById('mobile-search').addEventListener('click', function () {
        var searchDialog = document.getElementById('searching');
        if (searchDialog.style.display === "none" || searchDialog.style.display === "") {
            searchDialog.style.display = "block"; 
        } else {
            searchDialog.style.display = "none";
        }
    });
});

// export default {
//     data() {
//         return {
//             dialogVisible: false
//         };
//     },
//     methods: {
//         handleClose(done) {
//             this.$confirm('Are you sure to close this dialog?')
//                 .then(_ => {
//                     done();
//                 })
//                 .catch(_ => {});
//         }
//     }
// };

