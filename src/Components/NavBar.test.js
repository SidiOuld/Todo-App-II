import React from "react";
import NavBar from "./NavBar";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
afterEach(cleanup);

describe("<NavBar/>", () => {
  it("it renders without crashing", () => {
    render(<NavBar />);
  });
  it("My-Todo and Add-Todo texts", () => {
    const { getByText } = render(<NavBar />);

    getByText(/My-Todo/i);
    const addTodoBtn = getByText(/add-todo/i);
  });
});
