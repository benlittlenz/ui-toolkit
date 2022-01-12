import React from 'react';
import styled from 'styled-components';

import { RowCheckbox } from '../Checkbox/RowCheckbox';
import { SingleRowAction } from '../reducers/types';
import { TableRowProp } from '../types';
import { prop } from '../utils';

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
  selected: boolean;
  selectableRowsSingle: boolean;
  onSelectedRow: (action: SingleRowAction<T>) => void;
};

export function TableRow<T>({
  columns = [],
  id,
  row,
  rowIndex,
  keyField = 'id',
  selected,
  selectableRowsSingle = false,
  onSelectedRow = () => null,
}: TableRowProps<T>) {
  const rowKeyField = prop(row as TableRowProp, keyField);
  return (
    <TableRowStyle id={`row-${id}`} role="row">
      <RowCheckbox
        name={`select-row-${rowKeyField}`}
        keyField={keyField}
        row={row}
        selected={selected}
        onSelectedRow={onSelectedRow}
        selectableRowsSingle={selectableRowsSingle}
      />
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
