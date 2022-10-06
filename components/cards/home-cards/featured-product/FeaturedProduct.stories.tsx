import { ComponentMeta, ComponentStory } from '@storybook/react';
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
  <FeaturedProduct {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockFeaturedProductProps.base,
} as IFeaturedProduct;
