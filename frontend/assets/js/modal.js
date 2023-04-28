function modal(e) {
    const modalNode = document.querySelector('#modal');
    modalNode.classList.toggle('show-modal');

}

// close modal window when clicking outside of modal
window.onclick = function(event) {
    const modalNode = document.querySelector('#modal');
    if (event.target == modalNode) {
        modalNode.classList.toggle('show-modal');
    }
}