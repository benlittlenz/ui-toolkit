import { Meta, Story } from '@storybook/react';

import { Drawer } from './Drawer';

const meta: Meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

export const Demo: Story = () => {
  return (
    <>
      <Drawer isOpen>gfdfgdgffdf</Drawer>
    </>
  );
};
