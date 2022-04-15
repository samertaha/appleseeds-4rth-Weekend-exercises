// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing. The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;

  return str.replace(regExp, function (match) {
    // it will loop over each match in the string and return one capitalized char instead
    return match.charAt(1).toUpperCase();
  });
}

console.log(toCamelCase('the-stealth-warrior')); // returns "theStealthWarrior"

console.log(toCamelCase('The_Stealth_Warrior')); // returns "TheStealthWarrior"
