// index.js
const utils = require('./index');
// 1. String Reversal
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 2. Array Sum
function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// 3. Palindrome Check
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// 4. Factorial Calculation
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// 5. Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// 6. Prime Number Check
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 7. Random Number Generator
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 8. Capitalize First Letter
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// 9. Remove Duplicates from Array
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 10. Merge Two Arrays
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// Exporting all functions
module.exports = {
    reverseString,
    sumArray,
    isPalindrome,
    factorial,
    fibonacci,
    isPrime,
    randomNumber,
    capitalizeFirstLetter,
    removeDuplicates,
    mergeArrays
};
