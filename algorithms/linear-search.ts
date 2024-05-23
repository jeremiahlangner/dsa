import assert from 'assert';

function linearSearch(needle: any, haystack: any[]): number {
  for (let i = 0; i < haystack.length; ++i) {
    if (haystack[i] == needle) {
      return i;
    }
  }
  return -1;
}

assert(linearSearch(4, ['', 3, 'ten', { hello: 'bye' }, 4]) == 4);
