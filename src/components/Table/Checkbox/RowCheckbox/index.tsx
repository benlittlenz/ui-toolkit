import React from 'react';
import styled from 'styled-components';

import { CellBase } from '../../Row/styles';

const TableCellCheckboxStyle = styled(CellBase)`
  flex: 0 0 48px;
  min-width: 48px;
  justify-content: center;
  align-items: center;
  user-select: none;
  white-space: nowrap;
`;

type RowCheckboxProps = {
  name: string;
  selected: boolean;
  setSelected: (selected: boolean) => void;
};

export function RowCheckbox({ name, selected, setSelected }: RowCheckboxProps): JSX.Element {
  return (
    <TableCellCheckboxStyle onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      <input
        type="checkbox"
        name={name}
        checked={selected}
        aria-checked={selected}
        onClick={() => setSelected(true)}
        aria-label={name}
      />
    </TableCellCheckboxStyle>
  );
}
