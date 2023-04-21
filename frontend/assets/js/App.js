class App {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:8000/api/v1';

        this.$bestMovieCarousel = document.querySelector('#bestRating')

        this.bestRating1 = new MovieApi(`${this.baseUrl}/titles/?sort_by=-imdb_score`)
        this.bestRating2 = new MovieApi(`${this.baseUrl}/titles/?page=2&sort_by=-imdb_score`)
        this.bestRating3 = new MovieApi(`${this.baseUrl}/titles/?page=3&sort_by=-imdb_score`)

        this.sciFi1 = new MovieApi(`${this.baseUrl}/titles/?genre=Sci-Fi&sort_by=-imdb_score`)
        this.sciFi2 = new MovieApi(`${this.baseUrl}/titles/?genre=Sci-Fi&page=2&sort_by=-imdb_score`)
        this.sciFi3 = new MovieApi(`${this.baseUrl}/titles/?genre=Sci-Fi&page=3&sort_by=-imdb_score`)
    }

    async main() {
        let arrayMovies = [];

        // Carousel best rating movies
        const movies1 = await this.bestRating1.getMovie();
        const movies2 = await this.bestRating2.getMovie();
        const movies3 = await this.bestRating3.getMovie();
        arrayMovies = [...movies1.results, ...movies2.results, ...movies3.results];
        createCarousel('bestRating', arrayMovies);

        // Carousel Category
        const sciFi1 = await this.sciFi1.getMovie();
        const sciFi2 = await this.sciFi2.getMovie();
        const sciFi3 = await this.sciFi3.getMovie();
        arrayMovies = []
        arrayMovies = [...sciFi1.results, ...sciFi2.results, ...sciFi3.results];
        createCarousel('sciFi', arrayMovies);
    }
}

const app = new App();
app.main();


// /titles/?genre=Sci-Fi&sort_by=-imdb_score