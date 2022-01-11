import React from 'react';
import styled from 'styled-components';

import { RowCheckbox } from '../Checkbox/RowCheckbox';

import { TableCell } from './Cell';

const TableRowStyle = styled.div`
  display: flex;
  align-items: stretch;
  align-content: stretch;
  width: 100%;
  box-sizing: border-box;
`;

type TableRowProps<T> = {
  columns: any;
  id: string | number;
  rowIndex: number;
  keyField?: string;
  row: T;
};

export function TableRow<T>({ columns, id, row, rowIndex }: TableRowProps<T>) {
  const [selected, setSelected] = React.useState(false);
  return (
    <TableRowStyle id={`row-${id}`} role="row">
      <RowCheckbox name={`select-row-${rowIndex}`} selected={selected} setSelected={setSelected} />
      {columns.map((column: any) => (
        <TableCell
          key={`cell-${column.id}`}
          id={`cell-${column.id}`}
          column={column}
          row={row}
          rowIndex={rowIndex}
        />
      ))}
    </TableRowStyle>
  );
}
