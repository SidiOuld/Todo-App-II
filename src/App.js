import React, { useState } from "react";
import "./App.css";

import NavBar from "./Components/NavBar";
import TodoList from "./Components/TodoList";
//commenting useContext out to test using Jest
// import { TodoProvider } from "./TodoContext";

function App() {
  const [todos, setTodos] = useState([
    {
      id: Date.now(),
      value: "Add Your Todos",
      done: false,
    },
  ]);

  return (
    <div className="App">
      {/* <TodoProvider> */}
      <NavBar todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
      {/* </TodoProvider> */}
    </div>
  );
}

export default App;
