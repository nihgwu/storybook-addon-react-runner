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

## Usage

Write your stories in your favourite way or with source code directly

```js
export const Source = {
  parameters: {
    storySource: {
      source: `<Button label="Source code" />`,
    },
  },
};
```

Or even real example with import statement

```js
import ButtonStory from "./Button.story";
import ButtonStorySource from "!!raw-loader!./Button.story";

export const Complex = ButtonStory;
Complex.parameters = {
  storySource: {
    source: ButtonStorySource,
  },
  reactRunner: {
    // you can define your scope in `.storybook/preview.js`
    scope: {
      require: createRequire({
        react: React,
        "./Button": { Button },
      }),
    },
  },
};
```

`Button.story.js`
```js
import { useState } from "react";
import { Button } from "./Button";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>{count}</div>
      <Button label="+" onClick={() => setCount((count) => count + 1)} />
      <Button label="-" onClick={() => setCount((count) => count - 1)} />
    </>
  );
}
```

