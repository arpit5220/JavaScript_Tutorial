
function sayMyName()
{
    console.log("h");
}

sayMyName(); // h 


function addTwoNumbers(num1,num2){
   // console.log(num1+num2);
   return num1+num2;
}

addTwoNumbers(2,3); // 5
const result = addTwoNumbers(2,"4"); // 24
console.log(result); // undefined

function loginUserMessage(username){
    return `${username} is logged in`;
}

console.log(loginUserMessage()); // undefined is logged in

const val=loginUserMessage("John");
console.log(val); // John is logged in


function calculateCartprice(...num1){  // rest operator
    return num1;
}

console.log(calculateCartprice(200,300,500));

const user = {
      username:"hitesh",
      price:133
}

function handleObject(anyobject){
     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user); // Username is hitesh and price is 133

addTwo(6); // cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num+2;
}

console.log(addTwo(5)); // 7


console.log(addThree(6)); // 7
function addThree(num){
    return num+1;
}
