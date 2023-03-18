import { useEffect } from '@storybook/addons'

import { PARAM_KEY } from './constants'

export const useWithDarkmode = (StoryFn, context) => {
  const { globals } = context
  const isActive = globals[PARAM_KEY] === true

  useEffect(() => {
    document.getElementsByTagName('html')[0].id = isActive
      ? 'night-mode'
      : 'day-mode'
  }, [isActive])

  return StoryFn()
}