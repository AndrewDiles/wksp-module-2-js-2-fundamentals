// Q1
// Write a function that accepts two integers and displays
// the greater one.

// Define the function
function max(num1, num2) {
if (num1>num2){return console.log(num1)}
else if (num2>num1){return console.log(num2)}
else return console.log("The two numbers are the same...  i.e. I can not return a larger number.")
}

// Call the function
max(12, 43);