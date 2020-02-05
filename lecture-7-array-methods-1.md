

variablename.method(arguement(s))


# 2.1.7 - JavaScript Array methods P1

---

- Arrays have a bunch of methods attached to them.
- Many of which you'll use on a daily basis.

---

## Common Array methods

- `.concat()`
- `.join()`

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_array.asp)

The `.concat()` method returns a _new_ array with the values of two existing arrays.

```js
// Example
const arrayOne = ['think', 'dream', 'learn', 'write'];
const arrayTwo = ['thought', 'dreams', 'knowledge', 'truth'];

let newArray = arrayOne.concat(arrayTwo);
// now newArray = ['think', 'dream', 'learn', 'write', 'thought', 'dreams', 'knowledge', 'truth'];
```

---

### [`.join()`](https://www.w3schools.com/jsreF/jsref_join.asp)

The `.join()` method returns the array as a string.  

```js
// Example

//this is the opposite of split

const lexicon = ['The', 'large', 'shaggy', 'dog', 'barked', 'at', 'the', 'silence'];

let sentence = lexicon.join();  //ret "The,large,shaggy,dog,barked,at,the,silence"
let sentence = lexicon.join(' ');  //ret "The large shaggy dog barked at the silence"
//i.e. by default, join inserts commas between its values.

```

---

And there are so many more.

---

## Exercise

Let's dip into the internet and see if we can learn all of these methods collectively.

1. `.includes()`, `.slice()`
2. `.indexOf()`, `.push()` 
3. `.pop()`, `.sort()`
4. `.shift()`, `.unshift()`
5. `.reverse()`, `.lastIndexOf()`
6. `.splice()`, `.toString()`

- Split into teams of 2.
- Take given methods
    - find an explanation/definition, then write your own.
    - create two examples of each method in use. Be creative. 😛

---

[Next lecture: Functions](../lecture-8-functions)



1. 1. .include()  Takes an arguement.  Tests if variable (an array) contains the arguement.  If it does, returns true, else false.
If your arguement is not a string, returns false.  If your string contains nothing, true


ex:
``
`let summer = ["annoying", "sister", "warrior"];`
`console.log(summer.includes("sister"));` returns true
`console.log(summer.includes("sis"));` returns false
`console.log(summer.includes(summer));` returns an error, because arguement must be a variable.

let semirandomlist = ["Jace", "pie", 42, [9]]
onsole.log(semirandomlist.includes(42)); ret true


1. 2. .slice()  Takes a 
let veg = ["broc", "carr", "pot", "onion"];
console.log(veg.slice(2,3)); ret ["carr"],  first number is where it starts.  second number is that which is removed.

2. 1. .indexOf()  Searches variable for arguement.
let yoda = ["size", "matters", "not"];
console.log(yoda.indexOf('not')); returns 2, its location in the array

2. 2. push() adds items to the end of an array and returns the array's new length.  This method mutates the original variable.
let outfit = ["shoes", "pants", "shirt"]
console.log(outfit.push("hat", "purse", "coat"));  ret 6.  Push returns the new length.

3. 1. pop() removes the first value from the array and returns the popped value.  pop also mutates the original variable.
console.log(outfits); ret "shoes"

3. 2. `.sort()` takes no arguements.  mutates the array to sort its values in alphabetical order
let veg = ["broc", "carr", "pot", "onion"];
veg.sort() // rets ["broc", "carr", "onion", "pot"];

4. 1. `.shift()` changes original array, returns word pulled out


4. 2. `.unshift()` Adds arguement to beginning of array



5. 1. `.reverse()` 
let backtalk = "'backwards', 'is', 'this'];
backtalk.reverse();



5. 2.  `.lastIndexOf()`
6. `.splice()`, `.toString()`