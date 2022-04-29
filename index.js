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

const fareMultiplier = num => {
    return num * 2
}

// const fareMultiplier = createFareMultiplier(2);

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

let fareQuintuplerTwo = createFareMultiplier(5)

let fareQuintuplerThree = (fare, multipler) => {
    return fare * multipler
}

fareQuintuplerThree(5, 10)

console.log(fareQuintuplerTwo(10))

function selectDifferentDrivers(array, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array)
}

// console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
// console.log(createFareMultiplier())