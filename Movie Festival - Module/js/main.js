var mainModule = (function (data, ui) {

    var createMovieButton = document.querySelector("#create-movie");

    createMovieButton.addEventListener("click", init);

    function init () {
        var formData = ui.collectData();
        var displayData = ui.displayData();
    }


    //colect Data

    //create Movie

    //update Movie List


})(dataModule, uiModule);