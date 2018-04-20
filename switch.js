var day = 5;

switch (day) {
    case 1:
        console.log("It's monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("It's wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("It's Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("There is only 7 days in a week. You are stupid.");
}

// zadatak 3


switch (day) {
    case 1:
    case 2:
    case 3: 
    case 4:
    case 5:
        console.log("It's weekday!");
        break;
    case 6:
    case 7:
        console.log("It's weekend!");
        break;
    default:
        console.log("Nope, that's not day!");
}

// zadatak 4
var month = 8
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Input must be a number between 1 and 12")
}


//zadatak 5

switch(month){
    case 12: 
    case 1:
    case 2:
        console.log("Winter");
        break;
    case 3:
    case 4:
    case 5:
        console.log("spring");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Summer");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Winter");
        break;
    default:
        console.log("Must be between 1-12");
}

//zadatak 6

    var grade = "D";

    switch (grade) {
        case "A":
            console.log("Good job");
            break;
        case "B":
            console.log("Pretty good");
            break;
        case "C":
            console.log("Passed");
            break;
        case "D":
            console.log("Not so good");
            break;
        case "E":
            console.log("Failed");
        default:
            console.log("Unknown grade");
    }