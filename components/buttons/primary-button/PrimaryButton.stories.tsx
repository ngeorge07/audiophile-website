import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import PrimaryButton, { IPrimaryButton } from './PrimaryButton';
import { mockPrimaryButtonProps } from './PrimaryButton.mocks';
export default {
  title: 'buttons/PrimaryButton',
  component: PrimaryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof PrimaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryButton> = (args) => (
  <Provider store={store}>
    <PrimaryButton {...args} />
  </Provider>
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Solid = Template.bind({});
Solid.args = {
  ...mockPrimaryButtonProps.solid,
} as IPrimaryButton;

export const Ghost = Template.bind({});
Ghost.args = {
  ...mockPrimaryButtonProps.ghost,
} as IPrimaryButton;
