import assert from 'assert';

function anagrams(str1: string, str2: string): boolean {
  const a = {};
  const b = {};

  if (!a && !b) return false;

  if (!a || !b) return false;

  for (const ltr of str1) {
    if (!a[ltr]) a[ltr] = 1;
    else a[ltr] += 1;
  }
  
  for (const ltr of str2) {
    if (!a[ltr]) return false;
    if (!b[ltr]) b[ltr] = 1;
    else b[ltr] += 1;
    if (b[ltr] > a[ltr]) return false;
  } 
  return true;
}

assert(anagrams('', '') === false);
assert(anagrams('west', 'wets') === true);
assert(anagrams('', 'n') === false);
assert(anagrams('danger', 'ranged') === true);
assert(anagrams('ban', 'nab') === true);
