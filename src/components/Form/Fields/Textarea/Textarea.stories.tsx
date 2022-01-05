import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Field } from '../Field';

export default {
  title: 'Example/Textarea',
  component: Field.Textarea,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const Template: Story = (args) => {
  return (
    <Field>
      <Field.Label>Textarea Label</Field.Label>
      <Field.Textarea placeholder="Custom Textarea" {...args} />
    </Field>
  );
};

export const Default = Template.bind({});

Default.args = {
  isResizable: true,
};
