var vacationType = window.prompt("what kind of trip would you like to go on, musical, tropical, or adventurous?");

let text;
switch(vacationType){

    case "musical":
    alert ("Vibe check!!!")
    break;

    case "tropical":
    alert ("The colorful wild. I like it.")
    break;

    case "adventurous":
    alert ("Adventure time!")
}

var groupSize = parseInt(window.prompt("How many are in your group?"))


let destination;
if (vacationType === "musical") {
    destination = "New orleans.";
    
} else if (vacationType === "tropical") {
    destination = "a beach vacation in Mexico.";

} else if (vacationType === "adventurous") {
    destination = "go white water rafting at the Grand Canyon.";

} else {
    destination = "not valid";
}

let flight;
if (groupSize ===1 || groupSize === 2) {
    flight = "first class flight";

} else if (groupSize >=3 && groupSize <6) {
    flight = "helicoppter";

} else if (groupSize >=6 ) {
    flight = "charter flight";

} else {
    flight= "not valid";
}

let result =  "Since you’re a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a ";

console.log(result.concat(flight + " to " + destination));
