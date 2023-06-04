function modal(e) {
    const modalNode = document.querySelector('#modal');
    modalNode.classList.toggle('show-modal');
    // button to close modal
    const closeBtn = document.querySelector('#modalClose');
    closeBtn.addEventListener('click', () => {
        if (modalNode.classList.contains('show-modal')) {
            modalNode.classList.toggle('show-modal');
        }
    });

    // fetch data from API and add it to modal
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
            // Genre
            // for each genre, add a p tag with the genre
            const genreNode = modalNode.querySelector('#modalGenre');
            genreNode.innerHTML = '';
            data.genres.forEach(genre => {
                const p = document.createElement('p');
                p.innerHTML = genre;
                genreNode.appendChild(p);
            }
            );
            // Directors
            // for each director, add a p tag with the director add "Director: " before the first director
            const directorNode = modalNode.querySelector('#modalDirector');
            directorNode.innerHTML = '';
            data.directors.forEach((director, index) => {
                const p = document.createElement('p');
                if (index === 0) {
                    p.innerHTML = `Director: ${director},`;
                } else {
                    p.innerHTML = ` ${director},`;
                }
                directorNode.appendChild(p);
            }
            );
            // Description
            modalNode.querySelector('#modalDescription').innerHTML = `Description: ${data.description}`;
            // Actors
            // for each actor, add a p tag with the actor add "Actors: " before the first actor
            const actorNode = modalNode.querySelector('#modalActors');
            actorNode.innerHTML = '';
            data.actors.forEach((actor, index) => {
                const p = document.createElement('p');
                if (index === 0) {
                    p.innerHTML = `Actors: ${actor},`;
                } else {
                    p.innerHTML = ` ${actor},`;
                }
                actorNode.appendChild(p);
            }
            );
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