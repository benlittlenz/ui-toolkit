import styled from 'styled-components';
import { variant } from 'styled-system';

import { sizeVariants, styleVariants } from './theme';
import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  display: ${(props) => (props.isFullWidth ? 'flex' : 'inline-flex')};
  width: ${(props) => props.isFullWidth && '100%'};
  cursor: pointer;
  border: 0;
  font-weight: 400;
  text-align: center;
  user-select: none;
  border-radius: 6px;
  padding: ${(props) => {
    if (props.size === 'small') {
      return sizeVariants['small'].padding;
    } else if (props.size === 'medium') {
      return sizeVariants['medium'].padding;
    }
    return sizeVariants['large'].padding;
  }};
  font-size: ${(props) => {
    if (props.size === 'small') {
      return sizeVariants['small'].fontSize;
    } else if (props.size === 'medium') {
      return sizeVariants['medium'].fontSize;
    }
    return sizeVariants['large'].fontSize;
  }};
  line-height: 1.5;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
    opacity: 0.85;
  }

  ${variant({
    variants: styleVariants,
  })}
`;
