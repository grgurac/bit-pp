// var rasa = {
//     name: "Radomir",
//     nickname: "Rasa",
//     age: 28,
//     job: false,
//     hobbies: ["writing jokes", "listening loud music", "smashing things around the house"],
//     haveFun: function() {
//         return rasa.hobbies }
// };

// delete rasa.job;
// rasa.books = ["brave new world", "catch 22"]
// rasa.books[0] = {
//     author: "Aldous Huxley",
//     name: "Brave New World"
// }
// rasa.books[1] = {
//     author: "Joseph Heller",
//     name: "Catch 22"
// }

// rasa.books[2] = {
//     author: "Douglas Adams",
//     name: "hitchhiker\'s guide to the galaxy"
// }

// console.log("My hobbies are: " + rasa.haveFun());
// console.log(rasa.books[2].author);

// var favoriteCoffee = {
//     name: "Turkish",
//     strength: "Strong",
//     milk: "No",
//     sugar: "No"
// }

// console.log(favoriteCoffee.milk);

// var favoriteMovie = {
//     title: "Old Boy",
//     director: "Chan-wook Park",
//     actors: ["Min-sik Choi", "Ji-tae Yu", "Hye-jeong Kang"],
//     genre: ["Action", "Drama", "Mystery"],
//     popularity: 8.4
// };


function representProgram(descr, language, rep, completed) {
    var program = {
        description: descr,
        programmingLanguage: language,
        gitRepository: rep,
        completedOrNot: completed,
        printRepository: function () {
            return program.gitRepository;
        },
        isWrittenInJavaScript: function () {
            if (program.programmingLanguage === "javaScript") {
                return true;
            } else {
                return false;
            }
        },
        isCompleted: function () {
            if (program.completedOrNot) {
                return true;
            } else {
                return false;
            }
        }
    }
    return program;
}

var jsProgram = representProgram("Ovo je JS Program", "javaScript", "git/js", true);
var phpProgram = representProgram("Ovoo je php program", "php", "git/php", false)
phpProgram.isWrittenInJavaScript()

console.log(jsProgram.isWrittenInJavaScript());
console.log(phpProgram.isCompleted());


function culinaryRecipe () {
    var recipe = {
        name: "popara",
        type: "domaca",
        complexity: 2,
        ingredients: ["voda", "hleb", "maslac"],
        preparingTime: 5,
        prepInstruction: "Stavis hleba u vodu i mesas",
        necessaryIngredients: function () {
            return ingredients;
        },
        checkTime: function () {
            if (prepingTime <= 15) {
                return true;
            } 
        },
        changeCusine: function () {
            
        }
    }
}