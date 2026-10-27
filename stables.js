
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
Mark.hungry= true

let Jack = {
    name: "Jack",
    age: 7,
    snack: "lettuce",
    nickname: "jackie",
    monthlyRent: 900,
    isHorseInside: true ,
    luckyNumber: 21,
    favouriteToy: "rope"
}
Jack.isHungry= false
let Cy = {
    name: "Cy",
    age: 10,
    snack: "apples",
    nickname: "cee",
    monthlyRent: 1100,
    isHorseInside: false ,
    luckyNumber: 51, 
    favouriteToy: "stuffy"
}
Cy.isHungry= true
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
Molly.isHungry= true

let horses= ["Mark", "Jack", "Cy", "Molly"]
let totalStalls= 8

function availableStalls(horses) {
    return totalStalls - horses.length;
}
console.log(availableStalls(horses))

function lateRent(horses) {
    console.log(horses.monthlyRent * 1.2);
}
lateRent(Mark)

function getNickname(horses) {
    return horses.nickname;
}

console.log(getNickname(Molly))

// From Stables 1
// MONTHLY_RENT = 800
// let latePayment = MONTHLY_RENT * 1.2
// let stableName = "Chunky ranch"
// let stableMessage = "Welcome to" + stableName + "where cell service is weak and the coffee is strong"
// let lateMessage = ("A reminder that your monthly boarding bill is currently overdue and the amount owing is $" + latePayment + " for " + Jack.name)

// console.log(lateMessage)

