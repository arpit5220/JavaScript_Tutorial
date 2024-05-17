
// singleton


// object literal

const mySym =Symbol("key1");

const user={
    name:"Arpit",
    age:37,
    [mySym]:"value"
}

console.log(user.age)
console.log(user["age"])
console.log(user[mySym])

user.name="Anuj";
console.log(user.name)
    // Object.freeze(user)
user.name="Arpan";

console.log(user)
