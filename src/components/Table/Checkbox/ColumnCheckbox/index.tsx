import React from 'react';
import styled from 'styled-components';

import { AllRowsAction } from '../../reducers/types';
import { CellBase } from '../../Row/styles';
import { Checkbox } from '../Checkbox';

const ColumnStyle = styled(CellBase)`
  flex: 0 0 48px;
  justify-content: center;
  align-items: center;
  user-select: none;
  white-space: nowrap;
  font-size: unset;
`;

interface ColumnCheckboxProps<T> {
  rows: T[];
  selectedRows?: T[];
  allSelected: boolean;
  onSelectAllRows: (action: AllRowsAction<T>) => void;
}

export function ColumnCheckbox<T>({ rows, allSelected, onSelectAllRows }: ColumnCheckboxProps<T>) {
  const rowCount = rows.length;
  const handleSelectAll = () => {
    onSelectAllRows({
      type: 'SELECT_ALL_ROWS',
      rows,
      rowCount,
    });
  };
  return (
    <ColumnStyle onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      <Checkbox
        name="select-all-rows"
        checked={allSelected}
        aria-checked={allSelected}
        onClick={handleSelectAll}
      />
    </ColumnStyle>
  );
}
