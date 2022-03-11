import React from "react";
import { render } from "@testing-library/react";
import Categories from "./Categories.jsx";
import { BrowserRouter } from "react-router-dom";

it("renders the Categories component correctly", () => {
  const { container } = render(
    <BrowserRouter>
      <Categories />
    </BrowserRouter>
  );
  expect(container).toMatchSnapshot();
});
