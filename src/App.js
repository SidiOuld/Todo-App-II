import React from "react";
import "./App.css";

import NavBar from "./Components/NavBar";
import TodoList from "./Components/TodoList";
import { TodoProvider } from "./TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <NavBar />
        <TodoList />
      </TodoProvider>
    </div>
  );
}

export default App;
