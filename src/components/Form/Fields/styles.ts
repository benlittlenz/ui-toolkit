import styled from 'styled-components';

import { themeColors } from '../../../theme';

import { TextareaProps } from './types';

export const StyledLabel = styled.label`
  display: "inline-block",
  font-weight: 500;
  margin-bottom: 0.4rem;
`;

export const StyledInput = styled.input`
  border: 0;
  border-radius: 0.35rem;
  color: ${themeColors.gray.dark};
  border: 1px solid ${themeColors.gray.light};
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 0.25rem 0.75rem;
  width: 100%;
`;

export const StyledTextArea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})<TextareaProps>`
  resize: ${(props) => !props.isResizable && 'none'};
`;
