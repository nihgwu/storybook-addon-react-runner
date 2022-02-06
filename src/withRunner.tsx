import React from "react";
import {
  makeDecorator,
  useChannel,
  useState,
  useMemo,
} from "@storybook/addons";

import { Preview } from "./components/Preview";
import { EVENTS, PARAM_KEY, SOURCE_KEY } from "./constants";
import { Options, StorySource } from "./types";

export const withRunner = makeDecorator({
  name: "withRunner",
  parameterName: PARAM_KEY,
  wrapper: (storyFn, context) => {
    const storySource: StorySource = context.parameters[SOURCE_KEY];
    const options: Options = context.parameters[PARAM_KEY] || {};

    const [code, setCode] = useState(storySource?.source || "");
    useChannel({
      [EVENTS.SET_CODE]: setCode,
    });

    const hasArgs = code.startsWith("(args)");
    const scope = useMemo(() => {
      if (!hasArgs) return options.scope;
      return { ...options.scope, args: context.args };
    }, [options.scope, context.args, hasArgs]);

    if (options.disable || !storySource) {
      return storyFn(context);
    }

    const preview = (
      <Preview
        code={hasArgs ? code.replace(/^\(args\)/, "()") : code}
        scope={scope}
      />
    );

    const Wrapper = options.wrapper;
    if (Wrapper) return <Wrapper>{preview}</Wrapper>;
    return preview;
  },
});
