/* eslint-disable */
import Link from './Link';
import type { Meta } from '@storybook/react';

export default {
  title: "Link",
  tags: ['autodocs'],
  component: Link,
  argTypes: { onClick: { action: 'clicked' } }

};

export const Default = {
  args: {
    theme: "bw",
    label:"Button text"
  },
};


 