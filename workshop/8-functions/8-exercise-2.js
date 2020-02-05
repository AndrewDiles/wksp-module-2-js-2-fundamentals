// Q2a
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)

// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

function max(num1, num2) {
    if (num1>num2){return console.log(num1)}
    else if (num2>num1){return console.log(num2)}
    else return console.log("The two numbers are the same...  i.e. I can not return a larger number.")
    }




// Q2b
// Without changing the function at all, 
// can you figure out how we could use it to determine the greater number between 4 integers?

// Yes, create a loop and test all of them.  or just call it three times:
max(max(num1, num2), max(num3, num4));

// Q2c
// Would this work with more integers? 

//You can keep going ad infinitum, however if you have an odd number of numbers you would end up double testing on.