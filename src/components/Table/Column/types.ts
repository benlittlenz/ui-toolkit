export type Primitive = string | number | boolean | bigint;
export type Selector<T> = (row: T, rowIndex?: number) => Primitive;

export type TableColumnBase = {
  id?: string | number;
  name?: string | number | React.ReactNode;
};

export interface TableColumn<T> extends TableColumnBase {
  id?: string | number;
  name?: string | number | React.ReactNode;
  selector?: Selector<T>;
}

export type TableColumnProps<T> = {
  column: TableColumn<T>;
};
