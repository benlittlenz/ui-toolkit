import { Meta, Story } from '@storybook/react';

import { Spinner } from './Spinner';
import { SpinnerProps } from './types';

const meta: Meta = {
  title: 'Components/Elements/Spinner',
  component: Spinner,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<SpinnerProps> = (props) => <Spinner {...props} />;

export const Default = Template.bind({});
Default.args = {};
