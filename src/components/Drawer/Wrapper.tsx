/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import * as React from 'react';

import { DrawerWrapper, DrawerOverlay, DrawerContentWrapper } from './styles';
import { DrawerProps } from './types';

export const Wrapper = ({ isOpen, children }: DrawerProps) => {
  return (
    <DrawerWrapper isOpen={isOpen}>
      <DrawerOverlay isOpen={isOpen}>
        <DrawerContentWrapper>
          <div
            css={{
              width: '100vw',
              maxWidth: '26rem',
            }}
          >
            <div
              css={{
                display: 'flex',
                overflowY: 'scroll',
                backgroundColor: '#ffffff',
                flexDirection: 'column',
                height: '100%',
                boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`,
              }}
            >
              {children}
            </div>
          </div>
        </DrawerContentWrapper>
      </DrawerOverlay>
    </DrawerWrapper>
  );
};
