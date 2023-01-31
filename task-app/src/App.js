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

  return (
    <div>
      <h1>Tasks</h1>
      <div>
        <label htmlFor="task">Enter new Task</label>
        <input id="task"/>
        <button onClick={addTask}>Submit</button>
      </div>
      <Overview tasks={tasks}/>
    </div>
  )
}

export default App;
