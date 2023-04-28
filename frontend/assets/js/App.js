class App {
    constructor() {
        this.baseUrl = 'http://127.0.0.1:8000/api/v1';

        // Carousel best rating movies
        this.bestRating1 = new MovieApi(`${this.baseUrl}/titles/?sort_by=-imdb_score`)
        this.bestRating2 = new MovieApi(`${this.baseUrl}/titles/?page=2&sort_by=-imdb_score`)
        this.bestRating3 = new MovieApi(`${this.baseUrl}/titles/?page=3&sort_by=-imdb_score`)

        // Carousel Category Sci-Fi
        this.sciFi1 = new MovieApi(`${this.baseUrl}/titles/?genre=Sci-Fi&sort_by=-imdb_score`)
        this.sciFi2 = new MovieApi(`${this.baseUrl}/titles/?genre=Sci-Fi&page=2&sort_by=-imdb_score`)
        this.sciFi3 = new MovieApi(`${this.baseUrl}/titles/?genre=Sci-Fi&page=3&sort_by=-imdb_score`)

        // Carousel Category Animation
        this.animation1 = new MovieApi(`${this.baseUrl}/titles/?genre=Animation&sort_by=-imdb_score`)
        this.animation2 = new MovieApi(`${this.baseUrl}/titles/?genre=Animation&page=2&sort_by=-imdb_score`)
        this.animation3 = new MovieApi(`${this.baseUrl}/titles/?genre=Animation&page=3&sort_by=-imdb_score`)

        // Carousel Category Documentary
        this.action1 = new MovieApi(`${this.baseUrl}/titles/?genre=Action&sort_by=-imdb_score`)
        this.action2 = new MovieApi(`${this.baseUrl}/titles/?genre=Action&page=2&sort_by=-imdb_score`)
        this.action3 = new MovieApi(`${this.baseUrl}/titles/?genre=Action&page=3&sort_by=-imdb_score`)
    }

    async main() {
        let arrayMovies = [];

        // Carousel best rating movies
        const movies1 = await this.bestRating1.getMovie();
        const movies2 = await this.bestRating2.getMovie();
        const movies3 = await this.bestRating3.getMovie();
        arrayMovies = [...movies1.results, ...movies2.results, ...movies3.results];
        createCarousel('bestRating', arrayMovies);

        // Carousel sci-fi
        const sciFi1 = await this.sciFi1.getMovie();
        const sciFi2 = await this.sciFi2.getMovie();
        const sciFi3 = await this.sciFi3.getMovie();
        arrayMovies = []
        arrayMovies = [...sciFi1.results, ...sciFi2.results, ...sciFi3.results];
        createCarousel('sciFi', arrayMovies);

        // Carousel Animation
        const animation1 = await this.animation1.getMovie();
        const animation2 = await this.animation2.getMovie();
        const animation3 = await this.animation3.getMovie();
        arrayMovies = []
        arrayMovies = [...animation1.results, ...animation2.results, ...animation3.results];
        createCarousel('animation', arrayMovies);

        // Carousel Documentary
        const action1 = await this.action1.getMovie();
        const action2 = await this.action2.getMovie();
        const action3 = await this.action3.getMovie();
        arrayMovies = []
        arrayMovies = [...action1.results, ...action2.results, ...action3.results];
        createCarousel('action', arrayMovies);
    }
}

const app = new App();
app.main();