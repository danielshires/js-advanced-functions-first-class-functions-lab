// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]

const fareDoubler = num => {
    return num * 2
}

const fareTripler = num => {
    return num * 3
}

const fareQuintupler = num => {
    return num * 5
}

function createFareMultiplier(fareDoubler) {
    return function() {
        fareDoubler()
        fareTripler()
    }
}

function selectDifferentDrivers(array, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array)
}

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
console.log(createFareMultiplier())