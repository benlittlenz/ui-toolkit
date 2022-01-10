import styled from 'styled-components';

import { themeColors } from '../../theme';

import { DrawerProps } from './types';

export const DrawerWrapper = styled.div<DrawerProps>`
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  transform: ${(props) => (!props.isOpen ? 'translateX(100%)' : null)};
  width: 100%;
  z-index: 10;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
`;

export const DrawerOverlay = styled.div<DrawerProps>`
  overflow: hidden;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.isOpen ? null : 'none')};
`;

export const DrawerContentWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  padding-left: 2.5rem;
  max-width: 100%;
  transition: all 0.2s ease-in-out;
`;

export const DrawerBody = styled.div`
  overflow-y: auto;
  padding: 1.5rem 1rem;
  flex: 1 1 0%;
  @media (min-width: 640px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

export const DrawerHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${themeColors.gray.lightest};
  padding: 0.25rem 1rem;
`;

export const DrawerClose = styled.div`
  display: flex;
  margin-left: 0.75rem;
  align-items: center;
  button {
    padding: 0.5rem;
    margin: -0.5rem;
    background: transparent;
    border: none;
  }
`;
