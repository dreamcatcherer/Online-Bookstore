import React from "react";
import { render } from "@testing-library/react";
import ThankYou from "./ThankYou.jsx";

it("renders the ThankYou component correctly", () => {
  const { container } = render(<ThankYou />);
  expect(container).toMatchSnapshot();
});
