/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';

import { DrawerHeading, DrawerClose } from './styles';

export const Heading = () => {
  return (
    <DrawerHeading>
      <h1
        css={{
          color: '#111827',
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          fontWeight: 500,
        }}
      >
        Test heading
      </h1>
      <DrawerClose>
        <button type="button">x</button>
      </DrawerClose>
    </DrawerHeading>
  );
};
