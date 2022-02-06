import React from "react";
import { addons } from "@storybook/addons";
import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { EVENTS, PARAM_KEY, SOURCE_KEY } from "./constants";
import { CodeEditor } from "./components/CodeEditor";

import { Options, StorySource } from "./types";

const handleChange = (code: string) => {
  addons.getChannel().emit(EVENTS.SET_CODE, code);
};

type PanelProps = {
  key: string;
  active: boolean;
};

export const Panel = (props: PanelProps) => {
  const source =
    useParameter<StorySource | undefined>(SOURCE_KEY)?.source || "";
  const options = useParameter<Options | undefined>(PARAM_KEY);

  return (
    <AddonPanel {...props}>
      {!!source && (
        <CodeEditor
          key={source}
          theme={options?.theme}
          language={options?.language}
          readOnly={options?.readOnly}
          // @ts-expect-error
          padding="1rem"
          defaultValue={source}
          onChange={handleChange}
        />
      )}
    </AddonPanel>
  );
};
