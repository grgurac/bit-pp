/*function maximum(a,b) {
    if(a>b) {
        return a
    } else {
        return b
    }
}    
console.log(maximum(4,6));*/

/*function isNumberOdd(a) {
    if(a % 2 === 0) {
        console.log("Number " + a + " is not odd")
    } else {
        console.log("Number " + a + " is odd")
    }
}

isNumberOdd(3);*/

/*function isNumThreeDigit(a) {
    if (a > 99  && a < 1000) {
        console.log("Number " + a + " is three digit long")
    } else {
        console.log("Number " + a + " is not three digit long")
    }
}
isNumThreeDigit(55);*/

/*function aritMean(a,b,c,d) {
    var sum = a + b + c + d
    var mean = sum / 4
    return mean
}
console.log(aritMean(1,2,3,4));*/

/*function numberOfDigits(a) {
    var string = a + "";
    return string.length;
}
console.log(numberOfDigits(5555));*/

/*function numberOfApp(a, arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (a === arr[i]) {
            sum ++
        }       
    }
    return sum;
}
    console.log(numberOfApp(4, [4,4,6, 8, 10, 4]));*/

/*function oddElements(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1)
        sum += arr[i];
    }
    return sum;
}
console.log(oddElements([1,3,5,4,4,4,4]));*/

/*function numberOfApp(letter, string) {
    var letterApp = 0;
    var stringAsLowerCase = string.toLowerCase();
    var letterAsLowerCase = letter.toLowerCase();

    for (var i = 0; i< stringAsLowerCase.length; i++) {
        if (letterAsLowerCase === stringAsLowerCase[i]) {
            letterApp++;
        }
    }
    return letterApp;
};

console.log(numberOfApp("P", "ovo je kao nekiPP string gde pise aaaaa"));*/

