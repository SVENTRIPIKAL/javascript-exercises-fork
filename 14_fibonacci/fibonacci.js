const ZERO = 0
const ONE = 1

function calcFib(n) {
    let seq = [ONE, ONE]
    let nextInt = seq[ZERO] + seq[ONE]
    for (let i = seq.length; i < n; i = seq.length) {
        let prevInt = seq[i-ONE]
        seq.push(nextInt)
        nextInt += prevInt
    }
    return seq.pop()
}

const fibonacci = function(n) {
    if (Number(n) == NaN || n < ZERO) { return "OOPS" }
    else if (n == ZERO) { return ZERO }
    else { return calcFib(n) }
};

// Do not edit below this line
module.exports = fibonacci;
