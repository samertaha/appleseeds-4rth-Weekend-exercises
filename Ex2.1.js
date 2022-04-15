// Ex2.1 - Sum of lowest numbers
// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumSmallestTwoNums = (nums) => {
  let isArray = Array.isArray(nums);
  let moreThan4 = nums.length >= 4;
  let allNums = nums.every((v) => typeof v == 'number');
  let allIntegers = nums.every((v) => Number.isInteger(v));
  let allPositives = nums.every((v) => v > 0);

  if (!isArray) throw new Error('only array arguments is accepted.');
  else if (!moreThan4) throw new Error('minimum 4 numbers should be provided.');
  else if (!allNums) throw new Error('only numbers should be provided.');
  else if (!allIntegers)
    throw new Error('only integer numbers should be provided.');
  else if (!allPositives)
    throw new Error('only positive numbers should be provided.');

  const numbers = nums.sort((a, b) => {
    return a - b;
  });
  return numbers[0] + numbers[1];
};

// try {
//   sumSmallestTwoNums([1, 2.1]);
// } catch (e) {
//   console.error(e.message);
// }

// try {
//   sumSmallestTwoNums([1, 2.1, 2, 3]);
// } catch (e) {
//   console.error(e.message);
// }

// try {
//   sumSmallestTwoNums([1, 'string', 2, 3]);
// } catch (e) {
//   console.error(e.message);
// }

// try {
//   sumSmallestTwoNums([1, -5, 2, 3]);
// } catch (e) {
//   console.error(e.message);
// }

try {
  console.log(sumSmallestTwoNums([19, 5, 42, 2, 77])); //expected 7
} catch (e) {
  console.error(e.message);
}

try {
  console.log(sumSmallestTwoNums([10, 343445353, 3453445, 3453545353453])); //expected 3453455
} catch (e) {
  console.error(e.message);
}
