import { Scope } from "react-runner";
import { Theme, Language } from "react-live-runner";

export type Options = {
  disable?: boolean;
  scope?: Scope;
  theme?: Theme;
  language?: Language;
  readOnly?: boolean;
};

export type StorySource = {
  source: string;
};
