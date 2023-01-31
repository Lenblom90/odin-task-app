import { useState } from "react";
import Overview from "./components/Overview";

function App() {
  const [tasks,setTasks] = useState([]);

  const addTask = () => {
    const task = {
      id: crypto.randomUUID(),
      title: document.getElementById("task").value
    }
    setTasks([...tasks, task]);
  }
  
  const deleteTask = (e) => {
    setTasks(tasks.filter(x => x.id !== e.target.id))
  }

  const editTask = (e) => {
    let task = tasks.filter(x => x.id === e.target.attributes.itemid.value);
    task.title = document.getElementById('editField').value;
    setTasks();    
  }

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <label htmlFor="task">Enter new Task</label>
        <input id="task"/>
        <button onClick={addTask}>Submit</button>
      </div>
      <Overview tasks={tasks} handleDelete={deleteTask} handleEdit={editTask}/>
    </div>
  )
}

export default App;
