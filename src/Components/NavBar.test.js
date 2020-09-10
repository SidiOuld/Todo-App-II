import React from "react";
import NavBar from "./NavBar";
import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
afterEach(cleanup);

describe("<NavBar/>", () => {
  it("it renders without crashing", () => {
    render(<NavBar />);
  });
  it("My-Todo and Add-Todo texts", () => {
    const { getByText, queryByText } = render(<NavBar />);

    //testing for my-todo and add-text present
    const title = getByText(/My-Todo/i);
    const addTodoBtn = getByText(/add-todo/i);

    //testing for className tittle on the para My-Todo
    expect(title.className).toMatch("title");
    //testing for className button on addTodoBtn
    expect(addTodoBtn.className).toMatch("button");

    //checking to make sure I dont have an incorrect text
    expect(queryByText(/doto/i)).toBe(null);
  });
});
