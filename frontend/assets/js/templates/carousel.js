/**
 * param id section to create the carousel
 * param movieList list of movies to display
 * 
 */

function createCarousel(id, movieList) {
    // create carousel container
    const carousel = document.createElement('div');
    carousel.classList.add('containerCarousel');
    carousel.id = id;

    // create carousel slider
    const slider = document.createElement('div');
    slider.classList.add('containerCarousel__slider');
    slider.id = 'slider';

    // create carousel buttons
    const btnLeft = document.createElement('button');
    btnLeft.classList.add('containerCarousel__btnNav', 'containerCarousel__btnNav--left');
    btnLeft.id = 'moveLeft';
    btnLeft.innerHTML = 'ᐊ';

    const btnRight = document.createElement('button');
    btnRight.classList.add('containerCarousel__btnNav', 'containerCarousel__btnNav--right');
    btnRight.id = 'moveRight';
    btnRight.innerHTML = 'ᐅ';

    // add carousel buttons to carousel container
    carousel.appendChild(btnLeft);
    carousel.appendChild(slider);
    carousel.appendChild(btnRight);

    // add carousel to DOM
    document.getElementById(id).appendChild(carousel);

    // add movies to carousel slider
    movieList.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('containerCarousel__slider--movie');
        movieContainer.id = 'movie';

        const movieImage = document.createElement('img');
        movieImage.src = movie.image_url;

        movieContainer.appendChild(movieImage);
        slider.appendChild(movieContainer);
    });

    // add event listeners to carousel buttons
    btnLeft.addEventListener('click', scrollLeft);
    btnRight.addEventListener('click', scrollRight);
}

// Scroll to the left
function scrollLeft() {
    let movieWidth = document
        .querySelector('#movie')
        .getBoundingClientRect().width;

    let scrollDistance = movieWidth * 6;

    slider.scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: 'smooth',
    });
}

// Scroll to the right
function scrollRight() {
    let movieWidth = document.querySelector('#movie').getBoundingClientRect().width;

    let scrollDistance = movieWidth * 6;

    slider.scrollBy({
        top: 0,
        left: scrollDistance,
        behavior: 'smooth',
    });
}