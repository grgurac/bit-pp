// "use strict"

// function minElement(numbers) {

// }

// function sortMinMax(numbers) {
//     var result =[];

//     for (var i = 1; i < numbers.length - 1; i++) {
//         result[i] = minElement (
//         minElement(numbers.slice(i, numbers.length - 1))
//         ) [0];

//     }
//     return result;
// }
// console.log(minElement([1, 4, 3, 2])); ??????????????????????????????


// function filterNumbers(numbers) {
//     var filteredNumbers = [];

//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] == 5 || numbers[i] == 8) {
//             continue;
//         }
//         filteredNumbers[filteredNumbers.length] = numbers[i];
//     }
//     return filteredNumbers;
// }
// console.log(filterNumbers([3, 6, 8, 2, 1]));



// function filterNumbers(numbers) {
//     var filteredNumbers = [];

//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] === 1 || numbers[i] == 5 || numbers[i] == 8) {
//             continue;
//         }
//         filteredNumbers[filteredNumbers.length] = numbers[i];
//     }
//     return filteredNumbers;
// }
// console.log(filterNumbers([3, 6, 8, 2, 1]));

//los primer funkcije

// function filterNumbers(numbers, excludeNumbers) {
//     var filteredNumbers = [];

//     for (var i = 0; i < numbers.length; i++) {

//         var hasNumber = false;
//         for (var j in excludeNumbers) {
//             if (excludeNumbers[j] === number[i]) {
//                 hasNumber = true;
//                 break;
//             }

//         }
//         if (numbers[i] === 1 || numbers[i] == 5 || numbers[i] == 8) {
//             continue;
//         }
//         filteredNumbers[filteredNumbers.length] = numbers[i];
//     }
//     return filteredNumbers;
// }
// console.log(filterNumbers([3, 6, 8, 2, 1], [1, 2]));

// //
// function filterNumbers(numbers, shouldIAddTheNumber) {
//     var filteredNumbers = [];
//     if (!shouldIAddTheNumber(number[i])) {
//         continue;
//     }

//     return filteredNumbers;
// }

// console.log();

// function conditionFunction(element) {
//     console.log(element);
//     return false;
// }
// console.log(filterNumbers([3, 6, 8, 2, 1], conditionFunction));

// //

// // function conditionFunction(element) {
// //     return (element !== 3 && element !== 5); //if condition zapisan na ovaj nacin
// // }


// console.log(filterNumbers(
//     [3, 6, 8, 2, 1],
//     function (element) {
//         return (element === 3 && element === 5);
//     }
// ));

//
// function filterNumbers(numbers, shouldIAddTheNumber) {
//     var filteredNumbers = [];

//     for (var i = 0; i < numbers.length; i++) {
//         if (!shouldIAddTheNumber(numbers[i])) {
//             continue;
//         }

//         filteredNumbers[filteredNumbers.length] = numbers[i];

//     }
//     return filteredNumbers;
// }

// // function conditionFunction(element) {
// //     console.log(element);
// //     return false;

// console.log(filterNumbers(
//     [1, 4, NaN, undefined, true],
//     function (element) {
//         return !isNaN(element) && isFinite(element);
//     }
// ));

function transformValues(numbers, transformerFunction) {
    var transformed = [];

    for (var i = 0; i < numbers.length; i++) {
        //    transformed[transformed.length] = number[i] * 2;
        transformed[transformed.length] = transformerFunction(numbers[i]);
    }

    return transformed;
}

console.log(transformValues(
    [1, 4, 3, 4, 7],
    function (element) {
        return element * 2 + 3;
    }
));
