import assert from 'assert';

// Loop
function loopFib(iterations: number): number {
  let i = 0;
  let n1 = 0;
  let n2 = 0;
  do {
    if (i < 2) {
      n2 = i;
    } else {
      const tmp = n2;
      n2 = n1 + n2;
      n1 = tmp;
    }
    ++i;
  } while (i <= iterations);
  return n2;
}

// recurse
function recurseFib(iterations: number): number {
  if (iterations < 2) return iterations;
  return recurseFib(iterations - 1) + recurseFib(iterations - 2);
}

assert(loopFib(100) === 354224848179262000000);
assert(recurseFib(10) === 55);
