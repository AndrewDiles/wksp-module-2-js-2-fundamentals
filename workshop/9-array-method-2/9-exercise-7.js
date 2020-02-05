// For exercises 4 to 8, you are not allowed to for or while loops.
// Instead focus on the array methods (filter, map, forEach, etc)

// You will also need to verify that your functions work as expected. Be sure to test them. :)

// Q7
// Only greet people who's names have length at least 4.
// Otherwise ignore them completely.
// For example: greeLong(["bob", "daniel"]) returns ["Hello daniel"]
  
function greetLong(lst) {

    let newlist= lst.map(function(name) {
        if (name.length>3){
        return "Hello " + name;
        }
        else return
    });
    
    return newlist.filter(function(word) {
        return word !== undefined;
    });

}



// let newlist = lst.filter(function(name) {
//             return name.length > 3;
//         });

//     return newlist.forEach(function() {
//             return newlist.map(function(name) {
//                 return "Hello " + name;
//             });
            
//     });

// }


// -------------------------------------------------------------------------
console.log('Q7 greetLong()', greetLong(['Scott', 'Bob', 'Ric', 'Jim']));


// function greetLong(lst) {
//     // lst is an array of strings
//     const longNames = lst.filter(function(name) {
//         return name.length > 3;
//     });


//     return longNames.map(function(name) {
//         return `Hello ${name}`;
//     });
// }