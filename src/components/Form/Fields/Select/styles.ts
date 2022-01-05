import styled from 'styled-components';

import { themeColors } from '../../../../theme';

export const StyledSelect = styled.select`
  display: block;
  padding: 0.5rem 2.5rem 0.5rem 0.75rem;
  margin-top: 0.25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  width: 100%;
  border-radius: 0.375rem;
  border-color: #4b5563;
  background: #fff;
`;

export const DropdownInput = styled.input`
  padding: 10px 14px 8px;
  width: 100%;
  border: none;
  color: ${themeColors.gray.darkest};
  background: none;
  &:focus {
    outline: none;
  }
`;
