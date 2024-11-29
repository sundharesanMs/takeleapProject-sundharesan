// 1. Mathematical operation using let, var, and const
var num1 = 10; // Using var
let num2 = 20; // Using let
const num3 = 30; // Using const

let sum = num1 + num2 + num3;
console.log("Sum:", sum);

let product = num1 * num2 * num3;
console.log("Product:", product);

// 2. Implementing map, reduce, filter, and flatMap
function customArrayMethods(arr) {
    const mapped = arr.map(x => x * 2);
    console.log("Mapped:", mapped);

    const reduced = arr.reduce((acc, x) => acc + x, 0);
    console.log("Reduced:", reduced);


    const filtered = arr.filter(x => x > 10);
    console.log("Filtered:", filtered);

    // FlatMap (using nested arrays as an example)
    const flatMapped = arr.flatMap(x => [x, x * 2]);
    console.log("FlatMapped:", flatMapped);
}

customArrayMethods([5, 10, 15]);

// 3. Example of a callback function
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function farewell() {
    console.log("Goodbye!");
}

// Calling the function with a callback
greet("Alice", farewell);

// 4. Program to reverse a string using arrays
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example usage
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log("Reversed String:", reversedString);
