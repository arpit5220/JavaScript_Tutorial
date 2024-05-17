
 const array =[0,1,2,3,4];

 const arr2 = new Array(1,2,3,4,5);
 console.log(arr2);

//  Array Methods

arr2.push(6);
console.log(arr2); // [1,2,3,4,5,6]

arr2.pop();
console.log(arr2); // [1,2,3,4,5]

arr2.unshift(0);
console.log(arr2); // [0,1,2,3,4,5]


arr2.shift()
console.log(arr2); // [1,2,3,4,5]

console.log(arr2.includes(3));  // true

const newarr=arr2.join();
console.log(newarr); // 1,2,3,4,5
console.log(typeof newarr);  // string


// slice , splice

console.log("A",arr2) // [1,2,3,4,5]

const ar=arr2.slice(1,3);

console.log("B",ar) // [2,3]

const myarr2=arr2.splice(1,3);  // Manupulate the original array
console.log("C",myarr2) // [2,3,4]
console.log(arr2); // [1,5]




