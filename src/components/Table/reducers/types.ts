import { TableColumn } from '../Column/types';
import { SortOrder } from '../types';

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

export interface AllRowsAction<T> {
  type: 'SELECT_ALL_ROWS';
  rows: T[];
  rowCount: number;
}

export interface SortAction<T> {
  type: 'SORT_CHANGE';
  sortDirection: SortOrder;
  selectedColumn: TableColumn<T>;
}

export type Action<T> =
  | SingleRowAction<T>
  | AllRowsAction<T>
  | PaginationRowsPerPageAction
  | PaginationPageAction
  | SortAction<T>;
