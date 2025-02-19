window.addEventListener("scroll", function () {
    var button = document.getElementById("backToTop");
    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}