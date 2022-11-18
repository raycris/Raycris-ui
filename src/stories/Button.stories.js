import React from "react";

import ButtonComponent from "../components/Requirements/ButtonComponent";

export default {
  title: "Click to win",
  component: ButtonComponent,
};

const Template = (args) => <ButtonComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorLabel: "#FFFFFF",
  background: "#00d4ff",
  label: "Click to win"
}
