import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

const Template: Story = (args) => <Button {...args}>MyButton</Button>;

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};
