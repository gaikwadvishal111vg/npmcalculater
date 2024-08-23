// Import the functions from index.js
const utils = require('./index');
console.log('Reverse String:', utils.reverseString('hello'));
console.log('Sum Array:', utils.sumArray([1, 2, 3, 4, 5]));

console.log('Is Palindrome:', utils.isPalindrome('racecar'));
console.log('Factorial:', utils.factorial(5));
console.log('Fibonacci:', utils.fibonacci(7));
console.log('Is Prime:', utils.isPrime(11));
console.log('Random Number:', utils.randomNumber(1, 100));
console.log('Capitalize First Letter:', utils.capitalizeFirstLetter('hello'));
console.log('Remove Duplicates:', utils.removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log('Merge Arrays:', utils.mergeArrays([1, 2, 3], [4, 5, 6]));