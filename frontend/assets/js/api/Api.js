class Api {
    /**
     * @param {string} url
     */
    constructor(url) {
        this.url = url;
    }

    async get() {
        return await fetch(this.url)
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.log(error));
    }
}

class MovieApi extends Api {
    /**
     * @param {string} url
     */
    constructor(url) {
        super(url);
    }

    async getMovie() {
        return await this.get();
    }
}