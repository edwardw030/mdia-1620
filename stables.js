let stableName = "Chunky ranch"


let mark = {
    name: "mark",
    age: 6,
    favouriteTreat: "carrots",
    nickname: "markie",
    monthlyRent: 1000,
    isHorseInside: false,
    luckyNumber: 8,
    favouriteToy: "ball",
}

let jack = {
    name: "jack",
    age: 7,
    snack: "lettuce",
    nickname: "jackie",
    monthlyRent: 900,
    isHorseInside: true,
    luckyNumber: 21,
    favouriteToy: "rope"
}

let cy = {
    name: "cy",
    age: 10,
    snack: "apples",
    nickname: "cee",
    monthlyRent: 1100,
    isHorseInside: false,
    luckyNumber: 51,
    favouriteToy: "stuffy"
}

// New Horse
let molly = {
    name: "molly",
    age: 11,
    snack: "icecream",
    nickname: "mol",
    monthlyRent: 1200,
    isHorseInside: true,
    luckyNumber: 88,
    favouriteToy: "paper"
}

// Hungry Property dot notation
mark.isHungry = true
cy.isHungry = true
molly.isHungry = true
jack.isHungry = false

// Array of horses
let horses = ["mark", "jack", "cy", "molly"]

// Total stalls at stable
let totalStalls = 8
// 20% late payment surcharge
//  let latePayment = MONTHLY_RENT * 1.2

function availableStalls(stalls, horses) {
    let availableStalls = stalls - horses
    console.log( "There are " + availableStalls + " stalls available.")
}
availableStalls()

function lateRent(horse, fee) {
    console.log(" $" + horse.monthlyRent * fee + " will be owed if rent is paid late. ");
}
lateRent(mark, 1.2)


function getNickname(horses) {
    return horses.nickname;
}

console.log(getNickname(mark))

// Stable Messages
// let stableMessage = "Welcome to" + stableName + "where cell service is weak and the coffee is strong"
// let lateMessage = ("A reminder that your monthly boarding bill is currently overdue and the amount owing is $" + latePayment + " for " + Jack.name)
