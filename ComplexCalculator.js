/*
Code Filename: ComplexCalculator.js

This code is a complex calculator that performs various mathematical operations.
It includes functions to add, subtract, multiply, and divide numbers.
It also includes functions for calculating the factorial, calculating the power of a number,
finding the square root, and finding the absolute value.

Feel free to use this code as a starting point and add more functionality as needed.

Note: This code assumes ECMAScript 6 (ES6) syntax.

*/

// Constants
const PI = 3.14159;
const E = 2.71828;

// Addition Function
function add(a, b) {
  return a + b;
}

// Subtraction Function
function subtract(a, b) {
  return a - b;
}

// Multiplication Function
function multiply(a, b) {
  return a * b;
}

// Division Function
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Factorial Function
function factorial(x) {
  if (x < 0) {
    throw new Error("Factorial of a negative number is undefined");
  }
  if (x === 0 || x === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= x; i++) {
    result *= i;
  }
  return result;
}

// Power Function
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root Function
function squareRoot(x) {
  if (x < 0) {
    throw new Error("Square root of a negative number is undefined");
  }
  return Math.sqrt(x);
}

// Absolute Value Function
function absoluteValue(x) {
  return Math.abs(x);
}

/* 
   Complex Calculations 
*/

// Perform complex calculation
function performComplexCalculation() {
  const a = 5;
  const b = 10;

  const sum = add(a, b);
  console.log("Sum:", sum);

  const difference = subtract(a, b);
  console.log("Difference:", difference);

  const product = multiply(a, b);
  console.log("Product:", product);

  const quotient = divide(a, b);
  console.log("Quotient:", quotient);

  const factorialOfA = factorial(a);
  console.log("Factorial of A:", factorialOfA);

  const powerOfA = power(a, b);
  console.log("Power of A:", powerOfA);

  const squareRootOfA = squareRoot(a);
  console.log("Square Root of A:", squareRootOfA);

  const absoluteValueOfDifference = absoluteValue(difference);
  console.log("Absolute Value of Difference:", absoluteValueOfDifference);
}

// Run the complex calculation
performComplexCalculation();