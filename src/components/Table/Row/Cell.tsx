import * as React from 'react';

import { Format, Selector, TableColumn } from '../Column/types';

import { CellStyle } from './styles';

interface CellProps<T> {
  id: string;
  column: TableColumn<T>;
  rowIndex: number;
  row: T;
}

export function TableCell<T>({ id, column, row, rowIndex }: CellProps<T>): JSX.Element {
  return (
    <CellStyle id={id} role="grid-cell" renderAsCell={!!column.cell}>
      <div>{getProperty(row, column.selector, column.format, rowIndex)}</div>
    </CellStyle>
  );
}

export function getProperty<T>(
  row: T,
  selector: Selector<T> | string | undefined | null | unknown, // unknown allows us to throw an error for JS code
  format: Format<T> | undefined | null,
  rowIndex: number
): React.ReactNode {
  if (!selector) {
    return null;
  }

  // format will override how the selector is displayed but the original dataset is used for sorting
  if (format && typeof format === 'function') {
    return format(row, rowIndex);
  }

  if (selector && typeof selector === 'function') {
    return selector(row, rowIndex);
  }
  return '';
}
