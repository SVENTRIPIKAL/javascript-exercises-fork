const repeatString = function(string, num) {
    const ZERO = 0
    let output = ""
    
    if (num < ZERO) { output += "ERROR" }
    else {
        for (let i = ZERO; i < num; i++) { output += string }
    }
    
    return output
};

// Do not edit below this line
module.exports = repeatString;
