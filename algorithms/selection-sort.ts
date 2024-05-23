import assert from 'assert';

function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; ++i) {
    let mi = i;
    for (let j = i + 1; j < arr.length; ++j) {
      if (arr[j] < arr[mi]) mi = j;
      const tmp = arr[mi];
      arr[mi] = arr[i];
      arr[i] = tmp;
    }
  }
  return arr;
}

const sorted = selectionSort([1,2,5,4,3]);
assert(sorted[2] === 3);
