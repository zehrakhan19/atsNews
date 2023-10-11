import type { Meta } from '@storybook/react';
import { withHook } from './withHook';

const Story: Meta<typeof withHook> = {
  component: withHook,
  title: 'withHook'
};
export default Story;

export const Primary = {
  args: {}
};
