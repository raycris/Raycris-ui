import React from "react";
import { render } from "@testing-library/react";

import AlertDialog from "./AlertDialog";

describe("Alert Dialog", () => {
  test("render the alert dialgo component", () => {
    render(
      <AlertDialog
        buttonLabel="Delete account"
        dialgoDescription="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        saveButtonLabel="Yes, delete account"
        dialgoTitle="Are you absolutely sure?"
        onClick={undefined}
      />
    );
  });
});
