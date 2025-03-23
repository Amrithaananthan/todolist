import { useState } from 'react';
import './App.css';

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Function to handle task addition
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask(""); // Clear input field
    }
  };

  // Function to handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") addTask();
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <div className="input-container">
        <input 
          type="text" 
          value={task}
          onChange={(e) => setTask(e.target.value)} 
          onKeyDown={handleKeyPress} 
          placeholder="Enter task here..."
        />
        <button onClick={addTask} className="add-btn">➕ Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <span>{task.text}</span>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
