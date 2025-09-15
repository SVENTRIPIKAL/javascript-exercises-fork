const leapYears = function(year) {
    const ZERO = 0
    const FOUR = 4
    const ONE_HUNDRED = 100
    const FOUR_HUNDRED = 400
    
    let isLeapYear = false
    
    if (year % FOUR == ZERO && 
        year % ONE_HUNDRED != ZERO) { isLeapYear = true }
    
    else if (year % FOUR_HUNDRED == ZERO) { isLeapYear = true }
    
    return isLeapYear
};

// Do not edit below this line
module.exports = leapYears;
