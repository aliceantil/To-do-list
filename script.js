// script.js
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    
    if (taskInput.value !== '') {
      const li = document.createElement('li');
      li.innerText = taskInput.value;
      taskList.appendChild(li);
      taskInput.value = '';
      
      li.onclick = function() {
        this.parentNode.removeChild(this);
      };
    } else {
      alert('Please enter a task!');
    }
  }
  