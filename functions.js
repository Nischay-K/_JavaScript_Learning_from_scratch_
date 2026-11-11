function sayName() {
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("Y");
}

// console.log(sayName) // returns the Reference as [Function: sayName]
// sayName() //Used for the execution purpose!!

// function addTwoNumbers(num1 , num2) { // Here num1, num2 -> are the parameters that are declared during the function declaration
    // console.log(num1 + num2); // Because of the console.log()-> there is a problem in the statement 
// }

// The above adding two numbers can be written as -> 1. Method - 1 
function addTwoNumbers(num1 , num2) {                   
    // let result = (num1 + num2);
    // return result
    // console.log("Hitesh"); // Unreachable because of the return statement
    return num1 + num2
     
}                                    
const result = addTwoNumbers(12 , 16) // Here the function calling happens and these values are called as the arguments
// console.log("Result: ",result);


// 1. Type
// function loginUserMessage(username) {
    // return `${username} just logged in!!`
// }
// console.log(loginUserMessage("Nischay"));

// 2. Type
// function loginUserMessage(username){
    // if (username === undefined){
        // console.log("Please enter a valid username!!")
        // return 
    // }
    // return `${username} just logged in !!`
// }
// console.log(loginUserMessage("Nischay"));

// 3. Type -> Majority used in Production code or in React/React Native
function loginUserMessage(username = "Sam"){  //Default Parameter -> when the value is not defined                 
    if (!username){                      
        console.log("Please enter a valid username!!")
        return                                        
    }                                                 
    return `${username} just logged in !!`            
}                                                     
// console.log(loginUserMessage()); // outputs the default parameter values!!
// console.log(loginUserMessage("Nischay")); // Output gets overridden by the name username       

// Rest operator is used when we don't know how many arguments is passed by the user
// It is given by 3dots -> ... and it is similar to spread operator but the working of both of them is different!!

// function calculateCartPrice(...num1) { // The values passed by the user gets converted into array!!!
    // return num1
// }
// 
// console.log(calculateCartPrice(2200 , 200 , 400 , 500 , 2000 , 5200 , 1400));

// function calculateCartPrice1(a , b , c , d ,...num1) { // The values passed by the user gets assigned to the variables and only the remaining is considered into the array 
    // return num1                                                              
// }                                                                            
                                                                          
// console.log(calculateCartPrice1(2200 , 200 , 400 , 500 , 2000 , 5200 , 1400));

// Functions used in an Objects

// const user = {
    // name : "Nischay",
    // price : 2000
// }

// function handleObject(anyobject) { // For any oject
    // console.log(`Name is ${anyobject.name} and the price mentioned is ${anyobject.price}`)
// }
// handleObject(user) OR another method  
// handleObject({
    // name : "Sam" , 
    // price : 399
// })      


// function for the array

const newArray = [120 , 125 , 300 , 250 , 800 , 950 , 1000 , 1500]

function handleArray(getArray) {
    return getArray[5]
}

// console.log(handleArray(newArray))
// console.log(handleArray([120 , 125 , 300 , 250 , 800 , 950 , 1000 , 1500]))     

// Core Scope checked in the console of web page is different from the code environment!!
// And avoid using var because they are not dependent on any scope or such!!

// CLosure : This is where a inner function can access the outer function!!
// function one() {
//     username: "Nischay"

//     function two(){
//         website : "YouTube"
//         console.log(username) // This can access the outer function
//     }
//     // console.log(website) This throws an error as the scope of function two ends above only(within the blocks)

//     two()
// } 

// one()

// THe same happens in the if and else statement -> that is the control flows!!

// There are many ways of declaring a function

// 1. Method -> This type of declaration does not throws an error 

// console.log(addone(5))
// function addone(num) {
    // return num + 1
// }


//2. Method -> This type of declaration throws error so be carefully while using these!!! -> This is also called as hoisting!!!


// addtwo(5) 
// const addtwo = function(num) {
    // return num + 2
// }

// this keyword -> this is used to reference the context

// const user = {
    // username : "Nischay",
    // price : 999,
// 
    // welcomeMessage : function() {
        // console.log(`${this.username}, welcome bhai!!`);
        // console.log(this); // This returns the {} -> empty objects as it is not referring to any thing!!    
    // }
// }

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this);

// const one = funtion() {
    // let username = "Nischay" // Throws an error as the function is not at all declared!!
    // console.log(this.username);  
// }
// 
// one()

//Such case we use the arrow functions
// const one = () => {
    // let username = "Nischay" // Returns any empty object {} 
    // console.log(this.username)
// }
// 
// one()

//Synatx of the arrow funtion () => {}

// Expilicit Return

// const addTwo = (num1 , num2) => {
    // return num1 + num2
// }

// Implicit Return can also be used here and the synatx is down below 
// When {} -> is written then we need to write return and if not braces or () -> this written then no need of return statement
// const addTwo = (num1 , num2) => num1 + num2

// const addTwo = (num1 , num2) => (num1 + num2)


// To return the object 
// const addTwo = (num1 , num2) => ({username: "Nischay"}) // This returns an undefined value to get the correct output we need to add it into the parenthesis()!! 
// console.log(addTwo(6 , 22));


// IIFE -> Immediately Invoked Function Expressions 
// We use IIFE to prevent the pollution form the global scope's variable or any declarations

// function one() { //This a normal usecase of function that don't invokes immediately!!
    // console.log(`DB CONNECTED!!`);
// }
// one()


// (function one() {     //This is named IIFE               
    // console.log(`DB CONNECTED!!`);
// }) ();                              

// Same can be used for the arrow function also but keep in mind that we need to add the semi-colon to end the above function 

// ((name) => {                  
    // console.log(`DB CONNECTED TWO!! ${name}`); //Simple IIFE
// }) ('Nischay')      

// IMPORTANT PART FOR INTERVIEW

// Refer the notes and vedio for more detailed understanding of the same concept!!
                            