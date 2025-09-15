const reverseString = function(string) {
    let output = ""
    const length = string.length - 1
    
    for (let i = length; i >= 0; i--) { output += string[i] }
    
    return output
};

// Do not edit below this line
module.exports = reverseString;
