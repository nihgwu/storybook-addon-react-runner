# React Runner Storybook Addon

Storybook addon to provide react live preview powered by [react-runner](https://github.com/nihgwu/react-runner), try [live example](https://nihgwu.github.io/storybook-addon-react-runner)

## Install

```bash
# Yarn
yarn add storybook-addon-react-runner

# NPM
npm install --save storybook-addon-react-runner
```

Then add the addon to your configuration in `.storybook/main.js`

```js
module.exports = {
  addons: ["storybook-addon-react-runner"],
};
```

## Configuration

Configure `scope` and more by adding the following to `.storybook/preview.js`

```js
import * as components from "../your-components";

export const parameters = {
  reactRunner: {
    disable, // whether to disable the addon
    scope: {
      ...components,
      ...otherScope,
    },
    language, // defautls to `jsx`, set to `tsx` to support typescript
    theme, // https://github.com/FormidableLabs/prism-react-renderer#theming
    readOnly, // code editor will be readonly if set to `true`
  },
};
```

You can change configuration [based on story or component](https://storybook.js.org/docs/react/writing-stories/parameters)
