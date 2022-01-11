export interface PaginationPageAction {
  type: 'CHANGE_PAGE';
  page: number;
}

export interface PaginationRowsPerPageAction {
  type: 'CHANGE_ROWS_PER_PAGE';
  rowsPerPage: number;
  page: number;
}

export interface SingleRowAction<T> {
  type: 'SELECT_SINGLE_ROW';
  keyField: string;
  row: T;
  isSelected: boolean;
  rowCount: number;
  singleSelect: boolean;
}

export type Action<T> = SingleRowAction<T> | PaginationRowsPerPageAction | PaginationPageAction;
