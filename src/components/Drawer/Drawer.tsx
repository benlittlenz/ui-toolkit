/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';

import { Heading } from './Heading';
import { DrawerBody } from './styles';
import { DrawerProps } from './types';
import { Wrapper } from './Wrapper';

export const Drawer = ({ isOpen, children }: DrawerProps) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Heading />
      <DrawerBody>{children}</DrawerBody>
    </Wrapper>
  );
};
