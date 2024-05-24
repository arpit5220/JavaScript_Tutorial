
const course ={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"Arpit Katiyar"
}


// object destructuring
const {courseInstructor : instructor} = course

console.log(courseInstructor) // Arpit Katiyar
console.log(instructor) // Arpit Katiyar