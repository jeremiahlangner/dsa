import assert from 'assert';

function binarySearch(needle: number, haystack: number[]): number {
  let min = 0;
  let max = haystack.length - 1;
  let mid = (min + max) / 2;
  do {
    if (haystack[mid] === needle) return mid;

    if (haystack[mid] > needle) {
      min = mid;
    } else {
      max = mid;  
    }

    mid = Math.floor((min + max) / 2);
  } while (mid < max);

  return -1;
}

assert(binarySearch(5, [0,3,4]) === -1);
assert(binarySearch(5, []) === -1);
assert(binarySearch(5, [0,3,4,5,8,10,15]) === 3);
