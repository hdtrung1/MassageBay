function setCurrentPage(element) {
    const currentStrong = document.querySelector('.pagination .index');
    if (currentStrong) {
        const pageLink = document.createElement('a');
        pageLink.href = "#";
        pageLink.title = `Go to page ${currentStrong.textContent}`;
        pageLink.onclick = function() { setCurrentPage(this); };
        pageLink.textContent = currentStrong.textContent;
        currentStrong.parentNode.replaceChild(pageLink, currentStrong);
    }

    const strongTag = document.createElement('strong');
    strongTag.classList.add('index');
    strongTag.textContent = element.textContent;
    element.parentNode.replaceChild(strongTag, element);
}
