import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import CheckoutModal, { ICheckoutModal } from './CheckoutModal';
import { mockCheckoutModalProps } from './CheckoutModal.mocks';

export default {
  title: 'navigation/CheckoutModal',
  component: CheckoutModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutModal> = (args) => (
  <Provider store={store}>
    <CheckoutModal {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCheckoutModalProps.base,
} as ICheckoutModal;
