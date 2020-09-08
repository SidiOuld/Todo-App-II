import React, { useState, useContext } from "react";

// import { TodoContext } from "../TodoContext";

export default function NavBar(props) {
  const [menu, setMenu] = useState(false);
  //commenting useContext out to test using Jest
  // const [todos, setTodos] = useContext(TodoContext);
  const [value, setValue] = useState("");
  const { todos, setTodos } = props;

  const addTodo = (e) => {
    if (value !== "") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          value: value,
          done: false,
        },
      ]);
    }
  };

  const handleSubmit = (e) => {
    addTodo();
    e.preventDefault();
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="navbar has-shadow">
      <div className="navbar-brand">
        <div className="navbar-item">
          <p className="title">My-Todo</p>
        </div>

        <a
          role="button"
          onClick={() => setMenu(!menu)}
          className={`navbar-burger burger ${menu ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          href
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${menu ? "is-active" : ""}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <form onSubmit={handleSubmit} className="field has-addons">
              <p className="control is-expanded">
                <input
                  value={value}
                  type="text"
                  onChange={handleChange}
                  className="input"
                />
              </p>
              <p className="control">
                <button className="button is-info has-text-weight-bold">
                  Add-Todo
                </button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
