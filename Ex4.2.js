// Ex4.2 - Tribonacci -

// Well met with Fibonacci bigger brother, AKA Tribonacci.
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3
// (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I
// won't get to hear non-native Italian speakers trying to pronounce it :(
// So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature),
// we have this sequence:
// [1, 1 ,1, 3, 5, 9, 17, 31, ...]

function tribonacci(signature, n) {
  var trib = signature;
  for (i = 3; i < n; i++) {
    trib.push(trib[i - 1] + trib[i - 2] + trib[i - 3]);
  }
  return trib.slice(0, n);
}

//[1, 1 ,1, 3, 5, 9, 17, 31, ...]
//[0, 0, 1, 1, 2, 4, 7,  13, 24, ...]
//[0, 1, 2, 3, 4, 5, 6,   7,  8, ...] index

console.log(tribonacci([1, 1, 1], 0)); //expected 31
console.log(tribonacci([1, 1, 1], 7)); //expected []
console.log(tribonacci([0, 0, 1], 0)); //expected 31
console.log(tribonacci([0, 0, 1], 7)); //expected []
