const removeFromArray = function(array, ...varArgs) {
    const ONE = 1
    varArgs.forEach(it => {
        while (array.includes(it)) {
            let index = array.indexOf(it)
            array.splice(index, ONE)
        }
    })
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
