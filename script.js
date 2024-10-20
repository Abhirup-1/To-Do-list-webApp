const addbtn = document.getElementById('addbtn');
const removebtn = document.getElementById('removebtn');
const result = document.querySelector('.result');
const initMessage = document.querySelector('.initMessage');
const taskList = document.querySelector('.taskList');

let task = null;

// add button function
addbtn.addEventListener('click',function(){
    console.log("add button is clicked");
    task = prompt("Enter your task: ");

    if(task){
        initMessage.innerHTML = " ";
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }

})

//remove button function
removebtn.addEventListener('click',function(){
    console.log("remove button is clicked");
    if(taskList.children.length === 0){
        initMessage.innerHTML = " ";
        result.innerHTML = "<h1> No task to remove. </h1>"; 

        setTimeout(() => {
            result.innerHTML = " ";
            initMessage.innerHTML = `<h1 class="text-lg font-bold font-mono">Welcome To your To-do-list</h1>
            <div class="initInstructions
            h-28 justify-center items-center my-4">
                <h3>Click + to add to your list</h3>
                <h3>Click - to remove from your list</h3>
            </div>`
        }, 2000);
    }
    else{
        const taskNo = parseInt(prompt("Which number of task you want to remove?"));
        const taskRemove = taskList.children[taskNo - 1]
        if(taskNo > taskList.children.length){
            result.innerHTML = "<h1> Invalid task number. </h1>";

            setTimeout(() => {
                result.innerHTML = " ";


                initMessage.innerHTML = " ";
            }, 2000);

            
        }
        else{
          taskList.removeChild(taskRemove);  
        }
    }
})
