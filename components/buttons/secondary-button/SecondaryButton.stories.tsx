import { ComponentMeta, ComponentStory } from '@storybook/react';
import SecondaryButton, { ISecondaryButton } from './SecondaryButton';
import { mockSecondaryButtonProps } from './SecondaryButton.mocks';

export default {
  title: 'buttons/SecondaryButton',
  component: SecondaryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecondaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecondaryButton> = (args) => (
  <SecondaryButton {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSecondaryButtonProps.base,
} as ISecondaryButton;
