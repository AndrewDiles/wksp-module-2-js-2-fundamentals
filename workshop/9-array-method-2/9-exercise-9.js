// Q9
// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)

function calculateAverage(grades) {
    let sum = 0;
    grades.forEach(function(number) {
        sum += number;
    });
    let avg = sum / grades.length;
    return Math.round(avg);

}

console.log(calculateAverage([76, 60, 83, 100, 78]));