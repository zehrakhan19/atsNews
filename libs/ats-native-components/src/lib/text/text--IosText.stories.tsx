import type { Meta } from '@storybook/react-native';
import { IosText } from './text';

const Story: Meta<typeof IosText> = {
  component: IosText,
  title: 'IosText'
};
export default Story;

export const Primary = {
  args: {}
};
