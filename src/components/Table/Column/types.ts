export type Primitive = string | number | boolean | bigint;
export type Selector<T> = (row: T, rowIndex?: number) => Primitive;
export type Format<T> = (row: T, rowIndex: number) => React.ReactNode;

export type TableColumnBase = {
  allowOverflow?: boolean;
  button?: boolean;
  center?: boolean;
  compact?: boolean;
  reorder?: boolean;
  grow?: number;
  id?: string | number;
  ignoreRowClick?: boolean;
  maxWidth?: string;
  minWidth?: string;
  name?: string | number | React.ReactNode;
  omit?: boolean;
  right?: boolean;
  sortable?: boolean;
  width?: string;
  wrap?: boolean;
};

export interface TableColumn<T> extends TableColumnBase {
  cell?: (row: T, rowIndex: number, column: TableColumn<T>, id: string | number) => React.ReactNode;
  selector?: Selector<T>;
  format?: Format<T> | undefined;
}

export type TableColumnProps<T> = {
  column: TableColumn<T>;
};
