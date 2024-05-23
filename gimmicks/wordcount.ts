import assert from 'assert';

// oneliner 
function wordCount(str: string): number {
  if (!str || !str.trim()) return 0;
  return str
    .trim()
    .split(/\s+/)
    .map(() => 1)
    .reduce((a,b) => a + b, 0);
}

// parsing the string
function wordCountParse(str: string): number {
  if (!str || !str.trim()) return 0;
  let count = 0;
  let i = 0;
  let previous = '';
  do {
    if (i > 0) previous = str[i - 1];
    if (str[i] !== ' ' && (!previous || previous === ' '))
      ++count;
    ++i;
  } while(i < str.length);
  return count;

}

// Both methods are rather naive; adding non-traditional whitespace characters will likely cause problems
assert(wordCount(' ') === 0);
assert(wordCount('hello world   75 ') === 3)
assert(wordCount(' hello world 75 ') === 3)
assert(wordCount('hello world 75') === 3)

assert(wordCountParse(' ') === 0);
assert(wordCountParse('hello world   75 ') === 3)
assert(wordCountParse(' hello world 75 ') === 3)
assert(wordCountParse('hello world 75') === 3)

