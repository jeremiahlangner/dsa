import assert from 'assert';

function bubbleSort(list: number[]): number[] {
  for (let i = list.length; i > 0; --i) {
    for (let j = 1; j < i; ++j) {
      if (list[j-1] > list[j]) {
        const tmp = list[j];
        list[j] = list[j-1];
        list[j-1] = tmp;
      }
    }
  }
  return list;
}

const testArr = bubbleSort([4,2,7,5]);
assert(testArr[0] === 2);
assert(testArr[1] === 4);
assert(testArr[2] === 5);
assert(testArr[3] === 7);


// Start at end, swap values over until back at beginning; reverse by changing comparator.
