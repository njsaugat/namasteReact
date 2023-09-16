import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} data-testid="button">
      {label}
    </button>
  );
};

export default Button;

// -------------------------

import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("Button Component", () => {
  it("renders a button with the provided label", () => {
    const label = "Click me";
    const { getByText } = render(<Button label={label} />);
    const buttonElement = getByText(label);

    expect(buttonElement).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const label = "Click me";
    const onClickMock = jest.fn();
    const { getByTestId } = render(
      <Button label={label} onClick={onClickMock} />
    );
    const buttonElement = getByTestId("button");

    fireEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
