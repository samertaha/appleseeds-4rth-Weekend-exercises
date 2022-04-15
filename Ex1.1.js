// Ex1.1 - Yes or No
// Complete the method that takes a boolean value and return a "Yes" string for  true, or a "No"
// string for false.

const yesNo = (bool) => {
  if (typeof bool != 'boolean') {
    throw 'Error:only boolean arguments are accepted';
  }
  return bool ? 'Yes' : 'No';
};

try {
  console.log(yesNo([]));
} catch (e) {
  console.error(e);
}
// console.log(yesNo(false));
// console.log(yesNo(1 == 2));
// console.log(yesNo(5 > 10));
// console.log(yesNo([]));
// console.log(yesNo(undefined));
