import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("render the Button component", () => {
    render(
      <Button
        label="add something"
        background="#e16b31"
        colorLabel="#FFFFFF"
        onClick={undefined}
      />
    );
  });
});
