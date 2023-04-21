class App {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:8000/api/v1/';

        this.$bestMovieCarousel = document.querySelector('#bestRating')

        this.moviesApi1 = new MovieApi("http://127.0.0.1:8000/api/v1/titles/?sort_by=-imdb_score")
        this.moviesApi2 = new MovieApi("http://127.0.0.1:8000/api/v1/titles/?page=2&sort_by=-imdb_score")
        
    }

    async main() {
        let arrayMovies = [];
        const movies1 = await this.moviesApi1.getMovie();
        const movies2 = await this.moviesApi2.getMovie();
        arrayMovies = [...movies1.results, ...movies2.results];
        createCarousel('bestRating', arrayMovies);
    }
}

const app = new App();
app.main();
