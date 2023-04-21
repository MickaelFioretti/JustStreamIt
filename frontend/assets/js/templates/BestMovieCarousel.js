class BestMovieCarousel {
    constructor(movie) {
        this._movie = movie;
    }

    createBestMovieCarousel() {
        const $wrapper = document.createElement('div');
        $wrapper.classList.add('containerCarousel');


        // get html elements
        const slider = document.querySelector('#slider');
        const btnLeft = document.getElementById('moveLeft');
        const btnRight = document.querySelector('#moveRight');

        // variables
        let activeIndex = 0; // the current page on the slider

        const carousel = `
            <button class="containerCarousel__btnNav containerCarousel__btnNav--left " id="moveLeft" >
                ᐊ
            </button>
            <div class="containerCarousel__slider" id="slider" > 
                ${this._movie.map(movie => `
                    <div class="containerCarousel__slider--movie" id="movie" >
                        <img src="${movie.image_url}" />
                    </div>
                `)}
            </div>
            <button class="containerCarousel__btnNav containerCarousel__btnNav--right" id="moveRight" >
                ᐅ
            </button>
        `

        // Scroll to the left
        function scroll_left() {
            let movieWidth = document
                .querySelector("#movie")
                .getBoundingClientRect().width;

            let scrollDistance = movieWidth * 6;

            slider.scrollBy({
                top: 0,
                left: -scrollDistance,
                behavior: "smooth",
            });

            activeIndex = (activeIndex - 1) % 3;
            console.log(activeIndex);
        }

        // Scroll to the right
        const scrollRight = () => {
            let movieWidth = document.querySelector('#movie').getBoundingClientRect().width;

            let scrollDistance = movieWidth * 6;
            
            console.log(`movieWidth = ${movieWidth}`);
            console.log(`scrolling right ${scrollDistance}`);

            // if we are on the last page
            if (activeIndex === 2) {
                slider.scrollBy({
                    top: 0,
                    left: -scrollDistance * 2,
                    behavior: 'smooth'
                })
            } else {
                slider.scrollBy({
                    top: 0,
                    left: scrollDistance,
                    behavior: 'smooth'
                })
            }

            activeIndex = (activeIndex + 1) % 3;
            console.log(activeIndex)
        }

        $wrapper.innerHTML = carousel;
        return ($wrapper);
    }
}