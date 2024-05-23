import assert from 'assert';

function palindrome(str: string): boolean {
  if (!str) return false;

  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== str[str.length - (i+1)])
      return false;
  }
  return true;
}

assert(palindrome('') === false);
assert(palindrome('a') === true);
assert(palindrome('aaaaa') === true);
assert(palindrome('strts') === true);
assert(palindrome('barts') === false);

