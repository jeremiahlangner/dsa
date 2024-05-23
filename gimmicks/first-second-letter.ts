/*
  * Given a string composed of English lowercase characters find the first letter that occurs more than once.
  */

import assert from 'assert';

function firstSecondLetter(str: string): string | null {
  const seen: string[]  = [];
  for (const l of str) {
    if (seen.indexOf(l) > -1) return l;
    seen.push(l);
  }
  return null;
}

assert(firstSecondLetter('abba') === 'b');
