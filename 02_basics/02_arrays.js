
const heros = ["shakti","superman","batman"];
const hero=["spider","ironman","thor"];

 heros.push(hero);
const newarr=heros.concat(hero);


console.log(heros);
console.log(newarr);

const allheros = [...heros, ...hero] // Spread operator
console.log(allheros) // [ 'shakti', 'superman', 'batman', 'spider', 'ironman', 'thor' ]

const arr=[1,2,3,[4,5,6],7,[7,8]]
const flatarr=arr.flat(Infinity);
console.log(flatarr); // [ 1, 2, 3, 4, 5, 6, 7, 7, 8 ]

console.log(Array.from("Arpit"))
console.log(Array.from({name:"Arpit"})) // []  interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]





