const ZERO = 0
const ONE = 1

const add = function(n1, n2) { return n1 + n2 };

const subtract = function(n1, n2) { return n1 - n2 };

const sum = function(array) {
  let n = ZERO
  array.forEach( it => {
    n += it
  });
  return n
};

const multiply = function(array) {
  let n = ONE
  array.forEach( it => {
    n *= it
  });
  return n
};

const power = function(base, exp) { return base**exp };

const factorial = function(f) {
  let n = ONE
	while (f > ZERO) {
    n *= f
    f--
	}
	return n
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
