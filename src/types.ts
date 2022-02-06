import { Scope } from "react-runner";
import { Theme, Language } from "react-live-runner";
import { Meta } from "@storybook/react";

export type Options = {
  disable?: boolean;
  scope?: Scope;
  theme?: Theme;
  language?: Language;
  readOnly?: boolean;
  decorators?: Meta["decorators"];
};

export type StorySource = {
  source: string;
};
