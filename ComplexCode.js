/*
Filename: ComplexCode.js

Description: This code is a comprehensive implementation of a library for handling complex numbers in JavaScript. It provides a wide range of operations and functions for complex number manipulation, including arithmetic, trigonometric, exponential, and logarithmic calculations.

Author: [Your Name]

Date: [Date]

*/

class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  // Addition operation
  add(complex) {
    return new ComplexNumber(this.real + complex.real, this.imaginary + complex.imaginary);
  }

  // Subtraction operation
  subtract(complex) {
    return new ComplexNumber(this.real - complex.real, this.imaginary - complex.imaginary);
  }

  // Multiplication operation
  multiply(complex) {
    const real = this.real * complex.real - this.imaginary * complex.imaginary;
    const imaginary = this.real * complex.imaginary + this.imaginary * complex.real;
    return new ComplexNumber(real, imaginary);
  }

  // Division operation
  divide(complex) {
    const denominator = complex.real * complex.real + complex.imaginary * complex.imaginary;
    const real = (this.real * complex.real + this.imaginary * complex.imaginary) / denominator;
    const imaginary = (this.imaginary * complex.real - this.real * complex.imaginary) / denominator;
    return new ComplexNumber(real, imaginary);
  }

  // Absolute value (magnitude) calculation
  abs() {
    return Math.sqrt(this.real * this.real + this.imaginary * this.imaginary);
  }

  // Conjugate calculation
  conjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  // Exponential calculation
  exp() {
    const real = Math.exp(this.real) * Math.cos(this.imaginary);
    const imaginary = Math.exp(this.real) * Math.sin(this.imaginary);
    return new ComplexNumber(real, imaginary);
  }

  // Natural logarithm calculation
  ln() {
    const magnitude = this.abs();
    const real = Math.log(magnitude);
    const imaginary = this.arg();
    return new ComplexNumber(real, imaginary);
  }

  // Argument (angle) calculation
  arg() {
    return Math.atan2(this.imaginary, this.real);
  }

  // Trigonometric sine calculation
  sin() {
    const real = Math.sin(this.real) * Math.cosh(this.imaginary);
    const imaginary = Math.cos(this.real) * Math.sinh(this.imaginary);
    return new ComplexNumber(real, imaginary);
  }

  // Trigonometric cosine calculation
  cos() {
    const real = Math.cos(this.real) * Math.cosh(this.imaginary);
    const imaginary = -Math.sin(this.real) * Math.sinh(this.imaginary);
    return new ComplexNumber(real, imaginary);
  }

  // Trigonometric tangent calculation
  tan() {
    return this.sin().divide(this.cos());
  }

  // Static method for converting from polar coordinates to complex number
  static fromPolar(magnitude, angle) {
    const real = magnitude * Math.cos(angle);
    const imaginary = magnitude * Math.sin(angle);
    return new ComplexNumber(real, imaginary);
  }
}

// Example usage:
const complex1 = new ComplexNumber(2, 3);
const complex2 = new ComplexNumber(-1, 2);

const sum = complex1.add(complex2);
console.log("Sum:", sum);

const difference = complex1.subtract(complex2);
console.log("Difference:", difference);

const product = complex1.multiply(complex2);
console.log("Product:", product);

const division = complex1.divide(complex2);
console.log("Division:", division);

const magnitude = complex1.abs();
console.log("Magnitude:", magnitude);

const conjugate = complex1.conjugate();
console.log("Conjugate:", conjugate);

const exponential = complex1.exp();
console.log("Exponential:", exponential);

const naturalLog = complex1.ln();
console.log("Natural Logarithm:", naturalLog);

const argument = complex1.arg();
console.log("Argument:", argument);

const sine = complex1.sin();
console.log("Sine:", sine);

const cosine = complex1.cos();
console.log("Cosine:", cosine);

const tangent = complex1.tan();
console.log("Tangent:", tangent);

const polar = ComplexNumber.fromPolar(5, Math.PI / 4);
console.log("Polar:", polar);
