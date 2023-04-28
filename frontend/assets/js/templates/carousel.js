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

    // create carousel title
    const title = document.createElement('h2');
    title.classList.add('containerCarousel__title');
    title.innerHTML = id;

    // create carousel slider
    const slider = document.createElement('div');
    slider.classList.add('containerCarousel__slider');
    slider.id = `slider-${id}`;

    // create carousel buttons
    const btnLeft = document.createElement('button');
    btnLeft.classList.add('containerCarousel__btnNav', 'containerCarousel__btnNav--left');
    btnLeft.id = id;
    btnLeft.innerHTML = 'ᐊ';

    const btnRight = document.createElement('button');
    btnRight.classList.add('containerCarousel__btnNav', 'containerCarousel__btnNav--right');
    btnRight.id = id;
    btnRight.innerHTML = 'ᐅ';

    // add carousel buttons to carousel container
    carousel.appendChild(title);
    carousel.appendChild(btnLeft);
    carousel.appendChild(slider);
    carousel.appendChild(btnRight);

    // add carousel to DOM
    document.getElementById(id).appendChild(carousel);

    // add movies to carousel slider
    movieList.forEach(movie => {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('containerCarousel__slider--movie');
        movieContainer.id = `movie-${id}`;

        const movieImage = document.createElement('img');
        movieImage.src = movie.image_url;
        movieImage.id = movie.id;
        movieImage.addEventListener('click', modal);

        movieContainer.appendChild(movieImage);
        slider.appendChild(movieContainer);
    });

    // add event to carousel buttons
    btnLeft.addEventListener('click', scrollLeft);
    btnRight.addEventListener('click', scrollRight);

}

// Scroll to the left
function scrollLeft(e) {
    let slider = document.querySelector('#slider-'+e.target.id);

    let movieWidth = document
        .querySelector('#movie-'+e.target.id)
        .getBoundingClientRect().width;

    let scrollDistance = movieWidth * 6;

    slider.scrollBy({
        top: 0,
        left: -scrollDistance,
        behavior: 'smooth',
    });
}

// Scroll to the right
function scrollRight(e) {
    let slider = document.querySelector('#slider-'+e.target.id);

    let movieWidth = document
        .querySelector('#movie-'+e.target.id)
        .getBoundingClientRect().width;

    let scrollDistance = movieWidth * 6;

    if (slider.scrollWidth - slider.scrollLeft === slider.clientWidth) {
        slider.scrollBy({
            top: 0,
            left: -slider.scrollLeft,
            behavior: 'smooth',
        });
    } else {
        slider.scrollBy({
            top: 0,
            left: scrollDistance,
            behavior: 'smooth',
        });
    }
}