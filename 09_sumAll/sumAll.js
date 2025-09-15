const sumAll = function(num1, num2) {
    const ZERO = 0
    let output = ""
    // check if numbers are negative values
    if (num1 < ZERO || num2 < ZERO) output = "ERROR"
    // check if numbers are NOT Integers
    else if (!Number.isInteger(num1) || 
            !Number.isInteger(num2)) output = "ERROR"
    // calculate sum for numbers in between values
    else {
        // assign min & max values
        let max = (num2 > num1) ? num2 : num1
        let min = (num2 == max) ? num1 : num2
        // calculate sum
        let sum = ZERO
        for (let i = min; i <= max; i++) {
            sum += i
        }
        output = sum
    }
    return output
};

// Do not edit below this line
module.exports = sumAll;
