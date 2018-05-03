// function replaceFirstAndLast(array) {
// var tmp = array[0];
//         array[0] = array[array.length-1];
//         array[array.length-1] = tmp;
//         return array;
// };

// console.log(replaceFirstAndLast( [4, 5, 11, 9]));

// var name = (function replaceFirstAndLast(array) {
//     var tmp = array[0];
//     array[0] = array[array.length - 1];
//     array[array.length - 1] = tmp;
//     return array;
// })([4, 5, 11, 9]);

// console.log(name);

//task 2 Write IIFE that calculates the surface area of the given rectangle with sides a and b. 

// function rectangleSurface(a, b) {
//     var result = a * b;

//     return result;
// }

// console.log(rectangleSurface(3, 7));

// var p = (function rectangleSurface(a, b) {
//     return a * b;
// })(3, 7);

// console.log(p);

//task 3 Write IIFE that replaces all appearances of the letters m or M with * and returns the number of replacements. 

function replaceM(string) {
    var newString = "";
    var counter = 0;
    var result = 0;

    for (var i = 0; i < string.length; i++) { 
        if (string[i] !== "m" && string[i] !== "M") {
            newString += string[i];
        }
        else {
            newString += "*";
            counter++;
        }
            
    }
    return result;
}
console.log(replaceM("aadgdckmMMD"));




// task 4 Write a function with parameters name and surname that returns a function that suggests an email in the form name.surname@gmail.com.

// var odlicna_funckcija = (function makeMail(name, surname) {
//     return name + "." + surname + "@gmail.com"
// })("rasa", "sh");
// console.log(odlicna_funckcija);
