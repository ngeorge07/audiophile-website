import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import Home from '../../pages';
import { store } from '../../redux/store';

export default {
  title: 'pages/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => (
  <Provider store={store}>
    <Home {...args} />
  </Provider>
);

export const Base = Template.bind({});
