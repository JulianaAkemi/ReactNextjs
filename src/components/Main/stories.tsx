import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default',
  },
} as ComponentMeta<typeof Main>;

export const Template: ComponentStory<typeof Main> = (args) => (
  <Main {...args} />
);
