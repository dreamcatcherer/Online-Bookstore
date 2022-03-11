import React from "react";
import { render } from "@testing-library/react";
import Book from "./Books.jsx";

it("renders the Book component correctly", () => {
  const { container } = render(
    <Book
      categoryId="classics"
      bookId="0001-PrideAndPrejudice"
    />
  );
  expect(container).toMatchSnapshot();
});
