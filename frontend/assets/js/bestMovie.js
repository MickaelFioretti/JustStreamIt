async function bestMovie() {

    const movie = new MovieApi('http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score')

    const movieList = await movie.getMovie();

    const moviePreview = document.querySelector('#bestFilm');
    moviePreview.setAttribute('src', movieList.results[0].image_url);
}

bestMovie();