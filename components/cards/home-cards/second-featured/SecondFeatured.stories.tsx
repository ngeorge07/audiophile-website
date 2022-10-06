import { ComponentMeta, ComponentStory } from '@storybook/react';
import SecondFeatured, { ISecondFeatured } from './SecondFeatured';
import { mockSecondFeaturedProps } from './SecondFeatured.mocks';

export default {
  title: 'cards/home/SecondFeatured',
  component: SecondFeatured,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SecondFeatured>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecondFeatured> = (args) => (
  <SecondFeatured {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSecondFeaturedProps.base,
} as ISecondFeatured;
