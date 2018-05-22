var dataModule = (function () {

    var listOfMovies = [];

    function Movie(name, length, genre) {
        this.name = name,
        this.length = length,
        this.genre = genre;
    }

    Movie.prototype.getData = function () {
        var firstLetter = this.genre[0].toUpperCase();
        var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
        return this.name + ", " + this.length + "min " + firstLetter + lastLetter;
    }

    function createMovie(name,length,genre) {
        var newMovie = new Movie(name, length, genre);
        return newMovie;
    }

    function addMovieToList(movie) {
        listOfMovies.push(movie)
    }

    return {
        createMovie: createMovie
    }




})();