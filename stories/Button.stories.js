import React from "react";
import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ padding: "3em", background: "gray" }}>
        <Story />
      </div>
    ),
  ],
};

export const Primary = () => <Button primary label="Button" />;

export const Secondary = () => <Button label="Live edit disabled" />;
Secondary.parameters = {
  reactRunner: {
    disable: true,
  },
};

const Template = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Args bind",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Args (readOnnly",
};
Small.parameters = {
  reactRunner: {
    readOnly: true,
  },
};
Small.decorators = [
  (Story) => (
    <div style={{ padding: "3em", background: "red" }}>
      <Story />
    </div>
  ),
];
