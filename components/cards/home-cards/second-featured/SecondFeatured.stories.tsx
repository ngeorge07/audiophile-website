import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
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
  <Provider store={store}>
    <SecondFeatured {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSecondFeaturedProps.base,
} as ISecondFeatured;
