export type PaginationProps = {
  currentPage: number;
  rowsPerPage: number;
  rowCount: number;
  paginationIconLastPage?: React.ReactNode;
  paginationIconFirstPage?: React.ReactNode;
  paginationIconNext?: React.ReactNode;
  paginationIconPrevious?: React.ReactNode;
  onPageChange: (page: number) => void;
  onChangeRowsPerPage: (rows: number, currentPage: number) => void;
};
