import { Scope } from "react-runner";
import { Theme, Language } from "react-live-runner";

export type Options = {
  disabled?: boolean;
  scope?: Scope;
  theme?: Theme;
  language?: Language;
};

export type StorySource = {
  source: string;
};
