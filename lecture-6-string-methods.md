# 2.1.6 - JavaScript String Methods

---

## Methods

Methods have to be the most exciting part of JavaScript!

- Methods are special functions that reference the values of the data stored in the object.
- Methods are called with dot notation `object.method(arguments)`. _The period between object and method is the dot in dot notation._
- Because ALL of the data types we've learned about are actually objects, they all have a bunch of built-in methods and special properties.

---

For example, all objects have `toString` and `valueOf` methods.

```js
let num = 3;
num.toString(); // ret "3"

let bool = true; // ret "true"
bool.toString();

let str = 'hello'; // ret "hello"
str.toString();

let arr = [1, 2, 'three']; //ret "1, 2, three"
arr.toString();

let dip = {value: 3};  //ret "object, Object" .... almost useless
dip.toString();
```


// variablename.valueOf() will return 

Let's look at the examples above again using `valueOf`.

---

- When programming with JavaScript we don't generally care that booleans, numbers and functions are objects. Their methods aren't that useful most of the time.

- The most helpful built-in methods are on strings and arrays.

_We'll talk more about objects and methods later when we talk about creating our own methods._

---

## Common String Methods

Strings have a bunch of methods and properties that will be immediately useful. 😉

- `.length`
- `.replace()`
- `.slice()`
- `.concat()` //combine
- `split()`
- `indexOf()`  /position in array

📝 None of these methods **mutate** the string; strings are **immutable**.
📝 They return a new version of the string which you can then work with as you like.

---

### [`.length`](https://www.w3schools.com/jsreF/jsref_length_string.asp)

Calling `.length` returns the length of the sequence.

```js
// Example
const sentiment = 'I love programming';
sentiment.length;

```

---

### [`.replace()`](https://www.w3schools.com/jsreF/jsref_replace.asp)

The `.replace()` method replaces a specified value with another value in a string.

It takes 2 parameters, the value to replace and the new value.

```js
// Example
const sentiment = 'I love programming';
sentiment.replace('programming','bacon')

//This will only replace the first instance of that which is to be replaced.
```

---

### [`.slice()`](https://www.w3schools.com/jsreF/jsref_slice_string.asp)

`.slice()` extracts a part of a string and returns the extracted part in a new string.

- The method takes 2 parameters: the start position, and the end position.

```js
// Example
const sentiment = 'I love programming';
sentiment.slice(2, 6)

```

---

### [`.concat()`](https://www.w3schools.com/jsreF/jsref_concat_string.asp)

The `.concat()` method is used to join two or more strings.

```js
// Example
let partOne = 'Do or do not.';
let partTwo = 'There is no try.';


partOne.concat(partTwo);
// same as....
`${partOne} ${partTwo}`;
// same as
const newSentence = partOne + partTwo;
```

---

### [`.split()`](https://www.w3schools.com/jsreF/jsref_split.asp)

The `.split()` method "split" a string into an array of _substrings_.

```js
// Example
const truth = 'The greatest teacher, failure is.';
truth.split('') //ret an arrawy with many keys, values of every string
truth.split(' ') //ret an arrawy with every word and no spaces
truth.split('3') //ret an arrawy with chunks of words that stopped at e, and removes the letter e

```

---

### [`.indexOf()`](https://www.w3schools.com/jsreF/jsref_indexof.asp)

The `.indexOf()` method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.

```js
// Example
let yodaSpeak = "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.";
yodaSpeak.indexOf('Anger') //ret 56
yodaSpeak.indexOf('Fear') //ret 0
yodaSpeak.indexOf('fear') //ret -1  i.e. outside the array
```

_Why would JavaScript decide to return `-1` instead of some other value? like `0`?_

---

## More String Methods here...

https://www.w3schools.com/jsreF/jsref_obj_string.asp

---

[Next lecture: Array Methods P1](../lecture-7-array-methods-1)