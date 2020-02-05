// Q5
// Write a JavaScript program to find ALL the Armstrong 
// numbers between 0 and 999, store them in array an output
// that array to the console.

// Note : An Armstrong number of three digits is an integer 
// such that the sum of the cubes of its digits is equal 
// to the number itself. For example,
// 371 is an Armstrong number since 3*3 + 7*3 + 1*3 = 371.



// OKAY I WASTED ABOUT AN HOUR ON THIS USING CONSOLE DEBUGS UNTIL I REALIZED THE QUESTION IS WRITTEN WRONG.
// ARMSTRONG NUMBERS REQUIRES CUBES NOT SQUARES ~.~
// I have a strong tendancy to look at equations over words, but I guess I should have realized even the 7 is being multiplied by 3....
// 371 is an Armstrong number since 3^3 + 7^3 + 1^3 = 371.

let armstrongNumbers = [];
let start = 0;
let finish = 999;
function findAmrstrongNumbers(x, y){
    for(i=x; i<=y; i++){
        let a =(Math.floor(i%10))*(Math.floor(i%10))*(Math.floor(i%10));
        let b =(Math.floor((i/10)%10))*(Math.floor((i/10)%10))*(Math.floor((i/10)%10));
        let c =(Math.floor((i/100)%10))*(Math.floor((i/100)%10))*(Math.floor((i/100)%10));
        // console.log((a+b+c) + " " + i);
        if (i<100) {}
        else {
            if((a+b+c)===i) {armstrongNumbers.push(i);
            console.log(i);
            }
        }
    }
    return armstrongNumbers;
}


console.log(findAmrstrongNumbers(start, finish));


// let a =((('')+i)[0])*((('')+i)[0]);
// let b =((('')+i)[1])*((('')+i)[1]);
// let c =((('')+i)[2])*((('')+i)[2]);
// Above is one of 3 failed methods due to thinking it was squares... probably should have looked at solution
