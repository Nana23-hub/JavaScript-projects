const countButton = document.getElementById("countButton")
function loadTextFromLocalStorage(){
    const saveText  = localStorage.getItem("userInput")
    if(saveText){
        document.getElementById("textInput").value=saveText
        console.log("saveText",saveText);
        
    }
}
window.onload = loadTextFromLocalStorage


const text = {textInput}.value
countButton.addEventListener("click",()=>{
    const textInput = document.getElementById("textInput").value
    const wordCounts = document.getElementById("wordCount")
    const charCounts = document.getElementById("charCount")
    const sentCounts = document.getElementById("sentCount")
    const commonCounnts = document.getElementById("commonCount")
    
    //console.log(textInput)
    

// logic
 const words = textInput.match(/\w+('\w+)?/g) || []
 const sentense = textInput.match(/[.!?]+/g) || []
 //const common = textInput.match(/\w+/g) || []


 wordCounts.textContent = words.length
 charCounts.textContent  = textInput.length
 sentCounts.textContent = sentense.length
 //commonCounnts.textContent = common.length
//  document.getElementById("textInput").value=""

 
 //console.log(words.lenght);
 // regex /[.!?]+/g

 //count occurence of each word
// const commonword = words.reduce((accumulator,currentValue)=>{
//     accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
//     return accumulator
// },{})

const wordfrequency = {}
 words.forEach((word) => {
     wordfrequency[word]=(wordfrequency[word] || 0) +1
 
 })
const maxFrequency = Math.max(...Object.values(wordfrequency))
console.log(maxFrequency);


// find the most common word
const commonword = Object.keys(wordfrequency).filter(word=>wordfrequency[word]===maxFrequency)

 
//const commonword = Object.keys(wordfrequency).reduce((accumulator,currentValue)=>
   // wordfrequency[accumulator] > wordfrequency[currentValue] ? accumulator : currentValue,""
//)

commonCounnts.textContent=commonword || "N/A"



})

// var myArray= ["abcd","abc","abcd"]
// //reduce function
// //myArray.reduce(callbackfunction,currentValue,currentIndex,array)

// const number=[1,2,3,4,5,6,7]
// const sum = number.reduce((accumulator,currentValue)=>accumulator+currentValue,0)
// //accumulator=previous value
// //currentValue= current value
// //0= initial value
// console.log(sum)

// const names=['john','peter','peter']
// const nameCount = names.reduce((accumulator,currentValue)=>{
//     accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
//     return accumulator
// },{})
// console.log(nameCount);

