// codeinjs.js

// Function to check if a number is prime
function isPrime(num) {
  if (num <= 1) return false; // 0 and 1 are not prime numbers
  if (num <= 3) return true;  // 2 and 3 are prime numbers

  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check from 5 to sqrt(num)
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

// Example usage:
console.log(isPrime(7));  // true
console.log(isPrime(15)); // false
