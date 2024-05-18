
//const tinderuser =new Object(); // singleton object
const tinderuser={}; // Non-singleton object

tinderuser.id="123fgh"
tinderuser.name="Sammy"
tinderuser.isLoggedIn=false

 console.log(tinderuser); // {}

const regularuser={
    email:"arpit@gmail.com",
    fullname:{
        userFullname:{
            firstName:"Arpit",
            lastName:"Sharma"
        }
    }
}

console.log(regularuser.fullname.userFullname.firstName); // Arpit

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj5=Object.assign(obj1,obj2)
const obj4=Object.assign({}, obj1, obj2)

const obj3={...obj1,...obj2}
console.log(obj3) // {1: "a", 2: "b", 3: "a", 4: "b"}

const users = [
    {
        id:1,
        email:"arpit@gmail.com"
    },
    {
        id:2,
        email:"arpit@gmail.com" 
    },
    {
        id:3,
        email:"arpit@gmail.com"
    }
]

console.log(users[1])  // {id: 2, email: "arpit@gmail.com"}
console.log(users[1].email)   // arpit@gmail.com

console.log(Object.keys(tinderuser)) // create an array of keys
console.log(Object.values(tinderuser)) // create an array of values
console.log(Object.entries(tinderuser)) // create an array of arrays

console.log(tinderuser.hasOwnProperty("isLoggedIn")) // true
