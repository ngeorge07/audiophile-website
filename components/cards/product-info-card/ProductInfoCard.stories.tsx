import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import ProductInfoCard, { IProductInfoCard } from './ProductInfoCard';
import { mockProductInfoCardProps } from './ProductInfoCard.mocks';

export default {
  title: 'cards/ProductInfoCard',
  component: ProductInfoCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProductInfoCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductInfoCard> = (args) => (
  <Provider store={store}>
    <ProductInfoCard {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProductInfoCardProps.base,
} as IProductInfoCard;
