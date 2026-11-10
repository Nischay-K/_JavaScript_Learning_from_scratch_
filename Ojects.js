
// How to declare and access the Symbol datatypes
const mySym = Symbol("myKey")


// Oject Literals
const JsUser  = {
    age : 20,
    [mySym] : "myKey1",    // Syntax of the symbol that can be accessed
    IsLoggedIn : false,
    name : "Abhi",
    "full name" : "Abhi Kumar",
    PrevLogged : ["Monday" , "Wednesday" , "Thursday"],
    email : "nischay@google.com"
}

// console.log(JsUser.age) // Not incorrectly but avoid using this method but majority this is used 
// console.log(JsUser["name"]) // Correct Method for accessing the Objects -> interview prep
// console.log(typeof JsUser[mySym]) // This is not accessed as a symbol of we change the syntax of the symbols
// console.log(JsUser[mySym]) 

JsUser.email =  "nischaymicrosoft.com"
// console.log(JsUser)
// Object.freeze(JsUser)
JsUser.email = "nischaychatgpt.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS User!!!")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User , ${this.name}`)
}

// console.log(JsUser.greeting) // This returns the reference of the function but the function is not executed!!
// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())


// const tinderUser = new Object() // SIngleton Object
// console.log(tinderUser)

const tinderUser = {} // Non-Singleton Object
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLogged = false

// console.log(tinderUser)

// Object inside another object or it is also called as Nesting Objects!!

const regularUser = {
    email : "someone@gmail.com",
    fullname : {
        username : {
            firstName : "Abhi",
            lastName : "Kumar"
        }
    }
}

// console.log(regularUser.fullname?.username.lastName) // If the fullname does not exist then this is used durimg the API call and such stuffs


// COmbining the two or more objects together
const Obj1 = {1 : "a" , 2 : "b" , 3 : "c"}
const Obj2 = {4 : "d" , 5 : "e" , 6 : "f"}

// const Obj3 = {Obj1 , Obj2}
// console.log(Obj3) // This creates a problem that is it creates an object inside an object that we don't need!!

// const Obj3 = Object.assign(Obj1 , Obj2) OR it can also be assigned as

// const Obj3 = Object.assign({} , Obj1 , Obj2) // Both are the same things {} -> target and Obj1, Obj2,..... -> source
// console.log(Obj3)

// const Obj3 = {...Obj1 , ...Obj2} //90% times this method will be used!!
// console.log(Obj3)


// console.log(Object.keys(tinderUser)) // This is used especially in the part of the database!!
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// 
// console.log(tinderUser.hasOwnProperty('isLogged'))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//Destructing
const course = {
    courseName : "JavaScript",
    coursePrice : 999,
    courseInstructor : "Hitesh"
}


// {..something} -> is way of destructing that is very useful during the React props!!
// Rather than writing everytime about courseName , courseInstructor etc... we can go with 
const {courseInstructor : instructor} = course // Here we can rename the key also!!
console.log(instructor)

// API can be in the form of JSON(Objects) or array of Objects and these can be studied further!!