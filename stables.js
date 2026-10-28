let stableName = "Chunky ranch"


let Mark = {
    name: "Mark",
    age: 6,
    favouriteTreat: "carrots",
    nickname: "markie",
    monthlyRent: 1000,
    isHorseInside: false,
    luckyNumber: 8,
    favouriteToy: "ball",
}

let Jack = {
    name: "Jack",
    age: 7,
    snack: "lettuce",
    nickname: "jackie",
    monthlyRent: 900,
    isHorseInside: true,
    luckyNumber: 21,
    favouriteToy: "rope"
}

let Cy = {
    name: "Cy",
    age: 10,
    snack: "apples",
    nickname: "cee",
    monthlyRent: 1100,
    isHorseInside: false,
    luckyNumber: 51,
    favouriteToy: "stuffy"
}

// New Horse
let Molly = {
    name: "Molly",
    age: 11,
    snack: "icecream",
    nickname: "mol",
    monthlyRent: 1200,
    isHorseInside: true,
    luckyNumber: 88,
    favouriteToy: "paper"
}

// Hungry Property dot notation
Mark.isHungry = true
Cy.isHungry = true
Molly.isHungry = true
Jack.isHungry = false

// Array of horses
let horses = ["Mark", "Jack", "Cy", "Molly"]

// Total stalls at stable
let totalStalls = 8
// 20% late payment surcharge
//  let latePayment = MONTHLY_RENT * 1.2

function availableStalls() {
    let availableStalls = totalStalls - horses.length
    console.log(availableStalls)
}

availableStalls()
function lateRent(horse) {
    console.log(horse.monthlyRent * 1.2);
}

lateRent(Mark)

function getNickname(horses) {
    return horses.nickname;
}

console.log(getNickname(Mark))

// Stable Messages
// let stableMessage = "Welcome to" + stableName + "where cell service is weak and the coffee is strong"
// let lateMessage = ("A reminder that your monthly boarding bill is currently overdue and the amount owing is $" + latePayment + " for " + Jack.name)
