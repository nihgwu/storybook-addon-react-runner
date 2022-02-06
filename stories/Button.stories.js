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
    disabled: true,
  },
};

export const Large = () => <Button size="large" label="Button" />;

export const Small = () => <Button size="small" label="Button" />;
