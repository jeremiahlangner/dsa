import assert from 'assert';

// using arr
function reverseString(str: string): string {
  const limit = str.length % 2 === 0 ? str.length / 2 : Math.ceil(str.length / 2);
  const strToArr = Array.from(str);
  for (let i =0; i < str.length; ++i) {
    if (i > limit) break;
    const tmp = str[i];
    strToArr[i] = str[str.length - (i+1)];
    strToArr[str.length - (i + 1)] = tmp;
  }
  return strToArr.join('');
}

// using strings
function stringReverseString(str: string): string {
  let left = '';
  let right = ''
  const limit = str.length % 2 === 0 ? str.length / 2 : Math.ceil(str.length / 2);
  for (let i = 0; i < str.length; ++i) {
    if (i >= limit) break;
    const tmp = str[i];
    left += str[str.length - (i+1)];
    if (right.length !== str.length - (i+1))
      right = tmp + right;
  }
  return left + right;
}

assert(stringReverseString('azerty') === 'ytreza');
assert(stringReverseString('azeroty') === 'ytoreza');
assert(reverseString('azerty') === 'ytreza');
