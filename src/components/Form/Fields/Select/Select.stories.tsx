import { Story, Meta } from '@storybook/react';
import React from 'react';

import { Field } from '../Field';

export default {
  title: 'Example/Select',
  component: Field.Select,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const options = [
  { label: 'Test 1', value: 'Test 1' },
  { label: 'Test 2', value: 'Test 2' },
  { label: 'Test 3', value: 'Test 3' },
];

const Template: Story = (args) => {
  return (
    <Field>
      <Field.Label>Select Field</Field.Label>
      <Field.Select options={options} defaultValue="Test 3" {...args} />
    </Field>
  );
};

export const Default = Template.bind({});
