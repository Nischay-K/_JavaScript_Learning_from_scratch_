// For Loop 

// for (let i = 0 ; i <= 10 ; i++) {
    // const element = i
    // if (i == 5) {
        // console.log("5 is the best number!!");
    // }
    // console.log(element);
// }

// Nested For Loop

// for (let i = 1 ; i <= 10 ; i++) {
    //  console.log(`Outer loop value: ${i}`);
    // for (let j = 1 ; j <= 10 ; j++) {
        // console.log(`Inner loop value: ${j} and outer loop value: ${i}`);
        // console.log(`${i} * ${j} = ${i*j}`);
    // }   
// }

// Looping the array

// const myArray = [10 , 20 , 56 , 60 , 52 , 20]

// for (let i = 0 ; i < myArray.length ; i++) {
    // const element = myArray[i]
    // console.log(element)
// }

// Break keyword!!

// for (let i = 0 ; i <= 10 ; i++) {             
    // const element = i                         
    // if (i == 5) {                             
        // console.log("5 is the best number!!");
        // break;
    // }                                         
    // console.log(element); //This never gets executed once the break statement is executed!!!             
// }                                             

// Continue Keyword
// for (let i = 0 ; i <= 10 ; i++) {             
    // const element = i                         
    // if (i == 5) {                             
        // console.log("5 is the best number!!");
        // continue;
    // }                                         
    // console.log(element);        //This gets executed after the continue!!             
// }                                             

// While loop 

// let i = 0
// while (i <= 10) {
    // console.log(`Value of i is ${i}`);
    // i = i + 1
// }

// For array

// const myArray = [10 , 2 , 5 , 15 , 25 , 22 , 30 , 32]

// let i = 0

// while (i < myArray.length) {
    // console.log(`Value of array at ${i} is ${myArray[i]}`)
    // i++
// }

// DO WHILE LOOP -> Here first the console is printed then the condition is checked!!

// let score = 11

// do {
    // console.log(`score is ${score}`)
    // score++
// }while(score <= 5);

// Array specific loops 
// High Order Array Loops 
// 1. For of Loop -> Used for ["" , "" , ""] and [{} , {} , {}]

// const arr = [1 , 2 , 3 , 4 , 5]

// for (const num of arr) {
    // console.log(num)
// }

// const greetings = "hello world!!"

// for (const greet of greetings) {
    // if (greet == " ") {
        // continue;
    // }
    // console.log(greet);
// }

// Map -> Is an Object that holds key-value pair and remembers the original insertion order of the keys!!
// Map is iterated using the for---of loop
// Map is known for the unique values that is duplication is not allowed!!
// map.set() -> is used to initialize the values!!

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("Fr" , "France")
// map.set("IN" , "India") -> Duplicates are not allowed here!!

// console.log(map);

// for (const [key , value] of map) {
    // console.log(key, ':-' , value)
// }

// On the Objects
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
    'game3' : 'GTA',
    'game4' : 'God of Wars'
}

// Not iterable using the for-of loops!!
// for (const [key , value] of myObject.keys()) {
    // console.log(key, ':-' , value)
// }

// Here we can use the for-in loop!!
// for (const key in myObject) {
    // console.log(`${key} :- ${myObject[key]}`)
// }

// Using the for-in loop on the array
// const prog = ["JS" , "Java" , "C++" , "C" , "C#" , "PHP"]
// for (const i in prog) {
    // console.log(`${prog[i]} is at the index ${i} in the array!!`)
// }

// for (const key in map) { //There is no possible output for this and there is no error also??
    // console.log(key)
// }


// For Each loop -> This is used very widely
// CallBack function doesnot have nay name 

// 1. Basic stuff!!
// const program = ["JS" , "Java" , "C++" , "C" , "C#" , "PHP"]
// program.forEach(function (item) {
    // console.log(item)
// })

// 2. Arrow Function
// const program = ["JS" , "Java" , "C++" , "C" , "C#" , "PHP"]
// program.forEach((item) => {                           
    // console.log(item)                                       
// })  

// 3. Using a Function as a CallBack!!
// const program = ["JS" , "Java" , "C++" , "C" , "C#" , "PHP"]

// function printMe(item) {
    // console.log(item)
// }                         

// program.forEach(printMe()) // Throws an error like we need to given the reference only and not need to execute
// program.forEach(printMe)

const program = ["JS" , "Java" , "C++" , "C" , "C#" , "PHP"]

// ForEavh can have item, index as well as the arraylist also that the above one which we passed
// And it is the same for the basic(1.) and the function(3.)

// program.forEach((item, index , arr) => {                                 
//   console.log(item, index , arr)                                       
// })             

// We can also use the forEach loop for the type -> [{} , {} , {} , ....] and this extensively used while retriving information from the Database!!!

const myCoding = [
    {
        languageName : "JavaScript",
        languageFileName : "JS"
    },
    {                               
        languageName : "Python",
        languageFileName : "Py"     
    },  
    {                               
        languageName : "Ruby",
        languageFileName : "RB"     
    },    
    {                               
        languageName : "TypeScript",
        languageFileName : "TS"     
    },
    {                               
        languageName : "Golang",
        languageFileName : "GO"     
    }                           
]

// myCoding.forEach( (item) => {
    // console.log(item.languageName)
// })
// 

// Checking what it returns!!
// Here for Ecach doesn't not returns any value
// const value = program.forEach( (item) => {
    // console.log(item)
    // return item
// })

// console.log(value)
// So we can use the filter -> where it return the value!!

const nums = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10]

// const value = num.filter( (num) => num > 4)
// console.log(value[2])

// But there is a in the filter when we map it as a Object!!

// const value = num.filter( (num) => {
    // return num > 4  // {} -> if we use this then we need to return 
// })

// const value = []
// num.forEach( (num) => {
    // if (num > 4) {
        // value.push(num)
    // }
// })
// console.log(value)

// const code = myCoding.filter( (c) => {
    // return c.languageName === 'Python' || c.languageFileName === "JS"
// })
// console.log(code)

// map -> returns the value automatically
// map chaining can also be used -> it is the method after method

// const value = nums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num > 40)

// console.log(value)

// Reduce -> This method executes user-supplied "reduced" callback function on each element of the array!! 

// const total_value = nums.reduce(function (acc , currval) {
    // return acc + currval
// }, 0)

const total_value = nums.reduce( (acc , currval) => {
    console.log(`acc : ${acc} and currval : ${currval}`)
    return acc + currval
}, 0)

console.log(total_value)