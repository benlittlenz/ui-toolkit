import styled from 'styled-components';

import { TableColumnProps } from './types';

const ColumnStyled = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

export function Column<T>({ column }: TableColumnProps<T>): JSX.Element | null {
  return <ColumnStyled>{column.name}</ColumnStyled>;
}
