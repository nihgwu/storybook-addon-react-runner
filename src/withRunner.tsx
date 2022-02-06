import React from "react";
import { StoryFn, StoryContext, useState, useChannel } from "@storybook/addons";

import { Preview } from "./components/Preview";
import { EVENTS, PARAM_KEY, SOURCE_KEY } from "./constants";
import { Options, StorySource } from "./types";

export const withRunner = (storyFn: StoryFn, context: StoryContext) => {
  const [code, setCode] = useState(
    (context.parameters[SOURCE_KEY] as StorySource).source
  );
  useChannel({
    [EVENTS.SET_CODE]: setCode,
  });

  const options: Options = context.parameters[PARAM_KEY];
  if (options.disabled) {
    // @ts-expect-error
    return storyFn(context);
  }

  return <Preview code={code} scope={options.scope} />;
};
