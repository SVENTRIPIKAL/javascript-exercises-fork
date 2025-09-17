// extract letters from string
function extractAndJoinLetters(string) {
    const regex = /\w+/g;
    return string.match(regex).join("").toLowerCase()
};
// reverse string
function reverseString(string) {
    let reversed = ""
    for (let i = string.length-1; i >= 0; i--) {
        reversed += string[i]
    }
    return reversed
};
// returns true if string is a palindrome
const palindromes = function (string) {
    let newString = extractAndJoinLetters(string)
    let reversed = reverseString(newString)
    return newString == reversed
};

// Do not edit below this line
module.exports = palindromes;
