function modal(e) {
    const modalNode = document.querySelector('#modal');
    modalNode.classList.toggle('show-modal');
    console.log(e.target.id);
    fetch(`http://127.0.0.1:8000/api/v1/titles/${e.target.id}`)
        .then(response => response.json())
        .then(data => {
            // change modal content
            // Image
            modalNode.querySelector('#modalImg').src = data.image_url;
            // Title
            modalNode.querySelector('#modalTitle').innerHTML = data.title;
            // IMDb score
            modalNode.querySelector('#modalIMDB').innerHTML = data.imdb_score;
            // duration in hours and minutes
            const hours = Math.floor(data.duration / 60);
            const minutes = data.duration % 60;
            modalNode.querySelector('#modalDuration').innerHTML = `<i class="fa-solid fa-clock"></i> ${hours}h ${minutes}min`;
            // Time
            modalNode.querySelector('#modalTime').innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${data.date_published}`;
        })
        .catch(error => console.log(error));
}

// close modal window when clicking outside of modal
window.onclick = function(event) {
    const modalNode = document.querySelector('#modal');
    if (event.target == modalNode) {
        modalNode.classList.toggle('show-modal');
    }
}