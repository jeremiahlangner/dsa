
function simple(limit: number): number[] {
  console.log(performance.now());
  const primes: number[] = [];
  let n = 2;
  do {
    let isPrime = true;
    for (const p of primes) {
      if (n % p === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(n);
    n++;
  } while (n < limit);
  console.log(performance.now());
  return primes;
}

function sieve(limit: number): number[] {
  console.log(performance.now());
  const isPrime: boolean[] = new Array(limit);
  isPrime.fill(true);
  isPrime[0] = isPrime[1] = false;
  for (let i = 2; i * i < limit; ++i) {
    if (isPrime[i]) {
      for (let j = i * i; j < limit; j += i) {
        isPrime[j] = false;
      }
    }
  }
  console.log('erato', performance.now());
  return isPrime.map((item, i) => item ? i : 0).filter(i => i !== 0);
}

console.log('simple', simple(1e6));
console.log('sieve', sieve(1e6));
