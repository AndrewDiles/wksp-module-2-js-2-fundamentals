// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use for loops to implement your logic

// Q7
// - map returns an array with the same number of elements as lst
// - if lst = [a1, a2, a3, a4, a5] then map(lst, f) returns [f(a1), f(a2), f(a3), f(a4), f(a5)]
// - map returns a new array created by applying func to the elements of the original array
//
// Example:
// function toUpperCase(str) { return str.toUpperCase(); }
// map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]


// Andrew: I don't see a question.  Guessing the question is to make a map function.


function map(lst, func) {
    let newlst = [];
    for (i=0; i<lst.length; i++) {
        newlst.push(func(lst[i]));
    }
    return newlst;
    
}
function charCount(x) {
    return x.length;
}

// -------------------------------------------------------------------------
// function charCount(str) { return str.length };  I wrote my own before seeing this lol
console.log('Q7: ', map(['Cyborg', 'Robin', 'Batman', 'Superman', 'Aquaman', 'Flash'], charCount));
console.log('Q7: ', map(['Scott', 'Bob', 'Ric', 'Jim'], charCount));