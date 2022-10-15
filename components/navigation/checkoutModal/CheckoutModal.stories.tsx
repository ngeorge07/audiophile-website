import { ComponentMeta, ComponentStory } from '@storybook/react';
import CheckoutModal, { ICheckoutModal } from './CheckoutModal';
import { mockCheckoutModalProps } from './CheckoutModal.mocks';

export default {
  title: 'templates/CheckoutModal',
  component: CheckoutModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutModal> = (args) => (
  <CheckoutModal {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCheckoutModalProps.base,
} as ICheckoutModal;
