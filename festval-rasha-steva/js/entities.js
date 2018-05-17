function testis() {
    console.log('aaa');
}

function Movie(title, length, genre) {
    this.title = title;
    this.length = length;
    this.genre = genre;
}

Movie.prototype.getData = function() {
    var firstLetter = this.genre[0].toUpperCase();
    var lastLetter = this.genre[this.genre.length - 1].toUpperCase();
    return this.title + ', ' + this.length + 'min, ' + firstLetter + lastLetter;
}