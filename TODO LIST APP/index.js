//add and display task

//select the dom

const taskInput = document.getElementById("taskInput");
const addTask   = document.getElementById("addTask");
const todolist  = document.getElementById("todolist")

document.addEventListener("DOMContentLoaded",getTaskFromStorage)
//button function
addTask.addEventListener("click", ()=>{
    //get the input value
    
    //console.log(taskInput.value)
    const task  = taskInput.value.trim();
    if(task==""){
        alert("cannot input empty field")
    }
    else{
    saveTaskToStorage(task)
    DisplayTasks(task)
    taskInput.value=""
}
});

function DisplayTasks(task){
    const li = document.createElement("li")
    //create button
    const completeBTN = document.createElement("button")
    completeBTN.innerHTML = "✔";
    completeBTN.classList.add("complete-btn")
    


    // delete button
    const deleteBTN = document.createElement("button")
    deleteBTN.innerHTML = "❌";
    deleteBTN.classList.add("delete-btn")


    
    //add delete event
deleteBTN.addEventListener("click",()=>deletetask(li))
//update task
completeBTN.addEventListener('click',()=>completeTask(li))

    li.textContent = task
    
    li.appendChild(completeBTN)
    li.appendChild(deleteBTN)
    todolist.appendChild(li)
}



//save to local storage
//localStorage.setItem("task")
function saveTaskToStorage(task){
    const tasks =JSON.parse(localStorage.getItem("tasks")) || []
    tasks.push(task)
    localStorage.setItem("tasks",JSON.stringify(tasks))

}
// get from local storage
function getTaskFromStorage(){
    const tasks = JSON.parse(localStorage.getItem("tasks")) || []
    // filter task that contain letter a in the list
    //console.log("Item from task",tasks);
    tasks.forEach(task => {
        DisplayTasks(task)
    });
}

// delete task functionality
// function deletetask(taskElement){ 
//     taskElement.remove()
//     removeFromStorage(taskElement.taskContent)
//     console.log(taskElement.textContent);
// }
function deletetask(taskElement){
    const taskText = taskElement.childNodes[0].nodeValue.trim();
    console.log(taskText)
    taskElement.remove();
    removeFromStorage(taskText);
}


// remove from local storage
function removeFromStorage(taskContent){
    const tasks =JSON.parse(localStorage.getItem('tasks')) || [];
  const filteredTasks =  tasks.filter((task) => task !==taskContent);
  localStorage.setItem('tasks', JSON.stringify(filteredTasks));
}

//CompleteTask
function completeTask(taskContent){
    taskContent.classList.toggle("complete")
    console.log("clicked");
    

    
}



    
