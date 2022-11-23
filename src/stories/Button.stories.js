import React from "react";

import Button from "../components/Button/Button";

export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  colorLabel: "#FFFFFF",
  background: "#00d4ff",
  label: "Click to win",
}
