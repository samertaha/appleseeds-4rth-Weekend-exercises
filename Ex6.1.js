// Ex6.1 - Mumbling

// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  return [...s]
    .map((char, index) => char.toUpperCase() + char.toLowerCase().repeat(index))
    .join('-');
}
console.log(accum('abcd')); //-> "A-Bb-Ccc-Dddd"
console.log(accum('RqaEzty')); //-> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('cwAt')); //-> "C-Ww-Aaa-Tttt"

//assuming The parameter of accum is a string which includes only letters from a..z and A..Z.
