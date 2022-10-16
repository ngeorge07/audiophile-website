import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import ThirdFeatured, { IThirdFeatured } from './ThirdFeatured';
import { mockThirdFeaturedProps } from './ThirdFeatured.mocks';

export default {
  title: 'cards/home/ThirdFeatured',
  component: ThirdFeatured,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ThirdFeatured>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThirdFeatured> = (args) => (
  <Provider store={store}>
    <ThirdFeatured {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockThirdFeaturedProps.base,
} as IThirdFeatured;
