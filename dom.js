// const parent = document.querySelector('.parent')
// console.log(parent)

// console.log(parent.children[2].innerHTML) //Important and mostly used -> it returns a NodeList

// Normal for loop can also be used 

// for (let i = 0 ; i < parent.children.length ; i++) {
    // console.log(parent.children[i].innerHTML)
// }

// parent.children[1].style.color = 'orange'
// console.log(parent.firstElementChild) // This returns the first HTML element!!
// console.log(parent.lastElementChild) // THis returns the alst HTML element!!

// const dayOne = document.querySelector('.day')
// console.log(dayOne) //Returns the first element of the class
// console.log(dayOne.parentElement) // Returns the parent element only
// console.log(dayOne.nextElementSibling) // Returns the next day 

// console.log("NODES : ", parent.childNodes) // Returns the whole tree structure which every things are considered 

// <------------- Creating our own element by JavaScript-------------------------->

// const div = document.createElement('div')
// console.log(div)
// div.className = 'main'
// div.id = Math.round(Math.random() * 10 + 1) 
// div.setAttribute("title" , "generated-title")
// div.style.backgroundColor = "green"
// div.style.padding = "10px"
// div.innerText = "I am coding and working hard guys!!" //This is not efficient way of writing code
// const addText = document.createTextNode("I am coding and working hard guys!!")
// div.appendChild(addText)

// To add the above information into the document we use

// document.body.appendChild(div)

// <------------- Editing and Remove element-------------------------->

// function languageAdd(langName) {
    // const li = document.createElement('li')
    // li.innerHTML = `${langName}`
    // document.querySelector('.language').appendChild(li)
//  }
// languageAdd("Python");
// languageAdd("TypeScript");

// The above code is not Optimal is so usually don't use or code like the above onces

function addLanguage(langName) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.language').appendChild(li)
}
addLanguage("Python");    
addLanguage("TypeScript");

// Edit
const secondLang = document.querySelector('li:nth-child(2)')
const newLi = document.createElement('li')
newLi.textContent = "Java"
secondLang.replaceWith(newLi)

// Remove
const firstLang = document.querySelector('li:first-child')
firstLang.remove()