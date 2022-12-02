import React from "react";

import Avatar from "../components/Avatar/Avatar";

export default {
  title: "ReactComponentLibrary/Avatar",
  component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: "https://images.unsplash.com/photo-1664575196644-808978af9b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80",
  imageDescription: "description",
};
