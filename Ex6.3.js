// Ex6.3 - organize strings

// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the
// longest possible, containing distinct letters,

// each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('');

a = 'xyaabbbccccdefww';
b = 'xxxxyyyyabklmopq';
console.log(longest(a, b)); //-> "abcdefklmopqwxy"

a = 'abcdefghijklmnopqrstuvwxyz';
console.log(longest(a, a)); // -> "abcdefghijklmnopqrstuvwxyz"
