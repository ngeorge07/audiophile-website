import { ComponentMeta, ComponentStory } from '@storybook/react';
import CategoriesSection, { ICategoriesSection } from './CategoriesSection';
import { mockCategoriesSectionProps } from './CategoriesSection.mocks';

export default {
  title: 'navigation/CategoriesSection',
  component: CategoriesSection,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CategoriesSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CategoriesSection> = (args) => (
  <CategoriesSection {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockCategoriesSectionProps.base,
} as ICategoriesSection;
