// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two
// items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function (busStops) {
  let x = 0;
  if (!Array.isArray(busStops))
    return 'ERROR: bus stations container must be an array';

  const busStopsNotOk = busStops.some((busStop) => {
    return (
      busStop.length !== 2 ||
      typeof busStop[0] !== 'number' ||
      typeof busStop[1] !== 'number' ||
      busStop[0] < 0 ||
      busStop[1] < 0
    );
  });
  if (busStopsNotOk)
    return 'ERROR: each bus stop must be an array of two numbers';

  busStops.forEach((busStop) => {
    x = x + busStop[0] - busStop[1];
  });
  if (x < 0)
    return 'number of people in the bus cant be negative check your bus stops arrays';
  return x;
};

// test case 3 expected
console.log(
  number([
    [2, 1],
    [5, 3],
  ])
);

// test case bus stop more than 2 values
console.log(
  number([
    [3, 1, 3],
    [5, 3],
  ])
);

// test case bus stop has non integer value
console.log(
  number([
    ['string', 1],
    [5, 3],
  ])
);

// test case bus cant have negative value of people
console.log(number([[2, 10]]));
