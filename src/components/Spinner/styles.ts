import styled from 'styled-components';

import { SpinnerProps } from './types';

export const SrOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  whitespace: nowrap;
  borderwidth: 0;
`;

export const SpinnerWrapper = styled.div<SpinnerProps>`
  height: ${(props) => getSizeVariant(props.size)};
  width: ${(props) => getSizeVariant(props.size)};
`;

const getSizeVariant = ({ size }: any) => {
  switch (size) {
    case size === 'small':
      return '1rem';
    case size === 'medium':
      return '2rem';
    case size === 'large':
      return '4rem';
    case size === 'extralarge':
      return '8rem';
    default:
      return '2rem';
  }
};
