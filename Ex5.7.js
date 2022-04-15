// Ex5.7 - shortest words
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  let arr = s.split(' ').sort((a, b) => a.length - b.length);
  return arr[0].length;
}

//Assuming String will never be empty and do not need to account for different data types.
console.log(findShort('samer taha abuahmed'));
