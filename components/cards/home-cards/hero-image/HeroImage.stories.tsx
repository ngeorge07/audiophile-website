import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Provider } from 'react-redux';
import { store } from '../../../../store';
import HeroImage, { IHeroImage } from './HeroImage';
import { mockHeroImageProps } from './HeroImage.mocks';

export default {
  title: 'cards/home/HeroImage',
  component: HeroImage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof HeroImage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HeroImage> = (args) => (
  <Provider store={store}>
    <HeroImage {...args} />
  </Provider>
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockHeroImageProps.base,
} as IHeroImage;
