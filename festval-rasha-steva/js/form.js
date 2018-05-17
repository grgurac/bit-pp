

function createMovie() {
    var greenButton = document.querySelector(".zeleno-dugme");
    var titleInput = document.querySelector("#title");
    var lengthInput = document.querySelector("#length");
    var genreInput = document.querySelector(".movie-genre");
    var output = document.querySelector(".output");
    var error = document.querySelector(".error");


    var title = titleInput.value;
    var length = lengthInput.value;
    var genre = genreInput.value;

    var movie = new Movie(title, length, genre);

    if(!title || !length || genre === "-"){
        var errorMessage = document.createElement("p");
        errorMessage.textContent = "INPUT IS MISSSING"
        error.appendChild(errorMessage);
    }

    var movieDataLi = document.createElement("li");
    movieDataLi.textContent = movie.getData();
    output.appendChild(movieDataLi);

    titleInput.value = "";
    lengthInput.value = "";
    genreInput.value = "";

    




document.querySelector(".output").addEventListener(onclick, createMovie);
}