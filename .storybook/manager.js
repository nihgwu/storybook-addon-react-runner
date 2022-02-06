import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "React Runner",
    brandUrl: "https://github.com/nihgwu/storybook-addon-react-runner",
    brandImage: null,
  }),
});
