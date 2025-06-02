
import React, { useState } from "react";
import './App.css';  
function App() {
  const [input, setinput] = useState("");
  const [todolist, settodolist] = useState([]);

  const handleAdd = () => {
    if (input.trim() !== "") {
      const newTask = { id: Date.now(), text: input };
      settodolist([...todolist, newTask]);
      setinput("");
    }
  };

  const Delete = (id) => {
    const updatedList = todolist.filter((task) => task.id !== id);
    settodolist(updatedList);
  };

  const edit = (index) => {
    const newText = prompt("Edit your task:", todolist[index].text);
    if (newText && newText.trim() !== "") {
      const updatedList = [...todolist];
      updatedList[index].text = newText;
      settodolist(updatedList);
    }
  };

  return (
    <div className="container">
      <h2 className="class1">Simple Todo List</h2>
      <div className="class2">
        <input
          className="input"
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button className="class3" onClick={handleAdd}>Add</button>
      </div>
      <ul className="class4">
        {todolist.map((task, index) => (
          <li className="class5" key={task.id}>
            <span className="class6">{task.text}</span>
            <div className="actions">
              <button className="edit" onClick={() => edit(index)}>Edit</button>
              <button className="delete" onClick={() => Delete(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
