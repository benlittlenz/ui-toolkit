import { SortAction } from '../reducers/types';
import { SortOrder } from '../types';

export type Primitive = string | number | boolean | bigint;
export type Selector<T> = (row: T, rowIndex?: number) => Primitive;
export type Format<T> = (row: T, rowIndex: number) => React.ReactNode;

export type TableColumnBase = {
  center?: boolean;
  id?: string | number;
  maxWidth?: string;
  minWidth?: string;
  name?: string | number | React.ReactNode;
  right?: boolean;
  sortable?: boolean;
  width?: string;
};

export interface TableColumn<T> extends TableColumnBase {
  cell?: (row: T, rowIndex: number, column: TableColumn<T>, id: string | number) => React.ReactNode;
  selector?: Selector<T>;
  format?: Format<T> | undefined;
}

export type TableColumnProps<T> = {
  column: TableColumn<T>;
  sortDirection: SortOrder;
  onSort: (action: SortAction<T>) => void;
};

export interface ColumnSortableProps {
  sortActive: boolean;
}
