import React from "react";
import { render } from "@testing-library/react";

import Dialog from "./Dialog";

describe("Dialog", () => {
  test("render the Dialog component", () => {
    render(
      <Dialog
        buttonTitle={"button title"}
        dialogTitle={"dialog title"}
        dialogDescription={"dialog description"}
        buttonCloseTitle={"button close title"}
      />
    );
  });
});
