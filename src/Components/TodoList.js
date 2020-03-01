import React, { useState } from "react";
import Todo from "./ToDo";

const items = [];
let TodoList = () => {
  const [state, setState] = useState("");
  const [list, setList] = useState(items);

  let handlechange = e => {
    setState(e.target.value);
  };

  let addItem = e => {
    if (state) {
      setList(list.concat(state));
    }
    e.preventDefault();
    console.log(list);
  };

  let toggleTodo = () => {
    console.log("Sachin is here");
  };
  return (
    <div>
      <form onSubmit={addItem}>
        <input type="text" onChange={handlechange} />
        <button>Change Input</button>
      </form>
      <ul>
        {list.map(item => (
          <Todo text={item} onClick={() => toggleTodo()} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
