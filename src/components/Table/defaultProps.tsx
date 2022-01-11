import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@heroicons/react/solid';

export const defaultProps = {
  columns: [],
  data: [],
  title: '',
  keyField: 'id',
  pagination: true,
  paginationDefaultPage: 1,
  paginationResetDefaultPage: false,
  paginationTotalRows: 0,
  paginationPerPage: 5,
  paginationRowsPerPageOptions: [10, 15, 20, 25, 30],
  paginationComponent: null,
  paginationComponentOptions: {},
  paginationIconFirstPage: <ChevronDoubleLeftIcon style={{ height: '12px', width: '12px' }} />,
  paginationIconLastPage: <ChevronDoubleRightIcon style={{ height: '12px', width: '12px' }} />,
  paginationIconNext: <ChevronLeftIcon style={{ height: '12px', width: '12px' }} />,
  paginationIconPrevious: <ChevronRightIcon style={{ height: '12px', width: '12px' }} />,
};
