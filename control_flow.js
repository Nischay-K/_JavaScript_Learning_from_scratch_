// const score = 200
// 
// if (score > 100) {
    // let power = "fly"
    // console.log(`Power: ${power}`);
// }
// console.log(`Power: ${power}`); // This gives an error as the scope of power is within that block scope only and cannot be accessed outside

const score = 200                  
                                   
                                   
// if (score > 100) {                 //We need to avoid the use of var in JavaScript!!
    // var power = "fly"              
    // console.log(`Power: ${power}`);
// }                                  
// console.log(`Power: ${power}`); 


// There are called as the implicit code and this is immature or they don't recommend to write such code in any company so we avoid these type of things!!!

// const balance = 1000
// 
// if (balance > 500) console.log("test") , console.log("test2");

// we can use if, if-else , nested if-else, AND(&&) and OR(||) Operator when we need to check the conditions

// <, >, <=, >=, !=, =, ==, ===(Checks the typeof the variable also -> also called as strict operator), !==(Negative Operator)

// --------------------SWITCH-------------------

// const month = 100

// switch(month) {
    // case 1:
        // console.log("January");
        // break;
    // case 2:                    
    //    console.log("February");
        // break;   
    // case 3:                    
        // console.log("March");    
        // break;
    // case 4:                                     
        // console.log("April");
        // break;
    // case 5:                    
        // console.log("May");
        // break;                 
    // case 6:                       
        // console.log("June");    
        // break;  
    // case 7:                    
        // console.log("July");    
        // break;                 
    // case 8:                    
        // console.log("August");
        // break;  
    // case 9:                      
        // console.log("September");    
        // break;
    // case 10:                                     
        // console.log("October");
        // break; 
    // case 11:                        
        // console.log("November");
        // break;
    // case 12:                    
        // console.log("December");    
        // break; 
    // default:
        // console.log("Please enter a valid month number!!!");
        // break;    
// }

//-----truthy and falsy values!!-------
// Here a string value is assumed as true otherwise it is false("")
// const userEmail = "nischay@gmail.com"

// if (userEmail) {
    // console.log("Got user email!!");
// } else {
    // console.log("Don't have user email!!!");
// }


// const userEmail = ""       
                                            // 
                                            // 
// if (userEmail) {                            
    // console.log("Got user email!!");        
// } else {                                    
    // console.log("Don't have user email!!!");
// }                                           

const userEmail = []       
                                            
                                            
if (userEmail) {                            
    console.log("Got user email!!");        
} else {                                    
    console.log("Don't have user email!!!");
}    

// Falsy Values : false, 0, -0, BigInt(0n), "", null, undefined, NaN
//Truthy values : true, 1, "0" , "false", " ", [], {}, function(){}

//To detect array or object is empty

// if(userEmail.length === 0) {
    // console.log("Array is empty!!!");
// }

// const objectEmpty = {}

// if (Object.keys(objectEmpty).length === 0) {
    // console.log("Object is empty!!!");
// }

// Nullish Coalescing Operator(??): null undefined 
//Bascially it is used when a null is entered, then it checks its safety!! 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// let var1 = undefined ?? 100


// val1 = null ?? 10 ?? 20
// console.log(val1);

// Terniary Operator
// condition ? true : false 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("more than 80!! ");
;

