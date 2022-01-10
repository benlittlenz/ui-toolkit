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
  height: ${(props) => {
    console.log('SIZE: ', getSizeVariant(props.size));
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
  console.log('variant', size);
  if (size === 'small') {
    return '1rem';
  } else if (size === 'medium') {
    return '2rem';
  } else if (size === 'large') {
    return '4rem';
  }
  return '8rem';
  // switch (size) {
  //   case size === 'small':
  //     return '1rem';
  //   case size === 'medium':
  //     return '2rem';
  //   case size === 'large':
  //     return '4rem';
  //   case size === 'extralarge':
  //     return '8rem';
  //   default:
  //     return '2rem';
  // }
};
