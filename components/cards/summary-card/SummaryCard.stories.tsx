import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import SummaryCard, { ISummaryCard } from './SummaryCard';
import { mockSummaryCardProps } from './SummaryCard.mocks';

export default {
  title: 'cards/SummaryCard',
  component: SummaryCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SummaryCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SummaryCard> = (args) => (
  <Provider store={store}>
    <SummaryCard {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSummaryCardProps.base,
} as ISummaryCard;
