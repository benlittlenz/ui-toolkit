import React from 'react';

import { Body } from './Body';
import { Column } from './Column';
import { defaultProps } from './defaultProps';
import { Header, HeaderRow } from './Header';
import { Pagination } from './Pagination';
import { tableReducer } from './reducers/reducer';
import { Action, SingleRowAction } from './reducers/types';
import { TableRow } from './Row';
import { Table } from './Table';
import { TableProps, TableState } from './types';
import { getNumberOfPages } from './utils';

export function DataTable<T>(props: TableProps<T>): JSX.Element {
  const {
    data = defaultProps.data,
    columns = defaultProps.columns,
    keyField = defaultProps.keyField,
    selectableRowsSingle = defaultProps.selectableRowsSingle,
    pagination = defaultProps.pagination,
    // paginationTotalRows = defaultProps.paginationTotalRows,
    paginationDefaultPage = defaultProps.paginationDefaultPage,
    // paginationResetDefaultPage = defaultProps.paginationResetDefaultPage,
    paginationPerPage = defaultProps.paginationPerPage,
    // paginationRowsPerPageOptions = defaultProps.paginationRowsPerPageOptions,
    // paginationIconLastPage = defaultProps.paginationIconLastPage,
    // paginationIconFirstPage = defaultProps.paginationIconFirstPage,
    // paginationIconNext = defaultProps.paginationIconNext,
    // paginationIconPrevious = defaultProps.paginationIconPrevious,
    // paginationComponent = defaultProps.paginationComponent,
    // paginationComponentOptions = defaultProps.paginationComponentOptions,
  } = props;

  const [{ selectedRows, currentPage, rowsPerPage }, dispatch] = React.useReducer<
    React.Reducer<TableState<T>, Action<T>>
  >(tableReducer, {
    // Checkbox
    allSelected: false,
    selectedCount: 0,
    selectedRows: [],
    toggleOnSelectedRowsChange: false,
    // Pagination
    currentPage: paginationDefaultPage,
    rowsPerPage: paginationPerPage,
  });

  const sortedData = React.useMemo(() => {
    return [...data].sort();
  }, [data]);

  const tableRows = React.useMemo(() => {
    if (pagination) {
      const lastIndex = currentPage * rowsPerPage;
      const firstIndex = lastIndex - rowsPerPage;

      return sortedData.slice(firstIndex, lastIndex);
    }
    return sortedData;
  }, [sortedData, pagination, currentPage, rowsPerPage]);

  const handleChangeRowsPerPage = React.useCallback(
    (newRowsPerPage: number) => {
      console.log('newRowsPerPage', newRowsPerPage);
      const rowCount = tableRows.length;
      const updatedPage = getNumberOfPages(rowCount, newRowsPerPage);
      const recalculatedPage = Math.min(currentPage, updatedPage);

      dispatch({
        type: 'CHANGE_ROWS_PER_PAGE',
        page: recalculatedPage,
        rowsPerPage: newRowsPerPage,
      });
    },
    [currentPage, tableRows.length]
  );

  const handlePageChange = React.useCallback((page: number) => {
    dispatch({
      type: 'CHANGE_PAGE',
      page,
    });
  }, []);

  const handleSelectedRow = React.useCallback((action: SingleRowAction<T>) => {
    dispatch(action);
  }, []);

  return (
    <div>
      <Table role="table">
        <Header role="row-group">
          <HeaderRow role="row">
            {columns.map((column) => (
              <Column key={column.id} column={column} />
            ))}
          </HeaderRow>
        </Header>
        <Body role="row-group">
          {tableRows.map((row, i) => {
            console.log('ROW', row);
            console.log('selectedRows', selectedRows);
            const isRowSelected = selectedRows.some((r) => r === row);

            return (
              <TableRow
                key={i}
                id={i}
                rowIndex={i}
                columns={columns}
                row={row}
                keyField={keyField}
                selected={isRowSelected}
                selectableRowsSingle={selectableRowsSingle}
                onSelectedRow={handleSelectedRow}
              />
            );
          })}
        </Body>
      </Table>
      {data.length > 0 && pagination && (
        <Pagination
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          rowCount={sortedData.length}
          onPageChange={handlePageChange}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </div>
  );
}
