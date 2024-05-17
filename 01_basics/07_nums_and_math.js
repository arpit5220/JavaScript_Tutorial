
const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance) // [Number: 100]

console.log(balance.toString().length) // 3
console.log(balance.toFixed(1)) // 100.0

const otherNumber = 12.89

console.log(otherNumber.toPrecision(3)) // 12.9

const hundered =1000000
console.log(hundered.toLocaleString())  // 1,000,000
console.log(hundered.toLocaleString('en-IN')) // 10,00,000


// +++++++++++++++++++++ Maths ++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4)) // 4
console.log(Math.ceil(4.1)) // 5
console.log(Math.floor(4.9)) // 4

console.log(Math.random()) // value between 0 and 1

// Read More About Math libraray nad Math.random function........