/* eslint-disable */
import ButtonM from './ButtonM';
 
export default {
  title: "ButtonM",
  tags: ['autodocs'],
  component: ButtonM,
  argTypes: { onClick: { action: 'clicked' } }
};

export const Default = {
  args: {
    type: "primary",
    hover: "on", 
    iconType: "none",
    label:"Button text"
  },
};
