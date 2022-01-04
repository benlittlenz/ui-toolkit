import styled from 'styled-components';

import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  cursor: pointer;
  border: 0;
  font-weight: 400;
  text-align: center;
  user-select: none;
  padding: 0.4rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0;
  transition: all 0.15s ease-in-out;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: inherit;
    opacity: 0.65;
  }
`;
