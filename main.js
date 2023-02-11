import './style.css'
/** Write your code below this comment */

// A function that takes in an array of numbers and returns the sum of all the numbers in the array.

// import './style.css'
// /** Write your code below this comment */
// let string = window.prompt("Enter an array")
// const array = string.split(",")
// function sumArray (array) {
//     let sum = 0
//     for (let i=0;i<array.length;i++){
//         sum = sum + Number(array[i])
//     }
//     return sum
// }
// alert(sumArray(array))


// A function that takes in a string and returns the string with all vowels removed.

let str = window.prompt("Enter a string")
const removeVowels = (string)=>{
    const regEx = /[aeiou]/gi
    return string.replace(regEx,"")
}
alert(removeVowels(str))

// Challenge 5

// const form = document.querySelector("#form")
// const i1 = document.querySelector("#num1")
// const i2 = document.querySelector("#num2")
// const result = document.querySelector("#result")


// form.addEventListener("submit",(e)=>{
//     e.preventDefault()
//     if(checkNumber(Number(i1.value))&&checkNumber(Number(i2.value))){
//         result.innerText =(Number(i1.value) + Number(i2.value)).toString()
//     }else{
//         alert("Not a number")
//     }
// })


// function checkNumber (value){
//     if(isNaN(value)){
//         return false
//     }else{
//         return true
//     }
// }