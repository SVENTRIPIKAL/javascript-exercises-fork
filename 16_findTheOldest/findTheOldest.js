const ZERO = 0
const EMPTY = ""

function getPerson(name, age) {
    return { name: name, age }
}

const findTheOldest = function(l) {
    let n = []
    l.forEach(it => {
        let age
        if (it.yearOfDeath == null) {
            age = new Date().getFullYear() - it.yearOfBirth
        } else {
            age = it.yearOfDeath - it.yearOfBirth
        }
        n.push(getPerson(it.name, age))
    })
    let oldest = getPerson(EMPTY, ZERO)
    n.forEach(it => {
        if (it.age > oldest.age) oldest = it
    })
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
