import React from "react";

import Dialog from "../components/Dialog/Dialog"

export default {
  title: "ReactComponentLibrary/Dialog",
  component: Dialog,
}

const Template = (args) => <Dialog {...args}/>

export const Default = Template.bind({});
Default.args = {
  buttonTitle: "display dialog",
  buttonTitleColor: "#6353B5",
  dialogTitle: "Some title",
  formColor: "#6353B5",
  dialogDescription: "somes descriptions",
  buttonCloseTitle: "close button or save button",
}