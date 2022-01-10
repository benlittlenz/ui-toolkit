import styled from 'styled-components';

import { ColumnProps } from './types';

const ColumnStyled = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

export const Column = ({ column }: ColumnProps): JSX.Element => {
  return <ColumnStyled>{column.name}</ColumnStyled>;
};
