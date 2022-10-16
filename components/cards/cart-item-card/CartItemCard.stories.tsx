import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import CartItemCard, { ICartItemCard } from './CartItemCard';
import { mockCartItemCardProps } from './CartItemCard.mocks';

export default {
  title: 'templates/CartItemCard',
  component: CartItemCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CartItemCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CartItemCard> = (args) => (
  <Provider store={store}>
    <CartItemCard {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCartItemCardProps.base,
} as ICartItemCard;
