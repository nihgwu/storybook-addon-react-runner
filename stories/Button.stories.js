import React from "react";

import { Button } from "./Button";
import ButtonStory from "./Button.story";
import ButtonStorySource from "!!raw-loader!./Button.story";

const decorators = [
  (Story) => (
    <div style={{ padding: "3em", background: "gray" }}>
      <Story />
    </div>
  ),
  (Story) => (
    <div style={{ padding: "3em", background: "darkgray" }}>
      <Story />
    </div>
  ),
];

export default {
  title: "Example/Button",
  component: Button,
  decorators,
  parameters: {
    reactRunner: {
      wrapper: ({ children }) => (
        <div style={{ padding: "3em", background: "gray" }}>
          {children}
        </div>
      ),
    },
  },
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
  label: "Args (readOnnly)",
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

export const Source = {
  parameters: {
    storySource: {
      source: `<Button label="Source code" />`,
    },
  },
};

export const Complex = ButtonStory;
Complex.parameters = {
  storySource: {
    source: ButtonStorySource,
  },
  reactRunner: {
    scope: {
      import: {
        react: React,
        "./Button": { Button },
      },
    },
  },
};
