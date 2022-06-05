let n = prompt("Enter the position of the prime number", 1);
const findPrime = num => {
    let i, primes = [2, 3], n = 5;
    const primesum = n => {
       let i = 1, p = primes[i],
       limit = Math.ceil(Math.sqrt(n));
       while (p <= limit) {
          if (n % p === 0) {
             return false;
          }
          i += 1;
          p = primes[i];
       }
       return true;
    }
    for (i = 2; i <= num; i += 1) {
       while (!primesum(n)) {
          n += 2;
       }
       primes.push(n);
       n += 2;
    };
    return primes[num - 1];
 }
 console.log(`Prime number ${findPrime(n)} is placed in the position of ${n}  `);
