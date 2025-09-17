const ONE = 1
const FIVE = 5
const NINE = 9
const THIRTY_TWO = 32

// returns formatted decimals & whole numbers
function formatted(n) {
    if (Number.isInteger(n)) {
        return n
    } else {
        return Number.parseFloat(n.toFixed(ONE))
    }
}

// c=(350-32)*5/9
const convertToCelsius = function(n) {
    return formatted((n-THIRTY_TWO) * FIVE/NINE)
};

// f=(0*9/5)+32
const convertToFahrenheit = function(n) {
    return formatted((n*NINE/FIVE) + THIRTY_TWO)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
