// Ex6.2 - Counting Duplicates

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//The input string can be assumed to
//contain only alphabets (both uppercase and lowercase) and numeric digits.
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split('')
      .sort()
      .join('')
      .match(/([^])\1+/g) || []
  ).length;
}

console.log(duplicateCount('abcde')); //            -> 0 # no characters repeats more than once
console.log(duplicateCount('aabbcde')); //          -> 2 # 'a' and 'b'
console.log(duplicateCount('aabBcde')); //          -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
console.log(duplicateCount('indivisibility')); //   -> 1 # 'i' occurs six times
console.log(duplicateCount('Indivisibilities')); // -> 2 # 'i' occurs seven times and 's' occurs twice
console.log(duplicateCount('aA11')); //             -> 2 # 'a' and '1'
console.log(duplicateCount('ABBA')); //             -> 2 # 'A' and 'B' each occur twice
