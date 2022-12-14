import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import ProductSuggestedCard, {
  IProductSuggestedCard,
} from './ProductSuggestedCard';
import { mockProductSuggestedCardProps } from './ProductSuggestedCard.mocks';

export default {
  title: 'cards/ProductSuggestedCard',
  component: ProductSuggestedCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ProductSuggestedCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProductSuggestedCard> = (args) => (
  <Provider store={store}>
    <ProductSuggestedCard {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockProductSuggestedCardProps.base,
} as IProductSuggestedCard;
