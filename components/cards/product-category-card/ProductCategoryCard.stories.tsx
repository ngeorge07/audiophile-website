import { ComponentMeta, ComponentStory } from '@storybook/react';
import ProductCard, { IProductCard } from './ProductCategoryCard';
import { mockProductCardProps } from './ProductCategoryCard.mocks';

export default {
  title: 'cards/ProductCategoryCard',
  component: ProductCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProductCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductCard> = (args) => (
  <ProductCard {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProductCardProps.base,
} as IProductCard;
