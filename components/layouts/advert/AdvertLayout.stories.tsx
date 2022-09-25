import { ComponentMeta, ComponentStory } from '@storybook/react';
import AdvertLayout, { IAdvert } from './AdvertLayout';
import { mockAdvertProps } from './AdvertLayout.mocks';

export default {
  title: 'layouts/AdvertLayout',
  component: AdvertLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AdvertLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AdvertLayout> = (args) => (
  <AdvertLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAdvertProps.base,
} as IAdvert;
