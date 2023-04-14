/**
 * If the user scroll change the navbar color
 */
function changeNavbarColor() {
    if (window.scrollY > 0) {
        document.getElementById('navbar').classList.add('scrolled')
    } else {
        document.getElementById('navbar').classList.remove('scrolled')
    }
}