import React from "react";

import AlertDialog from "../components/AlertDialog/AlertDialog";

export default {
  title: "ReactComponentLibrary/AlertDialog",
  component: AlertDialog,
};

const Template = (args) => <AlertDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonLabel: "Delete account",
  saveButtonLabel: "Yes, delete account",
  dialgoTitle: "Are you absolutely sure?",
  dialgoDescription:
    "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
};
