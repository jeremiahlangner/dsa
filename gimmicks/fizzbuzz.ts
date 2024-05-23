function fizzbuzz(max: number): void {
  let i = 1;
  let aggr = '';
  do {
    let str = '';
    if (i % 3 == 0) 
      str += 'fizz';
    if (i % 5 == 0)
      str += 'buzz';
    aggr += str ? str : i;
    aggr += '\n';
    ++i;
  } while (i < max);
  console.log(aggr);
}

fizzbuzz(100);
