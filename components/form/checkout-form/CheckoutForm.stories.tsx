import { ComponentStory, ComponentMeta } from '@storybook/react';
import CheckoutForm, { ICheckoutForm } from './CheckoutForm';
import { mockCheckoutFormProps } from './CheckoutForm.mocks';

export default {
  title: 'templates/CheckoutForm',
  component: CheckoutForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CheckoutForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckoutForm> = (args) => (
  <CheckoutForm {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCheckoutFormProps.base,
} as ICheckoutForm;

