import React, { useCallback } from 'react';
import { useGlobals } from '@storybook/api';
import { addons, types } from '@storybook/addons';
import { IconButton } from '@storybook/components';
import { ADDON_ID, PARAM_KEY } from '../constants';
import { Moon,Sun } from "../../../icons"
const Tool = () => {
  const [globals, updateGlobals] = useGlobals();

  const isActive = globals[PARAM_KEY] || false;

  const toggleDarkMode = useCallback(
    () =>
      updateGlobals({
        [PARAM_KEY]: !isActive,
      }),
    [isActive]
  );
  

  return (
    <IconButton
      active={isActive}
      title="Toggle Light/Dark mode"
      onClick={toggleDarkMode}
    >
      {isActive ? <Moon /> : <Sun />}
    </IconButton>
  );
};

addons.register(ADDON_ID, () => {
  addons.add(ADDON_ID, {
    title: 'Toggle Light/Dark mode toolbar',
    //👇 Sets the type of UI element in Storybook
    type: types.TOOL,
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });
});
