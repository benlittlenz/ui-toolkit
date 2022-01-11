export type PaginationProps = {
  currentPage: number;
  rowsPerPage: number;
  paginationIconLastPage?: React.ReactNode;
  paginationIconFirstPage?: React.ReactNode;
  paginationIconNext?: React.ReactNode;
  paginationIconPrevious?: React.ReactNode;
  onChangeRowsPerPage: (rows: number, currentPage: number) => void;
};
