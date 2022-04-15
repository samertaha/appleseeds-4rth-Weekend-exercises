// Ex2.2 - One and Zero - Binary
// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.
// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = (arr) => {
  const binaryNumber = arr.every(
    (n) => typeof n === 'number' && (n == 0 || n == 1)
  );
  if (!binaryNumber)
    throw 'Error: function accept array of ones and zeroes numbers only.';
  return parseInt(arr.join(''), 2);
};
console.log(binaryArrayToNumber([0, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([0, 1, 0, 1]));
console.log(binaryArrayToNumber([1, 0, 0, 1]));
console.log(binaryArrayToNumber([0, 0, 1, 0]));
console.log(binaryArrayToNumber([0, 1, 1, 0]));
console.log(binaryArrayToNumber([1, 1, 1, 1]));
console.log(binaryArrayToNumber([1, 0, 1, 1]));
try {
  console.log(binaryArrayToNumber([1, 0, 'string', 1]));
} catch (e) {
  console.error(e);
}
try {
  console.log(binaryArrayToNumber([1, 0, -1, 1]));
} catch (e) {
  console.error(e);
}
