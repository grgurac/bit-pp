var uiModule = (function () {

    function collectData () {
        var movieTitleInput = document.querySelector("#title");
        var movieLengthInput = document.querySelector("#length");
        var movieGenreInput = document.querySelector("#genre");

        var titleValue = movieTitleInput.value;
        var lengthValue = movieLengthInput.value;
        var genreValue = movieGenreInput.value;

        return {
            title: titleValue,
            length: lengthValue,
            genre: genreValue
        }
    }

    function displayData () {
        var movieList = document.querySelector("#movie-list");
        var listElement  = document.createElement("li");
        listElement.textContent += newMovie.getData();
        movieList.appendChild(listElement);
    }


    return {
        collectData: collectData,
        displayData: displayData
    }

})();


// var movieContent = document.createTextNode(movie.getData());
// movieLi.appendChild(movieContent);
// movieElement.appendChild(movieLi);