import assert from 'assert';

function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; ++i) {
    for (let j = i; j > 0; --j) {
      if (arr[j] < arr[j-1]) {
        const tmp = arr[j];
        arr[j] = arr[j-1];
        arr[j-1] = tmp;
      } else {
        break;
      }
    }
  }
  return arr;
}

const arr = insertionSort([5,4,3,2,1]);
assert(arr[0] === 1);
