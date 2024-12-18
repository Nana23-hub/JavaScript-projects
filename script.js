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
 const common = textInput.match(/\w+/g) || []


 wordCounts.textContent = words.length
 charCounts.textContent  = textInput.length
 sentCounts.textContent = sentense.length
 commonCounnts.textContent = common.length
//  document.getElementById("textInput").value=""

 
 //console.log(words.lenght);
 // regex /[.!?]+/g

 
 
})
