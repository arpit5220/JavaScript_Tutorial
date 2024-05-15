
let score="33"

console.log(typeof score) // string
console.log(typeof (score)) // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber) // number


let value="22ab"
console.log(typeof value) // string
let valueInNumber1 = Number(value)
console.log(typeof valueInNumber1) // number
console.log(valueInNumber1) // NaN


let num = null;
console.log(typeof num) // object
let valueInNumber2 = Number(num)
console.log(typeof valueInNumber2) // number
console.log(valueInNumber2) // 0


let value1=undefined
console.log(typeof value1) // undefined
let valueInNumber3 = Number(value1)
console.log(typeof valueInNumber3) // number
console.log(valueInNumber3) // NaN


let value2=true
console.log(typeof value2) // boolean
let valueInNumber4 = Number(value2)
console.log(typeof valueInNumber4) // number
console.log(valueInNumber4) // 1


let isLoggedIn=1
let booleanValue=Boolean(isLoggedIn)
console.log(booleanValue) // true


let isLoggedIn1=" "  // important
let booleanValue1=Boolean(isLoggedIn1)
console.log(booleanValue1) // true



// 1=> true; 0=> false
// "" => false; " " => true
// "arpit"=> true; 


// ***************** Operations ********************

console.log(2**3) // 8

console.log("1" +3) // 13
console.log(1+ "2") // 12
console.log("1" + 2 + 2) // 122
console.log(1 + 2 + "2") // 32