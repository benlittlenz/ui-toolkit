import React from 'react';
import styled from 'styled-components';

import { SingleRowAction } from '../../reducers/types';
import { CellBase } from '../../Row/styles';
import { Checkbox } from '../Checkbox';

const TableCellCheckboxStyle = styled(CellBase)`
  flex: 0 0 48px;
  min-width: 48px;
  justify-content: center;
  align-items: center;
  user-select: none;
  white-space: nowrap;
`;

type RowCheckboxProps<T> = {
  name: string;
  keyField: string;
  selected: boolean;
  selectableRowsSingle: boolean;
  onSelectedRow: (action: SingleRowAction<T>) => void;
  row: T;
};

export function RowCheckbox<T>({
  name,
  keyField,
  row,
  selected,
  selectableRowsSingle,
  onSelectedRow,
}: RowCheckboxProps<T>): JSX.Element {
  const handleRowSelect = () => {
    onSelectedRow({
      type: 'SELECT_SINGLE_ROW',
      keyField,
      row,
      rowCount: 1,
      isSelected: selected,
      singleSelect: selectableRowsSingle,
    });
  };
  return (
    <TableCellCheckboxStyle onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      <Checkbox name={name} checked={selected} aria-checked={selected} onClick={handleRowSelect} />
    </TableCellCheckboxStyle>
  );
}
