import { Button } from "../stories/Button";

export const decorators = [
  (Story) => (
    <div style={{ padding: "3em", background: "lightgray" }}>
      <Story />
    </div>
  ),
];

export const parameters = {
  reactRunner: {
    scope: {
      Button,
    },
  },
};
