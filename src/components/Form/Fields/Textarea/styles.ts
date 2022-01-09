import styled from 'styled-components';

import { StyledInput } from '../Input/styles';

import { TextareaProps } from './types';
export const StyledTextArea = styled(StyledInput as 'textarea').attrs({
  as: 'textarea',
})<TextareaProps>`
  resize: ${(props) => !props.isResizable && 'none'};
`;
