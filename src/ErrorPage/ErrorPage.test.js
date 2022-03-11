import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "./ErrorPage.jsx";

it("renders the PageNotFound component correctly", () => {
  const { container } = render(<ErrorPage />);
  expect(container).toMatchSnapshot();
});
