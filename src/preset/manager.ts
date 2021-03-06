import { addons, types } from "@storybook/addons";

import { ADDON_ID, PANEL_ID, PARAM_KEY } from "../constants";
import { Panel } from "../Panel";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Live Code",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
    paramKey: PARAM_KEY,
  });
});
