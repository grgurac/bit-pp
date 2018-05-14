"use strict";

(function () {

    function Genre(name) {
        this.name = name;

    }
    Genre.prototype.getData = function () {
        var firstLetter = this.name[0].toUpperCase();
        var lastLetter = this.name[this.name.length - 1].toUpperCase();
        var idOfMovie = firstLetter + lastLetter;
        return idOfMovie;
    }

    console.log(new Genre("action"));


    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + ", " + this.genre.getData();
    }
    console.log(new Movie("american history x", "life", 132))


    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
    }

    Program.prototype.totalNumberOfMovies = function () {
        return this.listOfMovies.length;
    }

    Program.prototype.addMovie = function () {
        if (!movie || !(movie instanceof Movie)) {
            console.log("Invalid input!");
        }
        return this.listOfMovies.push(movie);
    }
    Program.prototype.getData = function () {
        var day = this.date.getDate();
        var month = this.date.getMonth();
        var year = this.date.getFullYear();
        var date = day + "." + month + "." + year;
        var result = "\t" + date + ", " + this.totalNumberOfMovies() + "\n";

        for (var i = 0; i < this.listOfMovies.length; i++) {
            if (i === this.listOfMovies.length - 1) {
                result += this.listOfMovies[i].title + this.listOfMovies[i].length + this.listOfMovies[i].genre;
            }
        }
    }
    console.log(new Program("12/12/2018"));

    //

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }

    Festival.prototype.getNumberOfMovies = function () {
        var counter = 0;
        this.listOfPrograms.forEach(function (program) {
            counter += program.listOfMovies();

        });
        return counter;
    }

    Festival.prototype.addProgram = function () {
        if (!program || !(program instanceof Program)) {
            console.log("Invalid input!");
        }
        return this.listOfPrograms.push(program);

    }
    Festival.prototype.getData = function () {
        return this.name + this.getNumberOfMovies() + this.listOfPrograms;
    }

    console.log(new Festival(";uh"))

        function createMovie(title, genreString, length) {
            var genre = new Genre(genreString);
            return new Movie(title, genre, length);
          }

          function createProgram(date) {
            return new Program(date);
          }
        
        });

console.log("Hi");



