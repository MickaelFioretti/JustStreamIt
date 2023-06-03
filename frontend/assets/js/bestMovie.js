async function bestMovie() {

    const movie = new MovieApi('http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score')

    const movieList = await movie.getMovie();

    const moviePreview = document.querySelector('#bestFilm');
    moviePreview.setAttribute('src', movieList.results[0].image_url);
    
    const movieInfo = document.querySelector('#bestFilmInfo');

    // add title
    const title = document.createElement('p');
    title.innerHTML = movieList.results[0].title;
    title.classList.add('bestFilm__content-title');

    // add button play
    const btnPlay = document.createElement('button');
    btnPlay.innerHTML = 'Play';
    btnPlay.classList.add('bestFilm__content-btn');
    btnPlay.id = movieList.results[0].id;
    btnPlay.addEventListener('click', modal)

    movieInfo.appendChild(title);
    movieInfo.appendChild(btnPlay);
}

bestMovie();