import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../../redux/store';
import FeaturedProduct, { IFeaturedProduct } from './FeaturedProduct';
import { mockFeaturedProductProps } from './FeaturedProduct.mocks';

export default {
  title: 'cards/home/FeaturedProduct',
  component: FeaturedProduct,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof FeaturedProduct>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FeaturedProduct> = (args) => (
  <Provider store={store}>
    <FeaturedProduct {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeaturedProductProps.base,
} as IFeaturedProduct;
