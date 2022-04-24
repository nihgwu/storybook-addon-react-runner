import React, { SyntheticEvent } from "react";
import { addons } from "@storybook/addons";
import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { EVENTS, PARAM_KEY, SOURCE_KEY } from "./constants";
import { CodeEditor } from "./components/CodeEditor";

import { Options, StorySource } from "./types";

const handleChange = (code: string) => {
  let encodeSource = btoa(code);
  window.location.hash = encodeSource;
  addons.getChannel().emit(EVENTS.SET_CODE, code);
};

const stopPropagation = (event: SyntheticEvent) => event.stopPropagation();

type PanelProps = {
  key: string;
  active: boolean;
};

export const Panel = (props: PanelProps) => {
  let source = useParameter<StorySource | undefined>(SOURCE_KEY)?.source || "";
  const options = useParameter<Options | undefined>(PARAM_KEY);
  let fromHash = window.location.hash.split("#")[1];
  if (fromHash && fromHash.length > 0) {
    let decodeSource = atob(fromHash);
    source = decodeSource;
    addons.getChannel().emit(EVENTS.SET_CODE, source);
  }
  return (
    <AddonPanel {...props}>
      {!!source && (
        <CodeEditor
          key={source}
          theme={options?.theme}
          language={options?.language}
          readOnly={options?.readOnly}
          padding="1rem"
          defaultValue={source}
          onChange={handleChange}
          // prevent sidebar stories navigation
          onKeyDown={stopPropagation}
        />
      )}
    </AddonPanel>
  );
};
