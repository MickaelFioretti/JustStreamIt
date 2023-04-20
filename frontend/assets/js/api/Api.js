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