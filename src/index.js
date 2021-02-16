document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //grabbing field elements from the form
  const main = document.querySelector("#main-content")
    console.log(main)
  
  const taskForm = document.getElementById("create-task-form");
    console.log(taskForm)
      // new submitted task list will live here
  const taskList = document.querySelector("#tasks")

       //event listener for the submit
    taskForm.addEventListener("submit", function(e) {
      e.preventDefault()
    
    //add user input
  const newTaskDescription = document.querySelector("#new-task-description").value
    //show the new tasks that user inputted on the DOM
  const tasksItem = document.createElement("li")
     
  taskList.innerHTML += `<li> ${newTaskDescription} </li>`
  
  taskForm.reset()
    })
  }); 
