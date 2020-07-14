import React, { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("");
  function handleChange(event) {
    setUserInput(event.target.value);
  }
  function handleClick() {
    //   setList({ ...list, userInput });
    setList(prevItems => {
      return [...prevItems, userInput];
    });
    setUserInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} value={userInput} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map(todoItem => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
