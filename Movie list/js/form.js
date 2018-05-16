function createMovie () {
    var titleInput = document.querySelector("#movie-title");
    var lengthInput = document.querySelector("#movie-length");
    var genreSelect = document.querySelector("#movie-genre");
    var movieElement = document.querySelector(".movie-list");
    var errorElement = document.querySelector(".error");

    var title = titleInput.value;
    var length = lengthInput.value;
    var genre = genreSelect.value;

    var newGenre = new Genre (genre);

    var movie = new Movie (title, length, newGenre);

    var movieLi = document.createElement("li");
    var movieContent = document.createTextNode(movie.getData());
    movieLi.appendChild(movieContent);
    movieElement.appendChild(movieLi);

    titleInput.value = "";
    lengthInput.value = "";
    genreSelect.value = "-";

    if(!title) {
        errorElement.innerHTML += "<p>Title input is missing</p>";
        movieElement.innerHTML = "";
    }
    if(!length) {
        errorElement.innerHTML += "<p>Length input is missing</p>"; 
        movieElement.innerHTML = "";
    }
    errorElement.innerHTML = "";

}

function createProgram () {
    var dateInput = document.querySelector("#date");
    var programElement = document.querySelector(".program-list");

    var date = dateInput.value;

    var program = new Program (date);

    programElement.innerHTML = date + ", " + program.numberOfMovies + " movies, duration: " + program.getData();
}