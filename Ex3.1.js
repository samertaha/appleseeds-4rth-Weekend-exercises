// Ex3.1 - Growth Of population

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?

function nbYear(p0, percent, aug, p) {
  if (
    typeof aug !== 'number' ||
    !Number.isInteger(aug) ||
    aug < 0 ||
    (typeof percent !== 'number' && percent !== null) ||
    typeof p0 !== 'number' ||
    !Number.isInteger(p0) ||
    p0 < 2 || // adam and eve rule :)
    typeof p !== 'number' ||
    !Number.isInteger(p) ||
    p < 2
  )
    return 'Error! make sure aug is an integer, percent a positive or null number, p0 > 2 at least adam and eve! and p are positive integers also minimum 2 adam and eve rule';

  percent = percent == null ? 0 : percent;
  // Initialise array.
  var finalCatch = [];
  // Early conversion.
  var percent = percent / 100;
  // Looping through.
  for (var p0; p0 <= p; p0 += p0 * percent + aug) {
    currValue = p0 + p0 * percent + aug;
    finalCatch.push(currValue);
  }

  return finalCatch.length;
}
console.log(nbYear(1500, 5, 100, 5000)); // -> 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // -> 10
console.log(nbYear(1500, null, 100, 5000));
// following will generate errors
console.log(nbYear(-1500, null, 100, 5000));
console.log(nbYear(1, null, 100, 5000));
console.log(nbYear(2, null, 100, 5000));
