import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavMenu, { INavMenu } from './NavMenu';
import { mockNavMenuProps } from './NavMenu.mocks';

export default {
  title: 'navigation/NavMenu',
  component: NavMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof NavMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NavMenu> = (args) => (
  <NavMenu {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockNavMenuProps.base,
} as INavMenu;
