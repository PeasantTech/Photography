const galleryImgs = document.querySelectorAll('.gallery img');
const fullPage = document.getElementById('fullpage');

galleryImgs.forEach(img => {
    img.addEventListener('click', function () {
        console.log("click");
        fullPage.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.display = 'block';
        const displayType = fullPage.style.display;
        scrollLock(displayType);
    });
});

fullPage.addEventListener("click", () => {
    fullPage.style.display = 'none';
    document.body.style.overflowY = 'scroll';
})

const scrollLock = (string) => {
    string == "block" ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll";
}
