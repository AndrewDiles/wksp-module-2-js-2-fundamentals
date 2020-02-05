// Q10
// Build on what you did for Q9.
// This time the function should return a letter grade instead of the average.
// Here is how I calculate the grades
// <60 	is F
// <70 	is D
// <80 	is C
// <90 	is B
// <100 is A

// Write function here

function letterGrade(grades) {
    grades.forEach(function(number) {
        if (number<60){console.log(number + " you get an F!")}
        else if (number<70){console.log(number + " you get an D...")}
        else if (number<80){console.log(number + " you get an C")}
        else if (number<90){console.log(number + " you get an B")}
        else if (number==100){console.log(number + " you get an A!!")}
        
    });
}

// Call the function with [48, 95, 65, 48, 59, 78, 72, 65]

// Try with other values as well
let g = [48, 95, 65, 48, 59, 78, 72, 65]
let t = [0, 59, 60, 61, 69, 99, 100]

letterGrade(g);
letterGrade(t);

