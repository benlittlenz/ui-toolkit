import { TableColumn } from './Column/types';

export type PaginationChangePage = (page: number, totalRows: number) => void;
export type PaginationChangeRowsPerPage = (currentRowsPerPage: number, currentPage: number) => void;
export type PaginationComponentProps = {
  rowsPerPage: number;
  rowCount: number;
  currentPage: number;
  onChangePage: PaginationChangePage;
  onChangeRowsPerPage: PaginationChangeRowsPerPage;
};
export type PaginationComponent = React.ComponentType<PaginationComponentProps>;

export interface PaginationOptions {
  noRowsPerPage?: boolean;
  rowsPerPageText?: string;
  rangeSeparatorText?: string;
  selectAllRowsItem?: boolean;
  selectAllRowsItemText?: string;
}

export type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  keyField?: string;
  pagination?: boolean;
  paginationComponent?: PaginationComponent;
  paginationComponentOptions?: PaginationOptions;
  paginationDefaultPage?: number;
  paginationIconFirstPage?: React.ReactNode;
  paginationIconLastPage?: React.ReactNode;
  paginationIconNext?: React.ReactNode;
  paginationIconPrevious?: React.ReactNode;
  paginationPerPage?: number;
  paginationResetDefaultPage?: boolean;
  paginationRowsPerPageOptions?: number[];
  paginationTotalRows?: number;
};

export type TableRow = Record<string, unknown>;
