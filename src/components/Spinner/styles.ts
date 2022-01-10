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

export const SpinnerWrapper = styled.svg<SpinnerProps>`
  margin-right: 5px;
  height: ${(props) => {
    return getSizeVariant(props.size);
  }};
  width: ${(props) => getSizeVariant(props.size)};

  animation: spin 1s linear infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const getSizeVariant = (size: any) => {
  if (size === 'small') {
    return '1rem';
  } else if (size === 'medium') {
    return '2rem';
  } else if (size === 'large') {
    return '4rem';
  }
  return '8rem';
};
