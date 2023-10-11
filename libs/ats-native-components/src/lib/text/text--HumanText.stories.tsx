import type { Meta } from '@storybook/react-native';
import { HumanText } from './text';

const Story: Meta<typeof HumanText> = {
  component: HumanText,
  title: 'HumanText'
};
export default Story;

export const Primary = {
  args: {}
};
