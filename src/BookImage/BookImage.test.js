import React from "react";
import { render } from "@testing-library/react";
import BookImage from "./BookImage.jsx";

it("renders the BookCoverImage component correctly", () => {
  const url="https://www.penguin.co.uk/content/dam/prh/books/183/183689/9780141199078.jpg.transform/PRHDesktopWide_small/image.jpg";

  const { container } = render(<BookImage url={url} />);
  expect(container).toMatchSnapshot();
});
